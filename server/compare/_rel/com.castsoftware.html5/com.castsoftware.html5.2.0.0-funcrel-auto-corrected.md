# 2.0.0-funcrel

## Updates

### HTMLVJS-420 - Support export function parser

Given the following code, the analyzer will now recognize the "(param)" in "require('f1')(param)" as a function call:
xmlf1.js
xmluseFile.js
### HTMLVJS-424 - Support node-fetch annotations to call webservice

### HTMLVJS-425 - Support of index.js files which are referenced by default through require statements

Given the following code, the analyzer will recognize that this refers to an index.js file in the "db" folder, if db.js does not exist:
xml
### HTMLVJS-426 - Support require() for any expression

Given then following code, the analyzer will now correctly identify this as a node.js file and all "require()" are supported:
xml
### HTMLVJS-428 - Support requireJS framework for global resolution

The following code is now supported:
xml
## Resolved issues

| Internal ID | Call ID | Summary |
| ----------- | ------- | ------- |
| HTMLVJS-440 | 15806 | HTML5-001 internal issue analyzing jsp files |
| HTMLVJS-436 | 15703 | Perm fix: Missing links between javascript components |
| HTMLVJS-435 | 15611 | Missing HTML5 get HTTPRequest Service |
| HTMLVJS-430 | 15469 | "Extension com.castsoftware.html5 has encountered an issue" because of checksum saving |
| HTMLVJS-427 | 15340 | Missing link from HTML5 JSP Content to HTLM5 post HttpsRequest service |
| HTMLVJS-422 | 15286 | HTML5-005 Internal issue in parsing one statement |
| HTMLVJS-417 | 15131 | HTML5 analyzer should create an object (HTML5 POST request service) |
| HTMLVJS-416 | 15130 | Missing links between HTML5 JSP Content to Spring MVC Operation |
| HTMLVJS-415 | 15105 | HTML5 analyzer should create an object (HTML5 POST request service) |
| HTMLVJS-411 | 14887 | Perm fix: Cyclomatic complexity of HTML files is incorrect |
| HTMLVJS-406 | 14751 | REACTJS-001 Internal issue |
| HTMLVJS-393 | 14391 | HTML Files are not getting analyzed |
| HTMLVJS-390 | 14311,15510 | False positive is coming for rule "Avoid unreferenced Functions" |

