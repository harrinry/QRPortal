import { connect } from 'react-redux';
import { navigateTo } from './nv-actions';
import NavHeader from './nv-model';
import { showNavigationView, showLandingPage} from '../body/body-actions';
import { fetchNavigationData } from 'body-navigation/bn-actions';
import { fetchDetailsData, clearDetailsData } from '../details-section/ds-actions';
import { hideSearchResults } from '../global-search/gs-actions';
import { fetchWebData } from '../body-rules-list/brl-actions';

const mapDispatchToProps = ( dispatch ) => {
  return {
    gotoLocation: (props) => {
      if(props.separator || props.index === 0){
        dispatch(navigateTo(props, props.index));
        dispatch(showNavigationView());
        dispatch(fetchNavigationData(props.name, props.href, props.icon));
      }
    },
    closeSearchResults: (props) => {
      const lastViewedRuleBeforeSearch = props.rules ? props.rules.find( e => e.selected === true ) : undefined;
      dispatch(hideSearchResults());
      if ( props.path.length > 0 ){
        if( /\/quality-rules/i.test(props.path[props.path.length -1].href) === false && props.path.length < 3 ){
          dispatch(showNavigationView());
        } else {
          if( lastViewedRuleBeforeSearch ) dispatch( fetchDetailsData( lastViewedRuleBeforeSearch.href ) );
          else dispatch(clearDetailsData());
        }
      } else if ( props.path.length === 0 ){
        dispatch(showLandingPage());
      }
    },
    selectorChange: ( item ) => {
      dispatch(fetchWebData(item.href));
      dispatch(clearDetailsData());
    }
  };
};

const mapStateToProps = (state) => {
  return {
    path: state.path.path,
    viewType: state.viewType.viewType,
    searchVisible: state.search.resultsVisible,
    rules: state.rulesList.data,
    searchQuery: state.search.query
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader);