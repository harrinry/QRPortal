export const PrettyPrintExtentionName = ( name ) => {
  const wordsToClean = [' technology',' Linker','Angular/', 'for ', 'for Java', 'Techonology Extension For' ,'Technology Extension For ', ' Framework', 'Support of ' ], 
    cl = wordsToClean.length,
    exceptionNames = ['System Level Rules', 'Web Services', 'CAST AIP'];
  let cleanName = name;
  for (let i = 0; i < cl; i++) {
    const wordToRemove = wordsToClean[i];
    cleanName = cleanName.replace(wordToRemove, '');
  }
  return (cleanName.includes('Analyzer') || exceptionNames.indexOf(cleanName) !== -1) ? cleanName : cleanName + ' Analyzer' ;
};
