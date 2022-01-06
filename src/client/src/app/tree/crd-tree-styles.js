import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  treeView: {
    padding: '15px',
    
    '& .MuiTreeItem-label': {
      textTransform: 'capitalize',
      letterSpacing: '1px',
      lineHeight: '2',
      paddingLeft: '10px',
    },
  },
});

export default useStyles;
