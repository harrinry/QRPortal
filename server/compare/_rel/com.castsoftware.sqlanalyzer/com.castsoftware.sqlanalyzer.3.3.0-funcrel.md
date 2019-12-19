# 3.3.0-funcrel

## Updates

- _Data export like_ files are no more analyzed. A data export like file is a DML file having more then 80% of INSERT ... VALUES () statements from the total number of DML statements. You'll see from now this kind of message in analysis log:

This file `<FILE\_NAME>` is considered as data export and it will not be analyzed because, from the total number of DML statements, <XX.XX>% are INSERT ... VALUES ().
- Database subset is now supported by SQL Analyzer (SQLSCRIPT-538, call id 18319). There is no specific database project. Here is how it works, for the 3 CAST-MS existing options:

*   **Inactive**: no database subset
*   **Interface**: only objects linked directly with the application client code are considered internals, all others are considered externals.
*   **Full**: objects linked directly with the application client code and also all SQL objects called by the first list of objects, recursively, are considered internals, all others are considered externals.
## Resolved issues

The following issues have been fixed in this release of the extension:
| Internal ID | Call ID | Summary |
| ----------- | ------- | ------- |
| SQLSCRIPT-570 | 19376 | SQL Analyzer extension - count of comment lines Error |
| SQLSCRIPT-567 | 19326, 19327 | SQL Analyzer skips entire SQL\\*Plus formatted SQL files that contain the "prompt" keyword |
| SQLSCRIPT-550 | 18609, 18708, 18638, 18712 | SQL-002: Parsing issue between line `<x>` and line `<y>` |
| SQLSCRIPT-551 | 18729 | Analysis ran using SQL Analyzer 3.2.2 freezing when encountering empty(0 KB) file |
| SQLSCRIPT-553 | 18532 | Documentation on added/deleted objects when moving from castextract to DDL like files. For more details see: Object identity |
| SQLSCRIPT-542 | 18374 | Double set of links seen in Enlighten |
| SQLSCRIPT-544 | 18405 | No DB2 objects analyzed with SQL analyzer extension 3.2 - ValueError: path is on mount |
| SQLSCRIPT-536 | 18312 | Problem: Analysis stuck at a particular SQL file in SQL analyzer 3.1.0 |
| SQLSCRIPT-547 |

%7C SQL-004 warning is raised for dynamic updates, when datacolumnaccess is installed %7C
