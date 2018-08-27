import { COMMON_CLASSES, createClassName } from 'common/';
import { CLASSES, NAVIGATION_VIEW } from './body-constants';

const ContentBody = ( props ) => {
  return (
    <div className={createClassName(CLASSES.contentBody, COMMON_CLASSES.flexRow, COMMON_CLASSES.defaultBackgroundColor, COMMON_CLASSES.flexGrow1)}>
      {props.view === NAVIGATION_VIEW ? <div className={CLASSES.contentSpace}></div> : 
        (<div>
          <div className={CLASSES.ListArea}></div>
          <div className={CLASSES.detailsArea}></div>
        </div>)}
    </div>);
};

export default ContentBody;