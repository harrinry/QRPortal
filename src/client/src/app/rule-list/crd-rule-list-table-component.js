import React, { memo, useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MuiDataTable from 'lib/material-ui-components/data-table';

const RulesListTable = memo(({ data, selectedRuleId, getRuleDetails }) => {
  const { url } = useRouteMatch();
  const history = useHistory();

  const getMuiTheme = () => createMuiTheme({
    overrides: {
      MuiTableCell: {
        root: {
          padding: '13px',
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
          fontSize: '13px',
          letterSpacing: '0.5px',
        },
      },
    },
  });
  const theme = useMemo(() => getMuiTheme(), []);
  const [selectedRow, setSelectedRow] = useState([]);

  const columns = [
    {
      name: 'id',
      label: 'Id',
    },
    {
      name: 'name',
      label: 'Name',
    },
    {
      name: 'severity',
      label: 'Severity',
    },
  ];

  const onRowClick = (rowData, rowMeta) => {
    rowData[0] && getRuleDetails(rowData[0]);
    rowData[0] && history.push(`${url}/details/${rowData[0]}`);
    setSelectedRow([rowMeta.dataIndex]);
  };

  const tableOptions = {
    downloadOptions: {
      filename: 'cast-rules-list.csv',
    },
    filter: false,
    print: false,
    viewColumns: false,
    sort: false,
    selectableRowsHeader: false,
    selectableRows: 'single',
    selectableRowsHideCheckboxes: true,
    rowsSelected: selectedRow,
    selectToolbarPlacement: 'none',
    onRowClick: (rowData, rowMeta) => onRowClick(rowData, rowMeta),
  };

  useEffect(() => {
    const ruleIndex = data.findIndex(rule => rule.id.toString() === selectedRuleId);

    setSelectedRow(ruleIndex >= 0 ? [ruleIndex] : []);
  }, [data]);

  return (
    <MuiThemeProvider theme={theme}>
      <MuiDataTable
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
