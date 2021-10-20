import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  treeView: {
    textTransform: 'capitalize',
    padding: '15px',

    '& .MuiTreeItem-label': {
      letterSpacing: '1px',
      lineHeight: '2',
      paddingLeft: '10px',
    },
  },
});

export default useStyles;
