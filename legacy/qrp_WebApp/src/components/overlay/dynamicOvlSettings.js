export default function dynamicOverlaySettings( children, title, elementCount, sectiontitle, width, bgColor ){
  let heightCalc = elementCount * 34 + 20;
  if ( heightCalc < 250 ) heightCalc = 250;

  return {
    children:children,
    title: title,
    sectiontitle: sectiontitle,
    height: (!width || width > 360 ? heightCalc + 'px' : (heightCalc + 30) + 'px'),
    width: width + 'px',
    backgroundColor: bgColor
  };
}
