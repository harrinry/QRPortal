# %7C TIBCO 1.2.2

## Updates

### Discovery

**TIBCO-466**: the TIBCO discoverer will no longer create a TIBCO project when only \\*.MF and \\*.XSD files are encountered during the packaging with the CAST Delivery Manager Tool.
## Resolved issues

| Internal | Ticket ID | Summary | Impact? |
| -------- | --------- | ------- | ------- |
| TIBCO-461 | 14566 |

%7C In previous releases of the extension, a "TIBCO" project was identified for Java JAR files when packaging with the CAST Delivery Manager Tool. This was incorrect and this behaviour has been changed so that JAR files are not identified as projects during discovery with the CAST Delivery Manager Tool. Therefore after an upgrade to this release of the extension and after running the DMT on unchanged source code, you may find that less projects are identified and therefore analysis results will change. %7C
| TIBCO-462 | 14826 | Tibco Analysis warning:\\[com.castsoftware.tibco\\] exception\\_type = <class 'xml.sax.\\_exceptions.SAXParseException'> Error message |
| --------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------- |

text Error: \\]\\]>
# %7C TIBCO 1.2.1

## Updates

### Log improvements for the TIBCO Preprocessor

- Improvements have been introduced with regard to the log files that are produced during an analysis of TIBCO code with the extension. Specifically, the logs produced by the **TIBCO Preprocessor** have been improved in this release of the extension.

### Predefined CAST Transaction Configuration Center setup file

- Delivered with this extension is a **.TCCSetup** file for use in the CAST Transaction Configuration Center. This file provides predefined Transaction Entry Points.

### CAST Delivery Manger Tool

- The option for extracting embedded Java Source code for TIBCO BusinessWorks 5 has been moved from the "Source Code Management" section to the "Vendor Specific Repository" section.

## Resolved issues

None.
# TIBCO 1.2.0

## Updates

### Support for TIBCO ActiveMatrix BusinessWorks 6

- The TIBCO 1.2.0 extension introduces support for **TIBCO ActiveMatrix BusinessWorks 6**. **TIBCO ActiveMatrix BusinessWorks 6** is not a simple enhancement of BusinessWorks 5 - it should rather be considered as a complete rewrite. The following aspects have been changed in **TIBCO ActiveMatrix BusinessWorks 6**: Architecture, design, development and Administration.
- With TIBCO 1.2.0 you will be able to analyze your **TIBCO ActiveMatrix BusinessWorks 6** application and view its objects. Links to database objects will be also created if your application has this kind of interaction.

### Structural rules

- TIBCO 1.2.0 provides the following new structural rules for **TIBCO ActiveMatrix BusinessWorks 6** and **BusinessWorks 5**:

| Quality Rule ID | Quality Rule name |
| --------------- | ----------------- |
| 1018876 | Avoid unreferenced Process Activities (TIBCO BW) |
| 1018874 | Avoid Activities With Queries on more than 4 Tables (TIBCO BW) |
| 1018872 | Avoid Activities using "Group By" statement (TIBCO BW) |
| 1018870 | Avoid Activities using "UNION" instead of "Union all" (TIBCO BW) |
| 1018868 | Avoid JMS Synchronous Activities (TIBCO BW) |
| 1018866 | Avoid Activities with "SELECT \\*" queries (TIBCO BW) |
| 11018864 | Avoid JDBC Connections having password type as string (TIBCO BW) |
| 1018862 | JDBC connection must use Global variable for username and password parametrization of database url (TIBCO BW) |
| 1018304 | Avoid unreferenced Processes (TIBCO BW) |

- The rules introduced in TIBCO 1.1 have been updated to function correctly with BW6 applications

## Resolved issues

The following table lists all bugs fixed in** TIBCO 1.2.0** and that are not already fixed in the previous released versions:
| R&D ID | Ticket ID | Summary |
| ------ | --------- | ------- |

