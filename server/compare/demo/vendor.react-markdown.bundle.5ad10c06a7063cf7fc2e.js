(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"3m36":function(e,n,r){"use strict";var t=r("U6jy"),i=r("q1tI"),o=parseInt((i.version||"16").slice(0,2),10)>=16,a=i.createElement;function l(e,n){return a(e,s(n),n.children)}function s(e){return e["data-sourcepos"]?{"data-sourcepos":e["data-sourcepos"]}:{}}e.exports={break:"br",paragraph:"p",emphasis:"em",strong:"strong",thematicBreak:"hr",blockquote:"blockquote",delete:"del",link:"a",image:"img",linkReference:"a",imageReference:"img",table:l.bind(null,"table"),tableHead:l.bind(null,"thead"),tableBody:l.bind(null,"tbody"),tableRow:l.bind(null,"tr"),tableCell:function(e){var n=e.align?{textAlign:e.align}:void 0,r=s(e);return a(e.isHeader?"th":"td",n?t({style:n},r):r,e.children)},root:function(e){var n=!e.className,r=n&&i.Fragment||"div";return a(r,n?null:e,e.children)},text:function(e){return o?e.children:a("span",null,e.children)},list:function(e){var n=s(e);null!==e.start&&1!==e.start&&void 0!==e.start&&(n.start=e.start.toString());return a(e.ordered?"ol":"ul",n,e.children)},listItem:function(e){var n=null;if(null!==e.checked&&void 0!==e.checked){var r=e.checked;n=a("input",{type:"checkbox",checked:r,readOnly:!0})}return a("li",s(e),n,e.children)},definition:function(){return null},heading:function(e){return a("h".concat(e.level),s(e),e.children)},inlineCode:function(e){return a("code",s(e),e.children)},code:function(e){var n=e.language&&"language-".concat(e.language),r=a("code",n?{className:n}:null,e.value);return a("pre",s(e),r)},html:function(e){if(e.skipHtml)return null;var n=e.isBlock?"div":"span";if(e.escapeHtml){var r=i.Fragment||n;return a(r,null,e.value)}var t={dangerouslySetInnerHTML:{__html:e.value}};return a(n,t)},virtualHtml:function(e){return a(e.tag,s(e),e.children)},parsedHtml:function(e){return e["data-sourcepos"]?i.cloneElement(e.element,{"data-sourcepos":e["data-sourcepos"]}):e.element}}},"9Z5P":function(e,n,r){"use strict";var t=r("ZkSf");function i(e){var n=e.children;e.children=[{type:"tableHead",align:e.align,children:[n[0]],position:n[0].position}],n.length>1&&e.children.push({type:"tableBody",align:e.align,children:n.slice(1),position:{start:n[1].position.start,end:n[n.length-1].position.end}})}e.exports=function(e){return t(e,"table",i),e}},IoeE:function(e,n,r){"use strict";e.exports=function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(n.children||[]).reduce((function(n,r){return"definition"===r.type&&(n[r.identifier]={href:r.url,title:r.title}),e(r,n)}),r)}},IujW:function(e,n,r){"use strict";function t(e){return function(e){if(Array.isArray(e)){for(var n=0,r=new Array(e.length);n<e.length;n++)r[n]=e[n];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=r("U6jy"),o=r("1VtT"),a=r("fUUT"),l=r("17x9"),s=r("wnOJ"),c=r("cVWj"),u=r("u3i/"),d=r("UV+P"),p=r("9Z5P"),f=r("IoeE"),h=r("Nw8X"),m=r("3m36"),g=r("h9ck"),v=Object.keys(m),y=function(e){var n=e.source||e.children||"",r=e.parserOptions;if(e.allowedTypes&&e.disallowedTypes)throw new Error("Only one of `allowedTypes` and `disallowedTypes` should be defined");var t=i(m,e.renderers),l=[[a,r]].concat(e.plugins||[]).reduce(b,o()),h=l.parse(n),y=i(e,{renderers:t,definitions:f(h)}),k=function(e){var n=[p,s()],r=e.disallowedTypes;e.allowedTypes&&(r=v.filter((function(n){return"root"!==n&&-1===e.allowedTypes.indexOf(n)})));var t=e.unwrapDisallowed?"unwrap":"remove";r&&r.length>0&&n.push(u.ofType(r,t));e.allowNode&&n.push(u.ifNotMatch(e.allowNode,t));var i=!e.escapeHtml&&!e.skipHtml,o=(e.astPlugins||[]).some((function(e){return(Array.isArray(e)?e[0]:e).identity===g.HtmlParser}));i&&!o&&n.push(c);return e.astPlugins?n.concat(e.astPlugins):n}(e),w=l.runSync(h),H=k.reduce((function(e,n){return n(e,y)}),w);return d(H,y)};function b(e,n){return Array.isArray(n)?e.use.apply(e,t(n)):e.use(n)}y.defaultProps={renderers:{},escapeHtml:!0,skipHtml:!1,sourcePos:!1,rawSourcePos:!1,transformLinkUri:h,astPlugins:[],plugins:[],parserOptions:{}},y.propTypes={className:l.string,source:l.string,children:l.string,sourcePos:l.bool,rawSourcePos:l.bool,escapeHtml:l.bool,skipHtml:l.bool,allowNode:l.func,allowedTypes:l.arrayOf(l.oneOf(v)),disallowedTypes:l.arrayOf(l.oneOf(v)),transformLinkUri:l.oneOfType([l.func,l.bool]),linkTarget:l.oneOfType([l.func,l.string]),transformImageUri:l.func,astPlugins:l.arrayOf(l.func),unwrapDisallowed:l.bool,renderers:l.object,plugins:l.array,parserOptions:l.object},y.types=v,y.renderers=m,y.uriTransformer=h,e.exports=y},Nw8X:function(e,n,r){"use strict";var t=["http","https","mailto","tel"];e.exports=function(e){var n=(e||"").trim(),r=n.charAt(0);if("#"===r||"/"===r)return n;var i=n.indexOf(":");if(-1===i)return n;for(var o=t.length,a=-1;++a<o;){var l=t[a];if(i===l.length&&n.slice(0,l.length).toLowerCase()===l)return n}return-1!==(a=n.indexOf("?"))&&i>a?n:-1!==(a=n.indexOf("#"))&&i>a?n:"javascript:void(0)"}},"UV+P":function(e,n,r){"use strict";var t=r("q1tI"),i=r("U6jy"),o=r("TOwV"),a={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function l(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,u=n.renderers[e.type];void 0===e.position&&(e.position=r.node&&r.node.position||a);var d=e.position.start,p=[e.type,d.line,d.column,c].join("-");if(!o.isValidElementType(u))throw new Error("Renderer for type `".concat(e.type,"` not defined or is not renderable"));var f=function(e,n,r,o,a,c){var u={key:n},d="string"==typeof o;r.sourcePos&&e.position&&(u["data-sourcepos"]=function(e){return[e.start.line,":",e.start.column,"-",e.end.line,":",e.end.column].map(String).join("")}(e.position));r.rawSourcePos&&!d&&(u.sourcePosition=e.position);r.includeNodeIndex&&a.node&&a.node.children&&!d&&(u.index=a.node.children.indexOf(e),u.parentChildCount=a.node.children.length);var p=null!==e.identifier&&void 0!==e.identifier?r.definitions[e.identifier]||{}:null;switch(e.type){case"root":s(u,{className:r.className});break;case"text":u.nodeKey=n,u.children=e.value;break;case"heading":u.level=e.depth;break;case"list":u.start=e.start,u.ordered=e.ordered,u.tight=!e.loose,u.depth=e.depth;break;case"listItem":u.checked=e.checked,u.tight=!e.loose,u.ordered=e.ordered,u.index=e.index,u.children=function(e,n){if(e.loose)return e.children;if(n.node&&e.index>0&&n.node.children[e.index-1].loose)return e.children;return function(e){return e.children.reduce((function(e,n){return e.concat("paragraph"===n.type?n.children||[]:[n])}),[])}(e)}(e,a).map((function(n,t){return l(n,r,{node:e,props:u},t)}));break;case"definition":s(u,{identifier:e.identifier,title:e.title,url:e.url});break;case"code":s(u,{language:e.lang&&e.lang.split(/\s/,1)[0]});break;case"inlineCode":u.children=e.value,u.inline=!0;break;case"link":s(u,{title:e.title||void 0,target:"function"==typeof r.linkTarget?r.linkTarget(e.url,e.children,e.title):r.linkTarget,href:r.transformLinkUri?r.transformLinkUri(e.url,e.children,e.title):e.url});break;case"image":s(u,{alt:e.alt||void 0,title:e.title||void 0,src:r.transformImageUri?r.transformImageUri(e.url,e.children,e.title,e.alt):e.url});break;case"linkReference":s(u,i(p,{href:r.transformLinkUri?r.transformLinkUri(p.href):p.href}));break;case"imageReference":s(u,{src:r.transformImageUri&&p.href?r.transformImageUri(p.href,e.children,p.title,e.alt):p.href,title:p.title||void 0,alt:e.alt||void 0});break;case"table":case"tableHead":case"tableBody":u.columnAlignment=e.align;break;case"tableRow":u.isHeader="tableHead"===a.node.type,u.columnAlignment=a.props.columnAlignment;break;case"tableCell":s(u,{isHeader:a.props.isHeader,align:a.props.columnAlignment[c]});break;case"virtualHtml":u.tag=e.tag;break;case"html":u.isBlock=e.position.start.line!==e.position.end.line,u.escapeHtml=r.escapeHtml,u.skipHtml=r.skipHtml;break;case"parsedHtml":var f;e.children&&(f=e.children.map((function(n,t){return l(n,r,{node:e,props:u},t)}))),u.escapeHtml=r.escapeHtml,u.skipHtml=r.skipHtml,u.element=function(e,n){var r=e.element;if(Array.isArray(r)){var i=t.Fragment||"div";return t.createElement(i,null,r)}if(r.props.children||n){var o=t.Children.toArray(r.props.children).concat(n);return t.cloneElement(r,null,o)}return t.cloneElement(r,null)}(e,f);break;default:s(u,i(e,{type:void 0,position:void 0,children:void 0}))}!d&&e.value&&(u.value=e.value);return u}(e,p,n,u,r,c);return t.createElement(u,f,f.children||e.children&&e.children.map((function(r,t){return l(r,n,{node:e,props:f},t)}))||void 0)}function s(e,n){for(var r in n)void 0!==n[r]&&(e[r]=n[r])}e.exports=l},cVWj:function(e,n,r){"use strict";var t=r("ZkSf"),i="virtualHtml",o=/^<(area|base|br|col|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\s*\/?>$/i,a=/^<(\/?)([a-z]+)\s*>$/;e.exports=function(e){var n,r;return t(e,"html",(function(e,t,l){r!==l&&(n=[],r=l);var s=function(e){var n=e.value.match(o);return!!n&&n[1]}(e);if(s)return l.children.splice(t,1,{type:i,tag:s,position:e.position}),!0;var c=function(e,n){var r=e.value.match(a);return!!r&&{tag:r[2],opening:!r[1],node:e}}(e);if(!c)return!0;var u=function(e,n){var r=e.length;for(;r--;)if(e[r].tag===n)return e.splice(r,1)[0];return!1}(n,c.tag);return u?l.children.splice(t,0,function(e,n,r){var t=r.children.indexOf(e.node),o=r.children.indexOf(n.node),a=r.children.splice(t,o-t+1).slice(1,-1);return{type:i,children:a,tag:e.tag,position:{start:e.node.position.start,end:n.node.position.end,indent:[]}}}(c,u,l)):c.opening||n.push(c),!0}),!0),e}},h9ck:function(e,n,r){"use strict";n.HtmlParser="undefined"==typeof Symbol?"__RMD_HTML_PARSER__":Symbol("__RMD_HTML_PARSER__")},"u3i/":function(e,n,r){"use strict";var t=r("ZkSf");function i(e,n,r,t){if("remove"===t)r.children.splice(n,1);else if("unwrap"===t){var i=[n,1];e.children&&(i=i.concat(e.children)),Array.prototype.splice.apply(r.children,i)}}n.ofType=function(e,n){return function(n){return e.forEach((function(e){return t(n,e,r,!0)})),n};function r(e,r,t){t&&i(e,r,t,n)}},n.ifNotMatch=function(e,n){return function(e){return t(e,r,!0),e};function r(r,t,o){o&&!e(r,t,o)&&i(r,t,o,n)}}}}]);