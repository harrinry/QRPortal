# %7C 3.2.2-funcrel

## Resolved issues

The following issues have been fixed in this release of the extension:
| Internal ID | Call ID | Summary |
| ----------- | ------- | ------- |
| SQLSCRIPT-542 | 18374 | Double set of links seen in Enlighten |

---
## Resolved issues

The following issues have been fixed in this release of the extension:
| Internal ID | Call ID | Summary |
| ----------- | ------- | ------- |
| SQLSCRIPT-544 | 18405 | No DB2 objects analyzed with SQL analyzer extension 3.2 - ValueError: path is on mount |

---
## Updates

- Improved the detection of constraints names when declared in CREATE TABLE statement for all SQL variants
- From now, Key is accepted as column name
- T-SQL : Better detection of object's schema when setuser is detected
- Open SQL Analyzer quality rules to SAP Method SQLScript Procedures and SAP Method SQLScript Functions
- **SQLSCRIPT-519 -** Teradata : Support Create/Replace Macro Statement
- **SQLSCRIPT-533 -** Teradata : Teradata : Support Indexes in CREATE TABLE Statement
- **SQLSCRIPT-526 - **Analyze SQL files in lexicographical order and tables before other objects

From SQL Analyzer-3.2, files are analyzed in the following order:
- tables
- views
- all other kind of SQL objects

How table files are recognized: relative path contains the keyword **table** or we detect CREATE TABLE/ DATABASE/SCHEMA statement in the first 100 lines.
We do the same for **views**. When the file name starts/ends with a digit, for example: 1FileName.sql or FileName1.sql, we put them in the lexicographical order. We do the same when **hist** / **migr** word is detected in the relative path. Some examples are shown below.
**Example 1**
Given the following files delivered for analysis:
| Source code type | File names |
| ---------------- | ---------- |
| Tables |
| Views |
| Others |

The analysis order will be as follows:
| Sources analysis order | Analysis order |
| ---------------------- | -------------- |
| Tables |
| Views |
| Others |

**Example 2**
Given the following files are delivered for analysis:
| Source code file name | File content |
| --------------------- | ------------ |
| 01_file.sql | we detected create view statement in the first 100 lines |
| 02_file.sql | we detected create table statement in the first 100 lines |
| 03_file.sql | without create table / view statements n the first 100 lines |
| 04_file.sql | we detected create database statement in the first 100 lines |
| 01_hist.sql | mixed statements, without create table / view / database / schema statements n the first 100 lines |
| 02_hist.sql | mixed statements, without create table / view / database / schema statements n the first 100 lines |

The analysis order will be :
| Analysis order | Source code file name | Reason |
| -------------- | --------------------- | ------ |
| 1 |
| 2 |
| 3 |
| 4 |
| 5 |
| 6 |

## Resolved issues

The following issues have been fixed in this release of the extension:
