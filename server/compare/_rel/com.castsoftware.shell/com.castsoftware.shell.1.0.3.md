## Shell 1.0.3

- Bug fixing - see  .

## Shell 1.0.4

- This release adds support for strings with many different patterns. Files which were skipped/ignored with previous releases of the Shell extension are now correctly analyzed. As a consequence, re-analyzing the same source code with this new extension will see an increase in the number of lines of code reported in the results.
- Bug fixing - see  .

## Shell 1.0.5

- This extension now uses a Java pre-processor replacing the existing Perl pre-processor. The new Preprocessor will be available under C:\\\\ProgramData\\\\CAST\\\\CAST\\\\Extensions\\\\com.castsoftware.shell.`<version>`-buildXXX\\\\Configuration\\\\Languages\\\\SHELL\\\\prepro

*   The preprocessor requires a **JAVA\\_HOME system environment variable** to be present on the machine, and therefore also requires a **Java JRE 1.7** to be installed, see below.
*   The log file name uses the format com.castsoftware.shell\\_`<YYYYMMddHHmmss>`.log
*   Only the latest 10 preprocessing log files will be retained
*   The time is also added for each log entry
*   The launch.bat has been modified to be able to run from all the folders – until now it could not be run from the prepro directory
*   No manual pre-processor is delivered
- Based on the new pre-processor, we are now able to improve string support via the addition of support for [Here document and Here String](https://en.wikipedia.org/wiki/Here_document\#Unix_shells).
- Bug fixing - see  .

## Shell 1.0.6

- Bug fixing - see  .

## Shell 1.0.7

### Log improvements for the Shell Preprocessor

- Improvements have been introduced with regard to the log files that are produced during an analysis of Shell code with the extension. Specifically, the logs produced by the **Shell Preprocessor** have been improved in this release of the extension. You can find out more information in .

### Auto import of CAST Transaction Configuration Center (TCC) setup

- In previous releases of the extension, a TCCSetup file was shipped with the extension which could be manually imported into the CAST Transaction Configuration Center (TCC) to provide a pre-defined set of Shell Transaction Entry / End Points under "Free Definition". If you are using the **Shell ≥ 1.0.7** extension with **CAST AIP ≥ 8.3.x**, then this Entry Point configuration specifically for Shell is now automatically imported when the extension is installed. See  for more information.

### Bug Fixing

- See .

# Function Point, Quality and Sizing support

This extension provides the following support:
- **Function Points (transactions)**: a green tick indicates that OMG Function Point counting and Transaction Risk Index are supported
- **Quality and Sizing**: a green tick indicates that CAST can measure size and that a minimum set of Quality Rules exist %7C Function Points

(transactions) %7C Quality and Sizing %7C
| --- | --- |
| --- | --- |
| \![(tick)](https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg "(tick)") | \![(tick)](https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg "(tick)") |

---------------------------------------
Note that these prerequisites are only applicable in the following circumstances:
- If you are using version ****≥** 1.0.5** of the Shell extension AND **CAST AIP ≤ 8.2.0**

Therefore, if you are:
- using **CAST AIP ≥ 8.2.1** AND version ****≥** 1.0.5** of the Shell extension, you don't need to set a JAVA\\_HOME. The Shell extension will use the JRE provided with CAST AIP and located in the installation folder.
- using version ****≤** 1.0.4** of the Shell extension, you don't need to set a JAVA\\_HOME.

- The extension requires a **Java JRE** to be installed on the machine: only **Java JRE 1.7** is currently supported.
- The extension requires that a **JAVA\\_HOME** system environment variable is also present on the machine, pointing to the Java JRE installation folder:

# CAST AIP compatibility

CAST recommends that you always install the latest release of an extension.
| Extension Version | AIP 7.2.x | AIP 7.3.x | AIP 8.0.x | AIP 8.1.x | AIP 8.2.x |
| ----------------- | --------- | --------- | --------- | --------- | --------- |
| 1.0.1 or higher | 7.2.4 or higher | \![(tick)](https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg "(tick)") | \![(tick)](https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg "(tick)") | \![(tick)](https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg "(tick)") | \![(tick)](https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg "(tick)") |
| 1.0 | 7.2.3 or higher (note 7.2.3 requires the **_AIP 7.2.3 patch for Language Packs_**) | 7.3.0 - 7.3.2 | \![(error)](https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/error.svg "(error)") | \![(error)](https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/error.svg "(error)") | \![(error)](https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/error.svg "(error)") |

---
| DBMS | Supported |
| ---- | --------- |
| CSS2 | \![(tick)](https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg "(tick)") |
| Oracle | \![(tick)](https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg "(tick)") |
| Microsoft SQL Server | \![(error)](https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/error.svg "(error)") |

---
Thisextension provides partial support for the following Shell versions:
- Korn shell
- Bourne shell
- C shell

# Documentation of Shell Quality Rules and Metrics

Documentation of all CAST Metrics and Quality Rules specific to the Shell extension is delivered via a compiled **HTML Help file (CHM)**. Please ensure that once the CHM has been downloaded you right-click on the CHM file in Windows Explorer and choose **Properties > Unblock**. This will ensure that the CHM is readable on your own PC:
| Version | CHM |
| ------- | --- |
| 1.0.1 - 1.0.5 |

