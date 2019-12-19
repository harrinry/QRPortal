## EGL 1.0.2

- **Improvement for pre-processor log file:** In all previous releases, manual and automated pre-processor operations generate a report log file called "EGL\\_pp\\_report.txt" under **\\\\Configuration\\\\Languages\\\\EGL\\\\prepro**. This file is overwritten each time the pre-processor is launched, therefore it is not possible to retain a history of the various pre-processing operations carried out for different analyses. To improve this behavior, we have introduced new variable in the "launch.bat" file to define the number of report log files to be retained. The pre-processor report log file will now have the date and time added as a suffix to the file's name (e.g "EGL\\_pp\\_report\\_02-23-2015\\_ 651.txt") to avoid the file being overwritten.

*   The value "last\\_number\\_of\\_reports\\_to\\_keep" is declared in the "launch.bat" file
*   The default value of "last\\_number\\_of\\_reports\\_to\\_keep" declared in the "launch.bat" file is set to 10, i.e. only 10 preprocessing report files will be retained. On generation of  eleventh file, the oldest report log file will be deleted and a new file will be created in its place keeping the total count to 10 log files.
*   the default value can be changed as and when required
*   if the value is set to "-1", all the report log files will be retained
*   If value is set to "0", no new report file will be created and all other existing files will also be deleted
*   The behavior is the same for manual and automated pre-processing
- Bug fixing - see .

## EGL 1.0.3

### Log improvements for the EGL Preprocessor

- Improvements have been introduced with regard to the log files that are produced during an analysis of EGL code with the extension. Specifically, the logs produced by the **EGL Preprocessor** have been improved in this release of the extension. You can find out more information in .

### EGL Preprocessor

- The ability to manually launch the EGL preprocessor has been removed from the extension. The preprocessor is always launched automatically.

### Predefined CAST Transaction Configuration Center setup file

- Delivered with this extension is a **.TCCSetup** file for use in the CAST Transaction Configuration Center. This file provides predefined Data Entities and Transaction Entry Points. See

### Bug fixing

- Bug fixing - see .

# Function Point, Quality and Sizing support

This extension provides the following support:
- **Function Points (transactions)**: a green tick indicates that OMG Function Point counting and Transaction Risk Index are supported
- **Quality and Sizing**: a green tick indicates that CAST can measure size and that a minimum set of Quality Rules exist %7C Function Points

(transactions) %7C Quality and Sizing %7C
| --- | --- |
| --- | --- |

---------------------------------------
CAST recommends that you always install the latest release of an extension.
| Extension Version | AIP 7.3.x | AIP 8.0.x | AIP 8.1.x | AIP 8.2.x |
| ----------------- | --------- | --------- | --------- | --------- |
| 1.0.1 or higher |
| 1.0 | 7.3.0 - 7.3.2 |

---
| DBMS | Supported |
| ---- | --------- |
| CSS2 | - |
| Oracle | - |
| Microsoft SQL Server | - |

# Supported Versions of EGL

This version of the extension provides support for:
- **Rational Business Developer V7 R5.1**

# Documentation of EGL Quality Rules and Metrics

Documentation of all CAST Metrics and Quality Rules specific to the extension is delivered via a compiled **HTML Help file (CHM)**. Please ensure that once the CHM has been downloaded you right-click on the CHM file in Windows Explorer and choose** Properties > Unblock**. This will ensure that the CHM is readable on your own PC.
