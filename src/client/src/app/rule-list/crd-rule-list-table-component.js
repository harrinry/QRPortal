import React, { memo, useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MuiDataTable from 'lib/material-ui-components/data-table';
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";

const useStyles = makeStyles({
  cellContainer: {
    width: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  cell: {
    display: "flex",
    color: "#fff",
    padding: 4,
    borderRadius: 6,
    width: 60,
    justifyContent: "center",
  },
  severityCritical: {
    // marginLeft: 15,
    backgroundColor: "#e50202",
  },
  severityMedium: {
    // marginLeft: 5,
    backgroundColor: "#ea921e",
  },
  severityLow: {
    // marginLeft: 17,
    backgroundColor: "#1e98ea",
  }
});

function getSeverityText(severity){
  switch (severity) {
    case 10:
        return "Medium";
      case 20:
        return "High";
      case 30:
        return "Critical";
      default:
        return "Medium";
  }
}

const RulesListTable = memo(({ data, selectedRuleId, getRuleDetails }) => {
  const { url } = useRouteMatch();

  const locationParams = useLocation();
  const { search: locationParamSearch } = locationParams || {};

  const history = useHistory();

  const getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTable: {
        responsiveBase: {
          maxHeight: 'calc(100vh - 352px) !important',
          overflow: 'auto',
          scrollbarWidth: "thin",
        }
      },
      MuiTableCell: {
        root: {
          padding: 12,
        },
        head: {
          fontWeight: 'bold',
        },
      },
      MuiTableRow: {
        root: {
          cursor: 'pointer',

          '&$selected': {
            backgroundColor: '#c1e1ec !important',
          },
        },
      },
      MUIDataTableBodyCell: {
        root: {
          fontSize: 13,
        },
      },
      MuiTablePagination: {
        menuItem: {
          fontSize: 12,
        },
      },
    },
  });
  const theme = useMemo(() => getMuiTheme(), []);
  const [selectedRow, setSelectedRow] = useState([]);
  const [filterListItems, setFilterListItems] = useState(['Hide Deprecated']);
  const classes = useStyles();

  const getSeverityColorClass = (severity) => {
    switch (severity) {
      case 10:
        return classes.severityLow;
      case 20:
        return classes.severityMedium;
      case 30:
        return classes.severityCritical;
      default:
        return classes.severityLow;
    }
  }

  const columns = [
    {
      name: 'id',
      label: 'Id',
      options: { filter: false, sort: true },
    },
    {
      name: 'name',
      label: 'Name',
      options: {
        sort: true,
        filter: true,
        filterType: 'checkbox',
        filterList: filterListItems,
        filterOptions: {
          names: ['Hide Deprecated'],
          logic: (name, filterVal) => {
            const show = filterVal.indexOf('Hide Deprecated') >= 0 && !(name.startsWith('DEPRECATED'));

            return !show;
          },
        },
        customBodyRenderLite: (dataIndex) => {
          const item = data[dataIndex];
          const value = item.name;
          return(<div className="if-cell-container">

            {item.isTemplate && <img src='assets/img/placeholder-template.svg'/>}
            <span className="if-cell-value">{value}</span>
            </div>)
        }
      },
    },
    {
      name: 'severity',
      label: 'Severity',
      options: { 
        sort: true,
        filter: true,
        filterOptions: {
          names: [ "Medium", "High", "Critical" ],
          logic: (name, filterVal) => {
            const _name = getSeverityText(name);
            const show = (filterVal.indexOf(_name) >= 0);

            return !show;
          },
        },
        customBodyRenderLite: (dataIndex) => {
          const item = data[dataIndex];
          return(<div className={classes.cellContainer}><span className={classNames(classes.cell, getSeverityColorClass(item.severity))}>{getSeverityText(item.severity)}</span></div>)
        }
      },
    },
  ];

  const onRowClick = (rowData, rowMeta) => {
    rowData[0] && getRuleDetails(rowData[0]);
    let searchString = `${url}/details/${rowData[0]}`;

    // add query parameter to search string if they exist
    if (locationParamSearch) {
      searchString = searchString + locationParamSearch;
    }

    rowData[0] && history.push(searchString);
    setSelectedRow([rowMeta.dataIndex]);
  };

  const tableOptions = {
    filter: true,
    print: false,
    viewColumns: false,
    sort: true,
    selectableRowsHeader: false,
    selectableRowsHideCheckboxes: true,
    selectableRows: 'single',
    selectToolbarPlacement: 'none',
    rowsSelected: selectedRow,
    rowsPerPage: 50,
    rowsPerPageOptions: [10, 25, 50, 100],
    downloadOptions: { filename: 'cast-rules-list.csv' },
    onRowClick: (rowData, rowMeta) => onRowClick(rowData, rowMeta),
    onFilterChange: (changedColumn, filterList) => {
      (changedColumn === 'name' && !_isEmpty(filterList[1]))
        ? setFilterListItems(['Hide Deprecated'])
        : setFilterListItems([]);
    },
  };

  useEffect(() => {
    const ruleIndex = data.findIndex(rule => rule.id.toString() === selectedRuleId);

    setSelectedRow(ruleIndex >= 0 ? [ruleIndex] : []);
  }, [data]);

  return (
    <MuiThemeProvider theme={theme}>
      <MuiDataTable
        title={'Rules'}
        columns={columns}
        data={data}
        options={tableOptions}
      />
    </MuiThemeProvider>
  );
});

RulesListTable.propTypes = {
  data: PropTypes.array,
  getRuleDetails: PropTypes.func,
};

RulesListTable.defaultProps = {
  data: [],
};

export default RulesListTable;
