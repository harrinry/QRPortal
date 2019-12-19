# 3.4.0-beta1

## Updates

- Add migration of Oracle application, see details here:
- Quality rules fixes:

*   Total is 0 for _Avoid Artifacts with high Commented-out Code Lines/Code Lines ratio_
*   FALSE positive on _Avoid unreferenced Functions _
*   FALSE positive on _Avoid exists and not exists independent clauses (SQL)_
*   FALSE positive on _Column references should be qualified_
- DB2: Load Database from SQLTableSize in xml format
- Oracle: Warning SQL-002: Parsing issue between line x and line y is raised for Index ORGANIZATION INDEX is followed by PCTTHRESHOLD
- Oracle: Improve Object Type analysis

*   The case when we have only Object Type Header
*   New syntax: CREATE TYPE ... IS TABLE OF ...
- Oracle: New syntax:

*   CREATE TABLE ... OF ...
- com.castsoftware.datacolumnaccess: GDPR doesn't work as expected for A.B.C.D and Views

## Resolved issues

The following issue has been fixed in this release of the extension:
| Internal ID | Call ID | Summary |
| ----------- | ------- | ------- |

