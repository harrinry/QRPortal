# PL1 1.0.6

## Resolved issues

| Internal ID | Call ID | Summary |
| ----------- | ------- | ------- |
| PL-256 | 13194 | IBM PL/I extension can now be upgraded from previous versions. |

# PL1 1.0.5

## Updates

- **Strings** are now processed as strings
- **Nested PLI/PLCFunctions/Procedures** are now detected correctly
- **++include** and **\\-inc** syntaxes are now supported
- **Column numbers** are now disregarded when **PLI/PLCFunctions/Procedures **are saved as objects, therefore object names no longer contain this information
- Code depth detection is improved significantly in PL 1.0.5 resulting in lesser warnings of type "**unable to find object end for `<type>`**".

## Impacts of upgrading to this version

During the source code pre-processing phase that is done as part of the delivery and analysis process, CAST will now add "**$$**" to all PL1 source code just prior to the "**;**". For example:
| Original source code |
| -------------------- |
| Source code after pre-processing in < 1.0.5 |
| ≥ 1.0.5 |

The impact of this change is as follows:
- Existing objects will be shown as **updated** when a post upgrade snapshot is run.
- There will be a** reduction** in the number of messages of the type "end of object of type <PLC\\\\PLIProcedure%7CFunction> not found" that were previously displayed in the log.

This change has been implemented because of a limitation in the CAST analyzer with regard to the way object **start and end patterns** are handled. In PL1, object start and end patterns do not match (contrary to most other languages, such as PHP where \{ and \} are used) and therefore the analyzer is not able to correctly identify when an object ends.
## Resolved issues

| Internal ID | Summary | Comments |
| ----------- | ------- | -------- |
| PL-205 | PL1 infinite loop when comments have \# | When inline comments contained \#, an infinite loop was seen during the analysis. This has been corrected. |
| PL-166 | Permanent Fix - [Unicredit][ITA][PMB] snapshot stuck at Compute Snapshot step with pl1_pliproc_pp101 procedure |
| PL-164 | [IBM] [CLS FDW] [On-Boarding] [KLingamurthy] - PL1 Analysis - Warnings Unable to find the object end for type 'PLCProcedure' | PL1 Extension now detects start of end of PLC and PLI function/procedure correctly. |
| PL-196 | PLI: MENUDEF.plinc file pre-processed incorrectly => analysis warning "Unable to find the object end for type 'PLCFunction' |
| PL-198 | Warning "unable to find end of object type PLCProcedure" is given if "end case" statement is present in EXEC SQL |
| PL-206 | "Unable to find the object end for type 'PLIProcedure'" warning when "END" is preceded by comment |
| PL-207 | "Unable to find the object end for type 'PLIProcedure'" warning when comments has appearance of nested comments (Which are unsupported) |
| PL-208 | "Unable to find the object end for type 'PLIProcedure'" warning when variable is named "DO" in DCL statement |
| PL-200 | Warning "unable to find end of object type PLIProcedure" for cobol procedure |
| PL-199 | Warning "unable to find end of object type PLCProcedure" is given if another statement follows proc declaration |
| PL-177 | Cannot find procedure end if "END_" in name |
| PL-179 | cannot find object end if $ is in PLCFunction or PLIFunction name |
| PL-194 | End is not detected correctly if "options (main)" is on separate line |
| PL-178 | unnamed object is created if % is in PLCFunction name | PL1 extension now processes PLCInclude objects with special characters and will not create unnamed objects for them. |
| PL-174 | PLCInclude does not detect objects with special characters |
| PL-168 | missing includeLink in case of callee starting with @ | PL1 extension now will create correct links if: |
| PL-169 | missing callLink in case of callee starting with $ |
| PL-180 | No links to pli files and objects across files |
| PL-212 | No include links unless file is included in PLIMainProcedure |
| PL-213 | No call links unless file is included in PLIMainProcedure |
| PL-183 | No call links to objects with @ in name |
| PL-171 | PL1 should have string pattern | PL1 extension now processes strings as strings. |
| PL-172 | PL1 should have correct nesting support | PL1 extension now detects nested PLI/PLCFunction/Procedure correctly. |
| PL-175 | preprocessor erroneous identification - many cases of files saved as PLC instead of PLI when PROC and MAIN(OPTIONS) are on 2 separate lines | PLC and PLI file identification has been corrected so that PLI files will not be saved as PLC files. |
| PL-193 | PL1 extractor processes PLC files incorrectly |
| PL-184 | PL1 extension should support ++include\\-inc syntax | PL1 extension will now detect if files are included using ++include or -inc syntax. |
| PL-209 | Object names for procedures\\function\\main procedures should not consider column heading | PL1 extension will now disregard column number while creating PLC\\PLIFunction%7CProcedure. |
| PL-214 | PLC\\PLIFunction is converted to PLC\\PLIProcedure object if function does not take any parameters | PL1 extension will now correctly identify PLCFunction as PLCFunction with no parameters. |
| PL-161 | Include the default TCC configure files into the product | PL1 extension includes default configuration for TCC setup. |
| PL-165 | fix:QR "Avoid main procedures not having an ON ERROR clause (PL1)" violation for DMT generated unknown object | PL1 extension now disregards CAST generated objects for computing metric violations when CAST AIP schemas are installed in a CSS environment. |

# PL1 1.0.4

## Updates

In this release the Quality Rule **Avoid using letters as I, J, K,.. for loops instead of using more meaningful variables (PL1) - 1001076** has been removed. As a direct result of this:
- *   The associated metric "PLI: Use of I J K in Loop" has also been removed.

*   The associated metamodel type "PLIProcDOVar (PLI DO Variable)" has been marked as deprecated
*   The associated Quality Rule stored procedure "PL1\\_PLIPROC\\_PP102" has been removed:
*   On CAST AIP schemas installed on **CAST Storage Service**, after upgrading from PL1 ≤1.0.3 the stored procedure **will no longer exist**
*   On CAST AIP schemas installed on **Oracle Server**, after upgrading from PL1 ≤1.0.3 the stored procedure** will remain in place but no longer be used**
*   The impacts on analysis results of this decision are as follows:
*   No objects of type** PLIProcDOVar (PLI DO Variable)** will be resolved and saved in the CAST Analysis Service schema
*   The analysis log will no longer contain "duplicate object" warnings for PLIProcDOVar (PLI DO Variable) objects.
*   After **upgrading from PL1 ≤1.0.3** with **existing snapshots**, the Quality Rule will no longer be visible in the CAST dashboards for **all existing snapshots** and **any new snapshots** (that are generated with PL1 ≥1.0.4)
- The entry in the CAST Delivery Manager Tool for packaging PL1 source code has been renamed "**PL1**". In addition, it has been moved from the "**Source Code Management**" section to the "**Repository**" section (click to enlarge):

| Internal ID | Summary |
| ----------- | ------- |
| PL-144 | Correct extractor UI in DMT |
| PL-138 | Remove unused MAv2 metric Name="PLI: Begin Multiline Comment" TYPE="5000109" |
| PL-137 | Remove unused MAv2 metric with no name, regexp = FROM |
| PL-136 | Remove unused MAv2 metric "Number of Blank Lines" TYPE="5000040"> |
| PL-135 | Explain or Remove MAv2 metric PLI: Use of I J K in Loop" TYPE="5000067" |
| PL-134 | Remove unused MAv2 metric PLI: Declaration of JWB001" TYPE="5000077 |
| PL-130 | PL1 Library Extractor should not be listed under SCM in DMT |
| PL-128 | PLI Procedures ended by $$END are not recognized |
| PL-126 | Extractor v1.0.3 does not always clear margin - PLIProcedure identification jeopardized |
| PL-125 | Extractor v1.0.3 makes UA engine loop undefinitely on WARNING cannot find end of PLIProcedure |
| PL-123 | Extractor info message "apath\\G04071" %OLD_EXT%="PLC" %NEW_EXT%="PLI" whereas OLD_EXT is . |
| PL-119 | Extractor is not resilient - in case of exception, catch and continue with next file |
| PL-118 | Extractor does not detect invalid files : binary and empty source files are renamed to .PLC and sent to analysis |
| PL-116 | Extractor generates 2 Analysis Units, only 1 is expected - no Include Link PLI to PLC |
| PL-115 | Extractor adds superfluous (duplicated) OPTIONS (MAIN) |
| PL-114 | QR Avoid duplicated Main Procedures (PL1) reports violation for generated code for called programs |
| PL-113 | Extractor does not log the processed file names |
| PL-112 | Owners and other tags in nuspec file are wrong in v1.0.3. v1.0.2 was correct |

# PL1 1.0.3

## Resolved issues

| Internal ID | Ticket ID | Summary | Comment |
| ----------- | --------- | ------- | ------- |
| PL-47 | 3469 | No violations for quality rule "Avoid having multiple artifacts inserting data on the same table (PLI)" | For these Rules, the scope has been updated. It contains only DB2 ZOS tables. So these rules will be computed only when DB2 ZOS tables exists in same Analysis Service with a PL1 analysis. |
| PL-49 | 3525 | No violations for quality rule "Avoid having multiple artifacts updating data on the same table (PLI)" |
| PL-51 | 3526 | No violations for quality rule "Avoid having multiple artifacts deleting data on the same table (PLI)" |
| PL-50 | 3487 | Missing link between two PL1 programs | - |
| PL-48 | 1722 | PL1 - Warnings during analysis - Unable to find the object end for type 'PLCProcedure' | - |

# PL1 1.0.2

## Resolved issues

**PL1 1.0.2** contains various fixes for issues found preventing compatibility with CAST AIP 7.3.3.
# PL1 1.0.1

## Resolved issues

| Internal ID | Ticket ID | Summary |
| ----------- | --------- | ------- |
| SCRAIP-5145 | - | PL1 : False violation for QR "Avoid unreferenced PLC Procedures & Functions (PL1) " |
| SCRAIP-5144 | - | PL1: Incorrect name for "Violating Object" for QR " Avoid PL1 Errors Blocks having ON ERROR SYSTEM blocks and not containing and displaying ONCODE and ONLOC (PL1)" |
| SCRAIP-4814 | - | PL1 : False violation for QR " Avoid undocumented PLI Programs (PL1)" |
| SCRAIP-4293 | 26204 | PL1_SCOPE_COUNT_PLI & PL1_SCOPE_COUNT_PLC do not use the best practices for Tech Size |
| SCRAIP-4292 | 26254 | Some UA Metrics are initialized to 1 |
| SCRAIP-4291 | 26309 | icons for certain object types are not visible on dashboard - UA PL1 analysis |
| SCRAIP-4290 | 26144 | FALSE NEGATIVES for rule Avoid using letters as I, J, K,.. for big loops instead of using more meaningful variables (PL1) |
| SCRAIP-4289 | 24406 | PL1 false positive violation: Avoid not testing the SQLCODE return code after each SQL statement PL1 |
| SCRAIP-4288 | 26306 | Rule "Avoid PLI Main procedures using GOTO statement" shows 3 violations in DEVELOPMENT_VIEW |
| SCRAIP-4283 | - | PL1: Missing violation for QR " Avoid Functions and Procedures using RETURN statements (PL1) |
| SCRAIP-4282 | - | PL1 : Violations are at "Main" procedure level instead of "Function and Procedure" level for QR "Avoid Functions and Procedures using BIN FIXED(15) instead of BIN FIXED(31) for all local variables (PL1) " |
| SCRAIP-4281 | - | PL1: False violation for QR "Avoid Programs overriding the *PROCESS statement (PL1) " |
| SCRAIP-4280 | - | PL1: False violation for QR "Avoid undocumented PLC Copybook (PL1) " |
| SCRAIP-4279 | - | PL1 : False violation for QR "Avoid Functions and Procedures using RETURN statements (PL1) " |

# PL1 1.0.0

## Updates

- The Regular Expression engine used to interpret the Regular Expressions defined in the Quality Rule configuration has changed. BOOST is now used in place of TCL. Please see [http://www.boost.org/doc/libs/1\\_52\\_0/libs/regex/doc/html/boost\\_regex/syntax/perl\\_syntax.html](http://www.boost.org/doc/libs/1_52_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html) for more information about BOOST

