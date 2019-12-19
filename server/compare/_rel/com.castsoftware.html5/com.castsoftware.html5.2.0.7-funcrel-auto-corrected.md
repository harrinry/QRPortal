# 2.0.7-funcrel

## New rule

- Avoid hardcoded passwords.

## Updates

- Bug correction: better management with unclosed in html/jsp files.
- Bug correction: better url management in jsp files with struts-tags taglib.
- Bug correction: better url management when simple quotes were present instead of double quotes in xml attributes.
- Bug correction: parameters in url are now present when request.send(params) is called for XML Http Resources.

## Resolved issues

| Internal ID | Ticket ID | Summary |
| ----------- | --------- | ------- |
| HTMLVJS-469 |  | Do better management with unclosed tags in html files |
| HTMLVJS-500 | - | Get proper url when method is specified within a "struts-tags" taglib |
| HTMLVJS-501 | - | Missing url |
| HTMLVJS-502 | - | Non-resolved query parameters in HTML5 Post XMLHttpRequest service |

