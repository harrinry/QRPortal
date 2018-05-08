export default function dynamicOverlaySettings( children, title, elementCount, width, bgColor ){
  let heightCalc = elementCount * 31 + 10;
  if ( heightCalc < 200 ) heightCalc = 200;
  return {
    children:children,
    title: title,
    height: (!width || width > 360 ? heightCalc + 'px' : (heightCalc + 30) + 'px'),
    width: width + 'px',
    backgroundColor: bgColor
  };
}