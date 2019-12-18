# 3.3.1-funcrel

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
- com.castsoftware.datacolumnaccess: GDPR does not work as expected for A.B.C.D and Views

