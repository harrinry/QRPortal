# 3.1.0-funcrel

## Updates

- **SQLSCRIPT-482** Add Package object when Package Body is missing
- **SQLSCRIPT-505** Add Package Function and Procedure when Package Body is missing
- **SQLSCRIPT-488** Update XXL documentation
- **SQLSCRIPT-396** Add callLinks between the Client Code and SQL Triggers

## Resolved issues

The following issues have been fixed in this release of the extension:
| Internal ID | Call ID | Summary |
| ----------- | ------- | ------- |
| SQLSCRIPT-499 | 17116 | Permanent Fix - Analysis warning - AttributeError: 'NoneType' object has no attribute 'resolve\\_reference' on ALTER TABLE ... ADD ... when CREATE TABLE is not in the same file |
| SQLSCRIPT-401 |

%7C Fix - SQL-001: No schema found for file, raised when analyse \\*.src files %7C
| SQLSCRIPT-483 |
| ------------- |

%7C Fix - False negatives on **VARCHAR2 and NVARCHAR2 should be used** %7C
| SQLSCRIPT-497 |
| ------------- |

%7C Fix - false positive on** Avoid using SQL queries inside a loop** %7C
| SQLSCRIPT-487 | 16829 | Permanent Fix - MS SQL : USE links are missing when two dots notation is used in the FROM clause |
| ------------- | ----- | ------------------------------------------------------------------------------------------------ |
| SQLSCRIPT-487 |

%7C Fix - USE links are missing when tables are UPDATED via table ALIAS %7C
| SQLSCRIPT-485 |
| ------------- |

