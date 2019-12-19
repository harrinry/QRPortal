# 2.0.9-funcrel

## Resolved issues

| Internal ID | Ticket ID | Summary | Notes |
| ----------- | --------- | ------- | ----- |
| HTMLVJS-530 | 16211 | Call from jsp thanks to jstl c:url call | Missing links from some jsp files using "c:url". |
| HTMLVJS-523 | - | Problem with evaluation | Some urls were wrongly evaluated. |
| HTMLVJS-524 | - | Problem with parsing: a function is not analyzed | - |
| HTMLVJS-529 | - | Problem with parsing when 2 functions are defined, separated by a "," instead of a ";" | Some functions were not analyzed when separated by "," instead of ";". |
| HTMLVJS-527 | - | False Violation for HTML5 Object and incorrect total checks for the QR "102008: Avoid Artifacts with lines longer than X characters". | "102008: Avoid Artifacts with lines longer than X characters". |
| HTMLVJS-532 | - | Incorrect evaluation of URL: support of parentheses expressions | Parenthesed expressions were not supported for evaluation, and were not analyzed at all. |
| HTMLVJS-525 | - | Problem with bookmark end positions for AnyExpression | - |
| HTMLVJS-531 | - | Exception in javascript resolution | - |
| HTMLVJS-533 | - | Module exports are not detected | Resolution was not correct when "module.exports" was before the function it points to. |

