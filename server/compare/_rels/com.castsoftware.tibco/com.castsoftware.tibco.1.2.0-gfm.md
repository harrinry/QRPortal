## TIBCO 1.2.0

- The TIBCO 1.2.0 extension provides the support of **TIBCO ActiveMatrix BusinessWorks 6**. TIBCO ActiveMatrix BusinessWorks 6 is not a simple enhancement of BusinessWorks 5 - it should rather be considered as a complete rewrite. The following aspects have been changed in TIBCO ActiveMatrix BusinessWorks 6: Architecture, design, development and Administration.
- With TIBCO 1.2, you will be able to analyze your **TIBCO ActiveMatrix BusinessWorks 6** application and view its objects. Links to database objects will be also created if your application has this kind of interaction.

- TIBCO 1.2 also provides the following new Quality Rules for **TIBCO ActiveMatrix BusinessWorks 6** and **BusinessWorks 5**:

| Quality Rule ID | Quality Rule name |
| --------------- | ----------------- |
| 1018876 | Avoid unreferenced Process Activities (TIBCO BW) |
| 1018874 | Avoid Activities With Queries on more than 4 Tables (TIBCO BW) |
| 1018872 | Avoid Activities using "Group By" statement (TIBCO BW) |
| 1018870 | Avoid Activities using "UNION" instead of "Union all" (TIBCO BW) |
| 1018868 | Avoid JMS Synchronous Activities (TIBCO BW) |
| 1018866 | Avoid Activities with "SELECT *" queries (TIBCO BW) |
| 1018864 | Avoid JDBC Connections having password type as string (TIBCO BW) |
| 1018862 | JDBC connection must use Global variable for username and password parametrization of database url (TIBCO BW) |
| 1018304 | Avoid unreferenced Processes (TIBCO BW) |

- The Quality rules introduced in TIBCO 1.1 have been updated to function correctly with **TIBCO ActiveMatrix BusinessWorks 6** applications
- Bug fixing - see .

## TIBCO 1.2.1

### Log improvements for the TIBCO Preprocessor

- Improvements have been introduced with regard to the log files that are produced during an analysis of TIBCO code with the extension. Specifically, the logs produced by the **TIBCO Preprocessor** have been improved in this release of the extension. You can find out more information in .

### Predefined CAST Transaction Configuration Center setup file

- Delivered with this extension is a **.TCCSetup** file for use in the CAST Transaction Configuration Center. This file provides predefined Transaction Entry Points. See .

### CAST Delivery Manger Tool

- The option for extracting embedded Java Source code for TIBCO BusinessWorks 5 has been moved from the "Source Code Management" section to the "Vendor Specific Repository" section. See .

# Function Point, Quality and Sizing support

This extension provides the following support:
- **Function Points (transactions)**: a green tick indicates that OMG Function Point counting and Transaction Risk Index are supported
- **Quality and Sizing**: a green tick indicates that CAST can measure size and that a minimum set of Quality Rules exist

<table class="wrapped"><colgroup><col><col></colgroup><tbody><tr><th colspan="1">Function Points<br>(transactions)</th><th colspan="1">Quality and Sizing</th></tr><tr><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg" alt="(tick)"></td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr></tbody></table>



# CAST AIP compatibility

CAST recommends that you always install the latest release of an extension.
<table class="wrapped"><colgroup><col><col></colgroup><tbody><tr><th>AIP release</th><th>Supported</th></tr><tr><td colspan="1"><span>CAST AIP 8.3.x</span></td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr><tr><td colspan="1"><span>CAST AIP 8.2.x</span></td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr><tr><td><span>CAST AIP 8.1.x</span></td><td style="text-align: center;"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr><tr><td><span>CAST AIP 8.0.x</span></td><td style="text-align: center;"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr><tr><td><span>CAST AIP <span>≥ </span>7.3.6</span></td><td style="text-align: center;"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr></tbody></table>



# Supported DBMS servers

<table class="wrapped"><colgroup><col><col></colgroup><tbody><tr><th colspan="1">DBMS</th><th colspan="1">Supported</th></tr><tr><td style="text-align: left;" colspan="1">CSS2</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr><tr><td style="text-align: left;" colspan="1">Oracle</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-cross" title="(error)" border="0" src="https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/error.svg" alt="(error)"></td></tr><tr><td style="text-align: left;" colspan="1">Microsoft SQL Server</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-cross" title="(error)" border="0" src="https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/error.svg" alt="(error)"></td></tr></tbody></table>



# Supported Versions of TIBCO

This version of the extension provides partial support for:
- **TIBCO BusinessWorks 5.1 > TIBCO BusinessWorks 5.13**

