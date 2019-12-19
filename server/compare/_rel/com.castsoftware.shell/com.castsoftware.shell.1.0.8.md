# Shell 1.0.8

## Resolved issues

**Shell 1.0.8** contains all bug fixes from all previous releases. The following table lists all bugs fixed in** Shell 1.0.8**:
| R&D ID | Ticket ID | Summary | Description |
| ------ | --------- | ------- | ----------- |
| SHELL-149 | 11254 | Links identified with Shell 1.0.6 extension no longer found when analyzing the same unchanged code with Shell 1.0.7. | This bug has now been fixed and after an upgrade to Shell 1.0.8 and the generation of a snapshot on unchanged source code, results may differ: links/objects that were previously not found with Shell 1.0.7 will now be resolved. |

# Shell 1.0.7

## Updates

### Log improvements for the Shell Preprocessor

- Improvements have been introduced with regard to the log files that are produced during an analysis of Shell code with the extension. Specifically, the logs produced by the **Shell Preprocessor** have been improved in this release of the extension.

### Auto import of CAST Transaction Configuration Center (TCC) setup

- In previous releases of the extension, a TCCSetup file was shipped with the extension which could be manually imported into the CAST Transaction Configuration Center (TCC) to provide a pre-defined set of Shell Transaction Entry / End Points under "Free Definition". If you are using the **Shell ≥ 1.0.7** extension with **CAST AIP ≥ 8.3.x**, then this Entry Point configuration specifically for Shell is now automatically imported when the extension is installed.

## Resolved issues

**Shell 1.0.7** contains all bug fixes from all previous releases. The following table lists all bugs fixed in** Shell 1.0.7**:
| R&D ID | Summary | Description |
| ------ | ------- | ----------- |
| SHELL-126 | Shell extension should support nested functions | Shell extension now supports nested functions |
| SHELL-125 | Shell extension does not create nested SHELLFunction objects |  |
| SHELL-124 | Several warnings unable to find esql end where%7CWhere%7C;%7C\\) | Shell extension now detects sql syntaxes without warnings. |
| SHELL-123 | Shell extension does not detect if here document marker is on next line (and the file content becomes malformed) | Shell extension now supports here document broken down to the next line. |
| SHELL-122 | shell extension doesn't create function objects because of incorrect here document handling | Shell extension now does not miss out function object creation due to incorrect parsing of here documents. |
| SHELL-121 | shell extension creates unnamed function objects for tcsh array syntax | Shell extension does not create unnamed objects for tcsh array syntax. |
| SHELL-120 | shell extension creates program name with unnamed objects | Shell extension now formulates program name correctly and does not create unnamed objects. |
| SHELL-119 | Shell extension creates shell program with wrong name |  |
| SHELL-116 | unnamed objects of shellfunction are created | Shell extension does not create unnamed objects for functions |
| SHELL-114 | Include the default TCC configure files into the product | Shell extension includes TCC configuration files for default TCC setup. |
| SHELL-112 | Shell extension should support complex strings | Shell extension can now parse complex strings. |
| SHELL-111 | Shell extension gives warning about not being able to detect end of shellfunction | Shell extension can now detect end of function correctly. |
| SHELL-110 | Shell extension cannot detect end of shell special function |  |
| SHELL-109 | Shell extension does not detect all cases for CAST_HERE_ESQL | Shell extension can detect use of sql in here document correctly. |
| SHELL-107 | Shell extension log mechanism does not handle migration\\update correctly | Shell extension logs now contain name of the extension and version in file name. |
| SHELL-106 | <Extension Name> Technology Extension Version.txt should not be part of extension | Shell extension version information now can be retrieved by using extension downloader "Installed" tab and extension folder name |
| SHELL-105 | Shell : Version number is missing in Prepro log file | Shell extension logs now contain extension version in content. |
| SHELL-103 | Manual Preprocessor should not be given as part of package | Manual pre-processing is no longer needed or available with shell extension |
| SHELL-101 | Update Launch.bat in order to return an error code when preprocessing fails | UA logs will contain warning if shell preprocessor encounters errors. |
| SHELL-100 | Have the log of preprocessor of extension in same location indicated CAST MS preferences | Shell extension logs from 8.3.0 onwards will be present in the same location as that of CAIP application logs. |
| SHELL-98 | Random objects may get created | Shell extension when used with extractor will not deliver binary files. |
| SHELL-97 | PERMANENT FIX - Shell files are getting skipped | Shell extension will skip files in two cases now: either when here document is  in multiline comment or when strings in the application are invalid. Please see documenation for file extension effect. |
| SHELL-94 | PERMANENT FIX - [ATT][TLG_MOB][Rescan][1702][ARH][Shell program artifacts are not getting created.] |  |
| SHELL-91 | Permanent fix - shel[ATT][DATAWAREHOUSE][1610][Onboarding][ABA] : Shell files skipped during analysis |  |
| SHELL-69 | PERM FIX - [AT&T][AKU][CAPM] SHELL preprocessor generates a folder called "Program", all VB6 and BO analysis then fail |  |
| SHELL-61 | Shell : Incorrect count of comments, within here document. | Shell extension now can detect comments correctly when in here document. |
| SHELL-52 | SHELL: pre-processor log file bookkeeping fails if path has space | Shell extension will run correctly even when paths have space in them. |
| SHELL-42 | Shell extension should support string literals | Shell extension now has string specification to identify strings. |
| SHELL-37 | Warning "end of comment not found" is reported | Shell extension now differentiate correctly between comments and non  comments in shell file. |

# Shell 1.0.6

## Resolved issues

**Shell 1.0.6** contains all bug fixes from all previous releases. The following table lists all bugs fixed in** Shell 1.0.6**:
| R&D ID | Ticket ID | Summary | Comment |
| ------ | --------- | ------- | ------- |
| SHELL-73 | 7417/7418 | PERMANENT FIX - ATT][CCDM][Rescan][1610][KDS][Shell program artifacts are not getting created.] | launch.bat of the preprocessor to consider space in used path. |
| SHELL-74 | - | PERMANENT FIX-Shell files skipped during analysis | Please see for more information. |

# Shell 1.0.5

## Updates

- This extension now uses a Java pre-processor replacing the existing Perl pre-processor. The new Preprocessor will be available under C:\\\\ProgramData\\\\CAST\\\\CAST\\\\Extensions\\\\com.castsoftware.shell.`<version>`-buildXXX\\\\Configuration\\\\Languages\\\\SHELL\\\\prepro

*   The preprocessor requires a **JAVA\\_HOME system environment variable** to be present on the machine, and therefore also requires a **Java JRE 1.7** to be installed.
*   The log file name uses the format com.castsoftware.shell\\_`<YYYYMMddHHmmss>`.log
*   Only the latest 10 preprocessing log files will be retained
*   The time is also added for each log entry
*   The launch.bat has been modified to be able to run from all the folders – until now it could not be run from the prepro directory
*   No manual pre-processor is delivered
- Based on the new pre-processor, we are now able to improve the string support : we add the support of [Here document and Here String](https://en.wikipedia.org/wiki/Here_document\#Unix_shells).

## Resolved issues

**Shell 1.0.5** contains all bug fixes from all previous releases. The following table lists all bugs fixed in** Shell 1.0.5**:
| R&D ID | Call ID | Summary |
| ------ | ------- | ------- |
| SHELL-59 | 5231 | [ATT] [PMOSS_WIPM]: Analysis got failed for 'Run Universal Analyzer Shell' |

# Shell 1.0.4

## Updates

- This release adds support for strings with many different patterns. Files which were skipped/ignored with previous releases of the Shell extension are now correctly analyzed. As a consequence, re-analyzing the same source code with this new extension will see an increase in the number of lines of code reported in the results.

## Resolved issues

**Shell 1.0.4** contains all bug fixes from all previous releases. The following table lists all bugs fixed in** Shell 1.0.4**:
| R&D ID | Call ID | Summary |
| ------ | ------- | ------- |
| SHELL-10 | 4375 | [ATT][ENABLER-C][1510 Migration from 709 to 735] After migration LOC count has been decreased for the shell |
| SHELL-28 | - | Shell : QR " Avoid scripts and functions using SQL static statements (Shell) " is not showing violation even when the source code qualifies for violation. |
| SHELL-29 | - | Shell : False violations for QR " Avoid scripts and functions using SQL static statements (Shell) " |
| SHELL-35 | - | Shell Extension should not create SHELLVariable objects |

# Shell 1.0.3

**Shell 1.0.3** contains all bug fixes from all previous releases. The following table lists all bugs fixed in** Shell 1.0.3**:
| R&D ID | Call ID | Summary |
| ------ | ------- | ------- |
| SHELL-4 | 4277 | Shell processor copying complete application source code in LISA directory |

# Shell 1.0.2

**Shell 1.0.2** contains all bug fixes from all previous releases. The following table lists all bugs fixed in** Shell 1.0.2**:
| R&D ID | Call ID | Summary |
| ------ | ------- | ------- |
| SCRAIP-738 |  | Shell: Incorrect Language Pattern |
| SCRAIP-7023 | 27294 | Shell : Object names starting with digit/number are not capture |

# Shell 1.0.1

## Updates

- **Improvement for pre-processor log file: **In all previous releases, manual and automated pre-processor operations generate a report log file called "shell\\_pp\\_report.txt" under **\\\\Configuration\\\\Languages\\\\SHELL\\\\prepro**. This file is overwritten each time the pre-processor is launched, therefore it is not possible to retain a history of the various pre-processing operations carried out for different analyses. To improve this behavior, we have introduced new variable in the "launch.bat" file to define the number of report log files to be retained. The pre-processor report log file will now have the date and time added as a suffix to the file's name (e.g "shell\\_pp\\_report\\_02-23-2015\\_ 651.txt") to avoid the file being overwritten.

*   The value "last\\_number\\_of\\_reports\\_to\\_keep" is declared in the "launch.bat" file
*   The default value of "last\\_number\\_of\\_reports\\_to\\_keep" declared in the "launch.bat" file is set to 10, i.e. only 10 preprocessing report files will be retained. On generation of  eleventh file, the oldest report log file will be deleted and a new file will be created in its place keeping the total count to 10 log files.
*   the default value can be changed as and when required
*   if the value is set to "-1", all the report log files will be retained
*   If value is set to "0", no new report file will be created and all other existing files will also be deleted
*   The behavior is the same for manual and automated pre-processing
## Resolved issues

**Shell 1.0.1** contains all bug fixes from all previous releases. The following table lists all bugs fixed in** Shell 1.0.1**:
| R&D ID | Call ID | Summary |
| ------ | ------- | ------- |
| SCRAIP-4541 | 29468 | SHELL UA 1.0 - Pre-processor processes all the files; those belonging to different technology also |
| SCRAIP-4596 | 29497 | Shell UA job takes more than 2 hours to complete |
| SCRAIP-4538 | 29469 | Shell 1.0 : Preprocessor report mentions 'Pre-processor for PeopleSoft V1.0' |
| SCRAIP-4599 | 29483 | Documentation : Rule Avoid unreferenced Programs (Shell) |
| SCRAIP-4598 | 29488 | Pre-processor log files created in config folder & overwritten on execution of AU |
| SCRAIP-5244 | 29598 | SHELL UA Package - `<unnamed>` functions in the dashboard after the analysis |

---
## Updates

- The Regular Expression engine used to interpret the Regular Expressions defined in the Quality Rule configuration has changed. BOOST is now used in place of TCL. Please see [http://www.boost.org/doc/libs/1\\_52\\_0/libs/regex/doc/html/boost\\_regex/syntax/perl\\_syntax.html](http://www.boost.org/doc/libs/1_52_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html) for more information about BOOST.
- In this release, the manual preprocessing step is no longer required - it is actioned automatically just prior to an analysis.

## Resolved issues

| R&D ID | Call ID | Summary |
| ------ | ------- | ------- |
| COE-507 | 27164 |

