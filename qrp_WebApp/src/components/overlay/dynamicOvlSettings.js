export default function dynamicOverlaySettings( children, title, elementCount, sectiontitle, width, bgColor ){
  let heightCalc = elementCount * 32 + 20;
  if ( heightCalc < 200 ) heightCalc = 200;

  return {
    children:children,
    title: title,
    sectiontitle: sectiontitle,
    height: (!width || width > 360 ? heightCalc + 'px' : (heightCalc + 30) + 'px'),
    width: width + 'px',
    backgroundColor: bgColor
  };
}
