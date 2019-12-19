# 3.2.6

## Updates

- Quality rules fixes:

*   Total is 0 for_Avoid Artifacts with high Commented-out Code Lines/Code Lines ratio_
*   FALSE positive on _Avoid unreferenced Functions _
*   FALSE positive on_Avoid exists and not exists independent clauses (SQL)_
*   FALSE positive on _Column references should be qualified_
- DB2: Load Database from SQLTableSize in xml format
- Oracle: Warning SQL-002: Parsing issue between line x and line y is raised for Index ORGANIZATION INDEX is followed by PCTTHRESHOLD
- Oracle: Improve Object Type analysis

*   The case when we have only Object Type Header
*   New syntax: CREATE TYPE ... IS TABLE OF ...
- Oracle: New syntax:

*   CREATE TABLE ... OF ...
- Fix missing Use links when surrounded by parentheses in FROM clause
- Skip E'\\\\'' escape strings
- _Begin date_ is no more misinterpreted as the beginning of a block
- _Data export like_files are no more analyzed. A data export like file is a DML file having more then 80% of INSERT ... VALUES () statements from the total number of DML statements. You will see from now this kind of message in analysis log:

*   This file `<FILE\_NAME>` is considered as data export and it will not be analyzed because, from the total number of DML statements, <XX.XX>% are INSERT ... VALUES ().
- com.castsoftware.datacolumnaccess: GDPR doesn't work as expected for A.B.C.D and Views

## Resolved issues

The following issues have been fixed in this release of the extension:
| Internal ID | Call ID | Summary |
| ----------- | ------- | ------- |
| SQLSCRIPT-602 | 20248 | SQL analysis is getting stuck while analyzing the sql file which has PROMPT syntax in it for more than 6 days. |
| SQLSCRIPT-609 | 20415 | SQL Analysis stuck at sql job for more than 19 hours analyzing one file |
| AIPCORE-9 | 13609 | Missing violation for the quality rule “Avoid SQL queries on XXL Tables using Functions on indexed Columns in the WHERE clause” in previous run |

---
## Resolved issues

The following issues have been fixed in this release of the extension:
| Internal ID | Call ID | Summary |
| ----------- | ------- | ------- |
| SQLSCRIPT-570 | 19376 | SQL Analyzer extension - count of comment lines Error |

# 3.2.4

## Resolved issues

The following issues have been fixed in this release of the extension:
| Internal ID | Call ID | Summary |
| ----------- | ------- | ------- |
| SQLSCRIPT-567 | 19326, 19327 | SQL Analyzer skips entire SQL*Plus formatted SQL files that contain the "prompt" keyword |

