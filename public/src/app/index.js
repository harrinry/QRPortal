import { connect } from 'react-redux';
import App from './app-model';

const mapStateToProps = (state) => {
  return {
    viewType: state.viewType.viewType
  };
};

export default connect(mapStateToProps)(App);
