export const SEARCHAPI ='search/qualityrules/?q=';
export const SEARCHBYAPI ='search/qualityrulesbyid/?q=';
export const SEARCHSTDTAGAPI = 'search/standards/?q=';
export const CLASSES = {
  container: 'qrp_gSearch',
  inputBox: 'qrp_gSearch_input',
};
export const TEXTINPUT = 'text';
export const INPUTREF = 'gs-searchInput';
export const ENTER = 'Enter';

export const errorObject = {
  name: 'An error has occured while attempting to fetch the search results, please try again.',
  critical: true
};

export const PrefixSelector = [':id:',':std:'];
export const searchPrefixMap = {
  ':std:': 'standards',
  ':id:': 'qualityrulesbyid',
  default: 'qualityrules'
};