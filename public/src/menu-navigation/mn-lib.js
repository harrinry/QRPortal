export const PrettyPrintExtentionName = ( name ) => {
  const finalName = name.split('.');
  return finalName[2] + 'Analyzer';
};