## TIBCO 1.1.0

- The TIBCO 1.1.0 extension now provides quality measurement via a set of new dedicated Quality Rules. Previous releases of the TIBCO extension only provided function point measurement via a standard code analysis. The following Quality Rules have been made available in this release:

| Quality Rule ID | Quality Rule name |
| --------------- | ----------------- |
| 1018100 | Avoid using Get JMS Queue Message (TIBCO BW) |
| 1018140 | Avoid using Java Activities (TIBCO BW) |
| 1018142 | Avoid using External Command Activities (TIBCO BW) |
| 1018144 | Avoid harcoded timeout in Process Activities (TIBCO BW) |
| 1018530 | Avoid uncommented Processes (TIBCO BW) |
| 1018540 | Avoid JMS Synchronous Activities (TIBCO BW) |
| 1018720 | Avoid oversized processes (1100x900) (TIBCO BW) |
| 1018760 | Avoid AE Schema with Target namespace not defined (TIBCO BW) |
| 1018764 | Avoid Processes using JDBC SQL Direct (TIBCO BW) |
| 1018860 | Avoid Process with too many Activities (TIBCO BW) |

- Additionally, the following **Technical Size measures** have also been introduced.

*   Number of processes
*   Number of activities
*   Number of files
*   Number of AE Schemas
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
| Extension Version | AIP 7.3.x | AIP 8.0.x | AIP 8.1.x |
| ----------------- | --------- | --------- | --------- |
| 1.1.0 or higher |

# %7C  %7C  %7C Supported DBMS servers

| DBMS | Supported |
| ---- | --------- |
| CSS2 |
| Oracle |
| Microsoft SQL Server |

---
This version of the extension provides partial support for:
- TIBCO BusinessWorks 5.1 > TIBCO BusinessWorks 5.13

# Documentation of TIBCO Quality Rules and Metrics

Documentation of all CAST Metrics and Quality Rules specific to the PHP extension is delivered via a compiled **HTML Help file (CHM)**. Please ensure that once the CHM has been downloaded you right-click on the CHM file in Windows Explorer and choose **Properties > Unblock**. This will ensure that the CHM is readable on your own PC:
| Extension version | CHM |
| ----------------- | --- |

