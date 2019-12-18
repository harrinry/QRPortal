## PL1 1.0.5

- **Strings** are now processed as strings
- **Nested PLI/PLCFunctions/Procedures** are now detected correctly
- **++include** and **\\-inc** syntaxes are now supported
- **Column numbers** are now disregarded when **PLI/PLCFunctions/Procedures **are saved as objects, therefore object names no longer contain this information
- Code depth detection is improved significantly in PL 1.0.5 resulting in lesser warnings of type "**unable to find object end for `<type>`**".
- Bug fixing - see [PL1 1.0 - Bug Fix List](http://doc.castsoftware.com/display/DOCEXTDRAFT/PL1+1.0+-+Bug+Fix+List).

## PL1 1.0.4

- In this release the Quality Rule **Avoid using letters as I, J, K,.. for loops instead of using more meaningful variables (PL1) - 1001076** has been removed. As a direct result of this:

*   The associated metric "PLI: Use of I J K in Loop" has also been removed.
*   The associated metamodel type "PLIProcDOVar (PLI DO Variable)" has been marked as deprecated
*   The associated Quality Rule stored procedure "PL1\\_PLIPROC\\_PP102" has been removed:
*   On CAST AIP schemas installed on **CAST Storage Service**, after upgrading from PL1 ≤1.0.3 the stored procedure **will no longer exist**
*   On CAST AIP schemas installed on **Oracle Server**, after upgrading from PL1 ≤1.0.3 the stored procedure** will remain in place but no longer be used**
*   The impacts on analysis results of this decision are as follows:
*   No objects of type** PLIProcDOVar (PLI DO Variable)** will be resolved and saved in the CAST Analysis Service schema
*   The analysis log will no longer contain "duplicate object" warnings for PLIProcDOVar (PLI DO Variable) objects.
*   After **upgrading from PL1 ≤1.0.3** with **existing snapshots**, the Quality Rule will no longer be visible in the CAST dashboards for **all existing snapshots** and **any new snapshots** (that are generated with PL1 ≥1.0.4)
- The entry in the CAST Delivery Manager Tool for packaging PL1 source code has been renamed "**PL1**". In addition, it has been moved from the "**Source Code Management**" section to the "**Repository**" section (click to enlarge):

- Documentation for source code packaging and analysis has been improved. See [PL1 1.0 - Analysis Configuration](https://confluence.castsoftware.com/display/DOCEXT/PL1+1.0+-+Analysis+Configuration).
- Bug fixing - see .

## PL1 1.0.3

- Bug fixing - see .

## PL1 1.0.2

- Bug fixing - see .

## PL1 1.0.1

- Bug fixing - see .

## PL1 1.0.0

- The Regular Expression engine used to interpret the Regular Expressions defined in the Quality Rule configuration has changed. BOOST is now used in place of TCL. Please see [http://www.boost.org/doc/libs/1\\_52\\_0/libs/regex/doc/html/boost\\_regex/syntax/perl\\_syntax.html](http://www.boost.org/doc/libs/1_52_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html) for more information about BOOST
- In this release, the manual preprocessing step is no longer required - it is actioned automatically during code source Delivery via the CAST Delivery Manager Tool.

- Bug fixing - see .

# Function Point, Quality and Sizing support

This extension provides the following support:
- **Function Points (transactions)**: a green tick indicates that OMG Function Point counting and Transaction Risk Index are supported
- **Quality and Sizing**: a green tick indicates that CAST can measure size and that a minimum set of Quality Rules exist

| Function Points (transactions) | Quality and Sizing |
| ------------------------------ | ------------------ |
| - | - |

# CAST AIP compatibility

CAST recommends that you always install the latest release of an extension.
| Extension Version | AIP 7.3.x | AIP 8.0.x | AIP 8.1.x | AIP 8.2.x | AIP 8.3.x |
| ----------------- | --------- | --------- | --------- | --------- | --------- |
| 1.0.1 or higher | - | - | - | - | - |
| 1.0.0 | 7.3.0 - 7.3.2 | - | - | - | - |

# Supported DBMS servers

| DBMS | Supported? |
| ---- | ---------- |
| CSS | - |
| Oracle | - |
| Microsoft SQL Server | - |

# Supported Versions of PL1

This version of the extension provides support for:
- **Enterprise PL/I for z/OS - All versions (v3.x, v4.x, v5.x)**

# PL1 file extensions

When packaging PL1 source code for analysis (see ) the following **file extensions** are recognised by the CAST Delivery Manager Tool:
- .PLC
- .PLI

However, PL1 source code files can sometimes be created with any extension (for example .TXT) or no extension at all. If these type of files are encountered by the CAST Delivery Manager Tool during the packaging action, it will try to determine whether the file is a valid PL1 source file and if so, it will change the extension to .PLI or .PLC (for files with extensions other than .PLI or .PLC) and will add a .PLI or .PLC extension for files with no extension.
Currently, the PL1 extension ignores **empty files** and they will not be considered as valid source code files.
**Binary files** should also be avoided since it is not always possible to detect whether a given file is binary or not. Presenting binary files to the CAST Delivery Manager Tool will **not** result in a packaging failure, but an error message can be expected in the packaging/extraction log.
# Documentation of PL1 Quality Rules and Metrics

Documentation of all CAST Metrics and Quality Rules specific to the extension is delivered via a compiled **HTML Help file (CHM)**. Please ensure that once the CHM has been downloaded you right-click on the CHM file in Windows Explorer and choose** Properties > Unblock**. This will ensure that the CHM is readable on your own PC.
| 1.0.4 |
| ----- |
| 1.0.3 |
| 1.0 - 1.0.2 |
| Version | CHM |

