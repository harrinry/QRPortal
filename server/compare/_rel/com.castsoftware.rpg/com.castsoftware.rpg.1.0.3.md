## RPG 1.0.3

- Bug fixing - see RPG Language Pack 1.0 - Bug Fix List.

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
| 1.0.3 |
| 1.0.1 and 1.0.2 | 7.3.0 - 7.3.2 |
| 1.0 |

# %7C  %7C  %7C  %7C Supported DBMS servers

| DBMS | Supported |
| ---- | --------- |
| CSS2 |
| Oracle |
| Microsoft SQL Server |

---
This version of the extension provides partial support for the following RPG versions:
- RPG III - GAP 3
- RPG IV - GAP 4

Partial support is also provided for the code generated for these versions by:
- ADELIA
- SYNON

Please note that this extension only supports RPG in AS400 and ILE format: Free-Format RPG is not supported.
# Documentation of RPG Quality Rules and Metrics

Documentation of all CAST Metrics and Quality Rules specific to the extension is delivered via a compiled **HTML Help file (CHM)**. Please ensure that once the CHM has been downloaded you right-click on the CHM file in Windows Explorer and choose** Properties > Unblock**. This will ensure that the CHM is readable on your own PC.
| Version | CHM |
| ------- | --- |
| 1.0.1 and above |
| 1.0 |

---
If you are installing the extension while upgrading from a CAST AIP 7.0.x please note that when consulting the results of your snapshot immediately after the migration, you will see that the grade values of multiple Quality Rules have been modified even though the number of failed and total checks is exactly the same as before the migration.
**The difference in grade values is due to the different grade threshold values that are used in the the two releases of CAST AIP**:  the new grade threshold values are applied by during the Assessment Model import. Since no specific grade threshold values are specified for any RPG Quality Rules, CAST applies the default grade threshold values during the Assessment Model import. Please note that the default grade threshold values have been also updated in CAST AIP 7.2.x and above.
Take the following example for the Quality Rule: **Avoid Subroutines with a very low comment/code ratio (RPG400)**
## CAST AIP 7.0.x

- 2 failed checks
- 78 total checks
- 97.44, grade = **2.61**

## CAST AIP 7.2.x and above

- 2 failed checks
- 78 total checks

