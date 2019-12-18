## RPG 2.0.4

### Log improvements for the RPG Preprocessor

- Improvements have been introduced with regard to the log files that are produced during an analysis of RPG code with the extension. Specifically, the logs produced by the **RPG Preprocessor** have been improved in this release of the extension. You can find out more information in .

### 204qrQuality Rule changes

The following changes have been introduced in this release:
- **Avoid Procedures with more than X lines of code (RPG400) - 1008122**: The default parameter used to determine the number of lines of code has been changed to 500, i.e. violations will only occur where the line of code value is above 500.
- **Avoid Procedures with more than X lines of code (RPG400) - 1008120**: The default parameter used to determine the number of lines of code has been changed to 500, i.e. violations will only occur where the line of code value is above 500.
- **Avoid Programs with more than X lines of code (RPG400) - 1008118**: The default parameter used to determine the number of lines of code has been changed to 2000, i.e. violations will only occur where the line of code value is above 2000.
- **Specify Error Subroutine for File Exception Handling (RPG400) - 1008074**: The Quality Rule has been updated as follows and violations should now occur in the following situations:

*   if the file has file specification (INFSR)
*   and it does not have an include link to a copybook which has a routine named '\\*pssr'
*   and if it itself does not have routine named '\\*pssr'
- **Avoid Logical File without associated Physical File (DDS400) -** **1011010**: The Quality Rule has been updated to consider the DB400 record and table if the corresponding Physical File file is not present in the analysis. Additional links are also created in this scenario:

*   DDS400 RecordStructureLF ==== referLink ===> DB400 Table
*   DDS400 RecordStructureLF ==== callLink ===> DB400 Record
Note that after installing this release of the extension and the generation of a post upgrade snapshot on the same source code, results may differ for the above Quality Rules: i.e. more or less violations may be reported depending on the changes introduced.
### Bug fixing

- Bug fixing - see

# Function Point, Quality and Sizing support

This extension provides the following support:
- **Function Points (transactions)**: a green tick indicates that OMG Function Point counting and Transaction Risk Index are supported
- **Quality and Sizing**: a green tick indicates that CAST can measure size and that a minimum set of Quality Rules exist

<table class="wrapped"><colgroup><col><col></colgroup><tbody><tr><th>Function Points<br>(transactions)</th><th>Quality and Sizing</th></tr><tr><td style="text-align: center;"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg" alt="(tick)"></td><td style="text-align: center;"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr></tbody></table>



# CAST AIP compatibility

CAST recommends that you always install the latest release of an extension.
<table class="wrapped"><colgroup><col><col><col></colgroup><tbody><tr><th colspan="1">AIP 8.0.x</th><th colspan="1">AIP 8.1.x</th><th colspan="1">AIP 8.2.x</th></tr><tr><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg" alt="(tick)"></td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg" alt="(tick)"></td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr></tbody></table>



# Supported DBMS servers

<table class="wrapped"><colgroup><col><col></colgroup><tbody><tr><th>DBMS</th><th>Supported</th></tr><tr><td>CSS2</td><td style="text-align: center;"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr><tr><td colspan="1">Oracle</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-cross" title="(error)" border="0" src="https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/error.svg" alt="(error)"></td></tr><tr><td colspan="1">Microsoft SQL Server</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-cross" title="(error)" border="0" src="https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/error.svg" alt="(error)"></td></tr></tbody></table>



# Supported Versions of RPG

This version of the extension provides partial support for the following RPG versions:
- RPG III
- RPG IV

Partial support is also provided for the code generated for these versions by:
- ADELIA
- SYNON

Please note that this extension supports RPG in the following formats:
- AS400
- ILE format
- Free-Format (note that support is "partial")

# RPG MetaModel

Below you can find a description of the RPG MetaModel, please click the image to download a full scale PDF version:
# Objects List

The following objects are displayed in CAST Enlighten:
### MENU %7C   %7C Icon %7C Object Name %7C

| --- | --- | --- |
| --- | --- | --- |
| 1 |

%7C MENU Bar %7C
| 2 |
| - |

%7C MENU Item %7C
| 3 |
| - |

%7C MENU Project %7C
### CL400 %7C   %7C Icon %7C Object Name %7C

| --- | --- | --- |
| --- | --- | --- |
| 1 |

%7C CL400 Program %7C
| 2 |
| - |

%7C CL400 Project %7C
| 3 |
| - |

%7C CL400 Subroutine %7C
### DB400 %7C   %7C Icon %7C Object Name %7C

| --- | --- | --- |
| --- | --- | --- |
| 1 |

%7C DB400 Project %7C
| 2 |
| - |

%7C DB400 Physical File %7C
| 3 |
| - |

%7C DB400 Logical File %7C
| 4 |
| - |

%7C DB400 Table %7C
| 5 |
| - |

%7C DB400 view %7C
| 6 |
| - |

%7C DB400 index %7C
### DD400 %7C   %7C Icon %7C Object Name %7C

| --- | --- | --- |
| --- | --- | --- |
| 1 |

%7C DDS400 Project %7C
| 2 |
| - |

%7C DDS400 Section %7C
| 3 |
| - |

%7C DDS400 PRTF File %7C
| 4 |
| - |

%7C DDS400 DSPF File %7C
| 5 |
| - |

%7C DDS400 Physical File %7C
| 6 |
| - |

%7C DDS400 Logical File %7C
| 7 |
| - |

%7C DDS400 RecordstructureLF %7C
| 8 |
| - |

%7C DDS400 RecordstructurePF %7C
| 9 |
| - |

%7C DDS400 Joinstructure %7C
### RPG 300 %7C   %7C Icon %7C Object Name %7C

| --- | --- | --- |
| --- | --- | --- |
| 1 |

%7C RPG/300 Project %7C
| 2 |
| - |

%7C RPG/300 Program %7C
| 3 |
| - |

%7C RPG/300 MainSubroutine %7C
| 4 |
| - |

%7C RPG/300 Subroutine %7C
| 5 |
| - |

%7C RPG/300 File Printer %7C
| 6 |
| - |

%7C RPG/300 File Disk %7C
| 7 |
| - |

%7C RPG/300 File Workstn %7C
| 8 |
| - |

%7C RPG/300 File Special %7C
| 9 |
| - |

%7C RPG/300 File Seq %7C
| 10 |
| -- |

%7C RPG/300 Rule %7C
| 11 |
| -- |

%7C RPG/300 Copy Member %7C
| 12 |
| -- |

%7C RPG/300 File Disk Record %7C
| 13 |
| -- |

%7C RPG/300 SQL Statement/Structure %7C
| 14 |
| -- |

%7C RPG/300 Data Structure %7C
| 15 |
| -- |

%7C RPG/300 Procedure %7C
| 16 |
| -- |

%7C RPG/300 Local Record Structure %7C
### RPG 400 %7C   %7C Icon %7C Object Name %7C

| --- | --- | --- |
| --- | --- | --- |
| 1 |

%7C RPG/400 Project %7C
| 2 |
| - |

%7C RPG/400 Program %7C
| 3 |
| - |

%7C RPG/400 MainSubroutine %7C
| 4 |
| - |

%7C RPG/400 Subroutine %7C
| 5 |
| - |

%7C RPG/400 Subroutine FreeFormat %7C
| 6 |
| - |

%7C RPG/400 File Printer %7C
| 7 |
| - |

%7C RPG/400 File Disk %7C
| 8 |
| - |

%7C RPG/400 File Workstn %7C
| 9 |
| - |

%7C RPG/400 File Special %7C
| 10 |
| -- |

%7C RPG/400 File Seq %7C
| 11 |
| -- |

%7C RPG/400 Procedure %7C
| 12 |
| -- |

%7C RPG/400 Procedure FreeFormat %7C
| 13 |
| -- |

%7C RPG/400 Procedure Prototype %7C
| 14 |
| -- |

%7C RPG/400 Bound Service Program %7C
| 15 |
| -- |

%7C RPG/400 Copy Member %7C
| 16 |
| -- |

%7C RPG/400 Rule %7C
| 17 |
| -- |

%7C RPG400 Data Structure %7C
| 18 |
| -- |

%7C RPG/400 Module %7C
| 19 |
| -- |

%7C RPG/400 File Disk Record %7C
| 20 |
| -- |

%7C RPG/400 Local Record Structure %7C
| 21 |
| -- |

# %7C RPG/400 SQL Structure %7C Documentation of RPG Quality Rules and Metrics

Documentation of all CAST Metrics and Quality Rules specific to the extension is delivered via a compiled **HTML Help file (CHM)**. Please ensure that once the CHM has been downloaded you right-click on the CHM file in Windows Explorer and choose** Properties > Unblock**. This will ensure that the CHM is readable on your own PC.
| Version | CHM |
| ------- | --- |

