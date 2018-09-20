import { webFetch } from 'common/';
import { comparePrefix, SECTIONS } from './cmp-constants';

export const fetchCompareExtensionVersions = ( extensionID, version1, version2 ) =>{
  return webFetch( `${comparePrefix}${SECTIONS.extensions}/${extensionID}/${version1}/${version2}` );
};