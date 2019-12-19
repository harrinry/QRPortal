# %7C 1.1.0-funcrel

## Updates

### IBM PL/I Analyzer

The extension is now known officially as the "IBM PL/I Analyzer".
### PL-270 - Update rule documentation for default parameter values

The documentation of the following rules has been updated to show correct default parameter values:
- Avoid PLC Copybook with more than XX lines of code (PL1) - 1001186

- Avoid Main Procedures with High Raw SQL Complexity (SQL complexity greater than X) (PL1) - 1001130

- Avoid PLC Procedures & Functions with a High Fan-in (PL1) - 1001026

- Avoid PLC Copybook with a very low comment/code ratio (PL1) - 1001098

- Avoid PLI Programs with a very low comment/code ratio (PL1) - 1001096

- Avoid PLI Programs with more than XX lines of code (PL1) - 1001184

- Avoid PLI Programs with more then XX Procedures (PL1) - 1001178

### PL-283 - Change "Avoid Functions and Procedures having bad naming convention (PL1)"

Some of the following rule's parameters have been modified to generate more meaningful results:
- 1001072 - Avoid Functions and Procedures having bad naming convention (PL1)

The parameter changes are as follows:
- The default value of "Proc Prefix" has been changed from "F" to " " (null or blank)
- The "Proc Name Length" parameter has been given a default length of 30

### PL-285 - Disable "Avoid Functions and Procedures not using the REORDER option (PL1)" out of the box

The following rule has been disabled "out of the box". This is because in the vast majority of cases, REORDER is done at compiler level rather than directly in functions and procedures, and as a result the rule produces a lot of false positive violations (since the REORDER option is not used) that can skew the results. Therefore after an upgrade to PL1 1.1.0 and the generation of a post-upgrade consistency snapshot on the same source code, there will no longer be any results for this rule. The rule can be reactivated manually if your application follows the convention of adding this clause on the individual procedure:
- 1001112 - Avoid Functions and Procedures not using the REORDER option (PL1)

### PL-286 - Update QR documentation of "Avoid Functions and Procedures not using the REORDER option (PL1)"

The documentation of the following rules has been updated:
- Avoid Functions and Procedures having bad naming convention (PL1) - 1001072

### PL-288 - "Avoid Functions and Procedures using RETURN statements (PL1)" needs revamping

The scope of the following rule has been altered so that PL/I / PL/C functions are no longer included. As such, the name of the rule has also been modified:
| Previous details | New details |
| ---------------- | ----------- |
| 100144 - Avoid Functions and Procedures using RETURN statements (PL1) | 100144 - |

Therefore after an upgrade to PL1 1.1.0 and the generation of a post-upgrade consistency snapshot on the same source code, results may be impacted: less violations and improved accuracy.
### PL-290 - Update documentation for "Avoid Functions and Procedures having bad naming convention (PL1)"

The algorithm used in the rules listed below has been updated as follows (documentation has also been updated as a result):
- Default value is set to 5%
- Undocumented artifacts for low comment violations are no longer considered

Rules impacted:
- Avoid PLI Programs with a very low comment/code ratio (PL1) - 1001096

- Avoid PLC Copybook with a very low comment/code ratio (PL1) - 1001098

- Avoid PLC Procedures & Functions with a very low comment/code ratio (PL1) - 1001100

- Avoid PLI Procedures & Functions with a very low comment/code ratio (PL1) - 100102

Therefore after an upgrade to PL1 1.1.0 and the generation of a post-upgrade consistency snapshot on the same source code, results may be impacted.
### PL-292 - PL1 UA Resolution improvement

Changes has been made to reduce the number of suspensions the Universal Analyzer has to process. This may lead to improved analysis time with the same results.
### PL-293 - Support for correct detection of File Structure

Now, PLI and PLC will correctly discover FILE Structure objects:
- If name itself contains word "FILE"
- PLI will now discover file structure of type input, output, print file structure objects as well.

This may affect the following rules:
- Avoid Programs having files declared as RECORD INPUT or RECORD UPDATE and not having the ON EOF or ON ENDFILE statement (PL1)
- Avoid Programs not using explicitly OPEN and CLOSE files (PL1)
- Avoid Programs having files declared and not having the ON UNDF or ON UNDEFINEDFILE statement except SYSPRINT and SYSIN (PL1)
- Avoid PLI Programs with more then 5 internal File structures (PL1)

### PL-296 - Relevance of PLIWhenCall

PLIWhenCall object type is deprecated and will no longer be discovered. This may impact results:
- Violations for "Avoid pli procedures with low comment ratio" because comments which would otherwise be considered for procedures now get considered for PLIWhenCall
- Violations for "Avoid procedures with high fan in" because now multiple
- It may reduce violations for "Avoid procedures with high fan out" because now PLIWhenCall will call procedures not enclosing procedures.

### PL-299 - Restructure "Avoid Main Procedures not having an ON ERROR clause (PL1)"

The following rule has been restructured to provide more accurate results. Therefore after an upgrade to PL1 1.1.0 and the generation of a post-upgrade consistency snapshot on the same source code, results may be impacted for this rule.
- 1001148 - Avoid Main Procedures not having an ON ERROR clause (PL1)

Changes have been done to fix the following:
- Multi-level error blocks
- PLC files will now have error block object type
- Detection of error block that does not have specific condition name - in this case PL/I analyzer now will add "SNAP" condition name
- Rule will now search for error block objects "Avoid Main Procedures not having an ON ERROR clause (PL1)"

*   Error block objects in main procedure or
*   Error block object as a direct child of PLCInclude
- Rule "Avoid PL1 Errors Blocks having ON ERROR SYSTEM blocks and not containing and displaying ONCODE and ONLOC (PL1)" will now search for

*   If error block is in either main procedure or include and contains ONLOC or ONCODE call
If first level method in error block contains ONLOC or ONCODE call
### PL-303 - Alternate implementation of Avoid Functions and Procedures having subscripts used in arrays or in do loops and not declared as BINARY FIXED(31) (PL1) - 1001120

The rule Avoid Functions and Procedures having subscripts used in arrays or in do loops and not declared as BINARY FIXED(31) (PL1) - 1001120 has been disabled because it either raises no or erroneous violations using the current implementation. Therefore after an upgrade to PL1 1.1.0 and the generation of a post-upgrade consistency snapshot on the same source code, there will no longer be any results for this rule.
### PL-306 - Revamp error block processing

The way in which error blocks are handled has been revamped. Optional SNAP names are now ignored, for example:
text
Therefore after an upgrade to PL1 1.1.0 and the generation of a post-upgrade consistency snapshot on the same source code, results may be impacted for the rule "Avoid Main Procedures not having an ON ERROR clause (PL1) - 1001148".
### PL-315 - Revamp SQL based rules

To overcome metric search limitations (see ) the metric search used in the following rules has been moved to the extractor. As a consequence, source code will be modified to add comments that would denote the violation:
| CAST_AVOID_SUBSTR_UPPER_LOWER_IN_WHERE | 1001140 | Avoid Functions and Procedures with DB2 SQL containing the builtin function UPPER, LOWER or SUBSTR in the WHERE clause (PL1) |
| -------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| CAST_PREFER_UNION_ALL_OVER_UNION | 1001142 | Avoid Functions and Procedures with DB2 SQL containing "UNION" clause without "ALL" option (PL1) |
| CAST_AVOID_USING_NOT_IN | 1001124 | Avoid Main Procedures having SQL queries using NOT IN (PL1) |
| CAST_AVOID_USING_NOT_EXISTS | 1001126 | Avoid Main Procedures having SQL queries using NOT EXISTS (PL1) |
| CAST_AVOID_USING_GROUP_BY | 1001134 | Avoid Main Procedures using GROUP BY statement (PL1) |
| CAST_AVOID_USING_SELECT_STAR | 1001136 | Avoid Main Procedures having "SELECT * FROM ..." clause (PL1) |
| CAST_AVOID_USING_OR | 1001144 | Avoid Functions and Procedures with "OR" logical operator in DB2 queries and in cursor definitions (PL1) |
| CAST_AVOID_USING_NON_ANSI_JOIN | 1001086 | Avoid programs with SQL queries using old style join convention instead of ANSI-Standard joins |
| CAST_AVOID_CURSOR_FETCH_ONLY_NO_ROWSET_POSITIONING | 1001138 | Avoid Functions and Procedures having cursors declared with "FOR FETCH ONLY" clause not having "WITH ROWSET POSITIONING" also specified (PL1) |
| CAST_AVOID_CURSOR_FETCH_WITHOUT_READ_FETCH_UPDATE | 1001146 | Avoid Programs having cursors that doesn't contain the "FOR UPDATE" clause and not containing the "FOR READ ONLY" or "FOR FETCH ONLY" clause (PL1) |
| CAST_AVOID_FETCH_WITHOUT_TITLE | 1001084 | Avoid Main Procedures having the FETCH statement not followed by the word "TITLE" (PL1) |

### PL-317 - Remove old extractor options

The following extractor options have been removed and are no longer present in the CAST Delivery Manager Tool:
- Clear Margins
- Make All PLC PLI
- Process PLI for MP
- Check Assembler
- Separate Files
- Force Main Proc
- Process Unknown Calls

Clearing margins will be done even though this option has been removed. This functionality is needed to make sure the analyzer parses the file correctly. If need be, please raise a feature request through CAST support explaining the reasons for re-adding any of the options above.
### PL-318 - PL1 extension should report the files that it fails to process

The PL1 extension needs to process all the file extensions because PL/I files can have any extension. During this parsing if the file is from a different technology, a failure will occur. The file that has caused the failure will be stored under a "ParsingFailures" folder at the package level and the file extension of the file will be changed to "pfail". A reason for the failure will also be recorded in each subfolder with name of the exception that caused it. For example StringCommentProcessorException:
It is advised that, if any of these files are valid PL/I files, they are sent to CAST support along with the **details.log** file. See also .
### PL-319 - Support for PL/I feature not always needing semicolon after end

PL/I allows the exclusion of the semicolon after end in certain situations. This is now supported.
### PL-320 - Support for PL/I feature one end closing multiple groups

PL/I allows the closing of multiple groups with one end. Since the analyzer requires the end for each procedure, if the end is missing an end is added manually by the extractor to the first closing group that already exists. In this situation, the PL1 extractor will raise a warning "Adding end statement for procedure <procedure name> at line <line number>".
For example:
### PL-321 - deprecate PLIProcSubscriptedVar

The object "PLI Subscripted Variable" will no longer be materialized in analysis results. Therefore after an upgrade to PL1 1.1.0 and the generation of a post-upgrade consistency snapshot on the same source code, this object will no longer be present.
### Regular Expression optimization (PL-297, PL-298, PL-304, PL-307, PL-308)

Regular Expressions used in the following metrics have been optimized to improve performance:
- PL1 Number of variable prefixes with space
- SQL metrics
- Cyclomatic Complexity
- PL1 Number of OTHERWISE statements
- PL1 Number of FIXED DEC statements

## Resolved issues

