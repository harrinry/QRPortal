export const PrettyPrintExtentionName = ( name ) => {
  const finalName = name.split('.'),
    capName = finalName[2].charAt(0).toUpperCase() + finalName[2].substring(1);
  return capName + ' Analyzer';
};
