# 3.0.0-funcrel

## Updates

The following rules have been added in this release of the extension (see [https://technologies.castsoftware.com/rules?sec=srs\\_php&ref=%7C%7C3.0.0-funcrel](https://technologies.castsoftware.com/rules?sec=srs_php&ref=%7C%7C3.0.0-funcrel) for more information):
| 1007244 | CWE-80 : Avoid cross-site scripting - Improper Neutralization of script-related HTML tags in a web page (PHP) |
| ------- | ------------------------------------------------------------------------------------------------------------- |
| 1007246 | CWE-98: Avoid Remote File Inclusion - Improper Control of Filename for Include/Require Statement in PHP Program (PHP) |
| 1007248 | CWE-311: Use sufficient SSL\\TLS context (PHP) |
| 1007250 | CWE-624: Avoid preg_replace with /e option (PHP) |
| 1007252 | CWE-661: Avoid filesystem function calls without sanitizing user input (PHP) |
| 1007254 | Avoid files that declare both symbols and execute logic with side effects (PHP) |
| 1007256 | CWE-79: Avoid cross-site scripting - Improper Neutralization of input in script tag during web page generation (PHP) * |
| 1007258 | CWE-79: Avoid cross-site scripting - Improper Neutralization of input during web page generation (PHP) * |
| 1007260 | CWE-78: Avoid Command Injection - Improper Neutralization of Special Elements used in an OS Command (PHP) * |
| 1007262 | CWE-73: Avoid file name or path controlled by raw user input (PHP) * |
| 1007264 | CWE-434: Avoid unrestricted file upload (PHP) * |
| 1007266 | CWE-89: Avoid SQL Injection - Improper Neutralization of Special Elements used in an SQL Command within single quotes (PHP) * |
| 1007268 | CWE-89: Avoid SQL Injection - Improper Neutralization of Special Elements used in an SQL Command without quotes (PHP) * |
| 1007270 | CWE-89: Avoid SQL Injection - Improper Neutralization of Special Elements used in an SQL Command in dynamic query (PHP) * |
| 1007272 | CWE-384: Avoid Session Fixation (PHP) * |
| 1007274 | CWE-502: Avoid Object Injection (PHP) * |
| 1007276 | CWE-287: Avoid Cookie Misconfiguration (path) (PHP) * |
| 1007278 | CWE-328: Avoid weak hash functions (PHP) * |
| 1007280 | CWE-214: Avoid System Information Leakage (PHP) * |
| 1007282 | CWE-614: Avoid Cookie Misconfiguration (secure flag) (PHP) * |
| 1007284 | CWE-200: Avoid Cookie Misconfiguration (httpOnly flag) (PHP) * |
| 1007286 | CWE-242: Avoid PHP Dangerous Feature (PHP) * |
| 1007288 | CWE-489: Avoid debug code in the production system (PHP) * |
| 1007290 | CWE-79: Avoid cross site scripting (single quoted attribute) (PHP) * |

Rules marked with a **\\*** in the table above will only be triggered with the integration of third party software results in the specified format. Please see in .
## Resolved issues

**PHP 3.0.0-funcrel** contains all bug fixes from previous releases. The following table lists all bugs fixed in** **PHP 3.0.0-funcrel**** and that are not already fixed in the previous released versions:
Internal
