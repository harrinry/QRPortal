import { webFetch } from 'common/';

export const fetchCompareExtensionVersions = ( query ) =>{
  return webFetch( query );
};