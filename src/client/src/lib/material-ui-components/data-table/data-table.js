import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import MUIDataTable from 'mui-datatables';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  tableWrapper: {
    borderRadius: 2,
    boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
    '& .MuiTableRow-root': {
      '& .datatables-noprint': {
        paddingTop: 8,
        paddingBottom: 8,
        '& div': {
          fontSize: 14,
          fontWeight: 500,
          fontStyle: 'italic',
          color: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
    '& .MuiTablePagination-caption': {
      fontSize: 12,
    },
    '& .MuiTablePagination-select': {
      fontSize: 12,
    },
  },
});

const MuiDataTable = forwardRef((props, ref) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <MUIDataTable ref={ref} className={clsx(classes.tableWrapper, className)} {...rest} />
  );
});

MuiDataTable.propTypes = {
  className: PropTypes.string,
};

export default MuiDataTable;
