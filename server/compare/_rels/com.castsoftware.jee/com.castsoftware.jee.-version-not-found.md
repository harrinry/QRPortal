**Summary:** This document provides information about changes and new features introduced in this release.
# 1.2.6-funcrel

## Improvements

### **Rules improvements**

| Rule ID | Rule Name | Description |
| ------- | --------- | ----------- |
| [2248](https://technologies.castsoftware.com/rules?s=2248%7Cqualityrules%7C2248) | Avoid Web Server pages having a very low Comment/Code ratio | False violations reported on almost all jsp pages |
| [4602](https://technologies.castsoftware.com/rules?s=4602%7Cqualityrules%7C4602) | Avoid using Fields (non static final) from other classes | False violations reported on fields in inner classes but used in outer classes |
| [7202](https://technologies.castsoftware.com/rules?s=7202%7Cqualityrules%7C7202) | Check usage of '==' and '\!=' on objects | False violations reported when equal method is overrided |
| [7504](https://technologies.castsoftware.com/rules?s=7504%7Cqualityrules%7C7504) | Persistent classes should Implement hashCode() and equals() | False violations reported in case of use of Lombok annotations @Data |
| [7730](https://technologies.castsoftware.com/rules?s=7730%7Cqualityrules%7C7730) | Use declarative transaction | the transaction type is declared as 'container' |

### Performance improvements

- For moderate to large applications (having roughly more than 1000 Jars and/or 1000 XML configuration files), both JEE Analyzer's memory usage and XML configuration file/Jar file processing has been improved.

### Links improvements

- Access Exec links are created between Java lambda expression and java methods.

## Resolved issues

| Ticket ID | Description |
| --------- | ----------- |
| 12676 | False violation on metric "Use declarative transaction" |
| 17868 | Performance issue while resolving parametrization link |
| 15678 | False positive for QR- Avoid Web Server pages having a very low Comment/Code ratio |
| 14949 | Cannot resolve 'rs' as package or type in package 'javax.ws' from package |
| 18034 | Missing links between Java lambda expression and Java method |
| 19507 | False positive for rule "Persistent classes should Implement hashCode() and equals()" in case of use of Lombok annotations - @Data |
| 19558 | False positive in quality rule "Check usage of '==' and '\!=' on objects" |

# 1.2.5-funcrel

**1.2.5-funcrel must not be used. This is because of missing java classes and eDirectories that causes invalid new violations for rules  Avoid action mappings validator turned off and
Enable Struts Validator plugin**
## New Support

### Support of Spring 5

Support for Spring framework version 5.x is added. JEE Analyzer now supports reactive programming and functional programming (lambdas) in Spring Framework.
## Improvements

### **Rules improvements**

| Rule ID | Rule Name | Description |
| ------- | --------- | ----------- |
| [4602](https://technologies.castsoftware.com/rules?s=4602%7Cqualityrules%7C4602) | Avoid using Fields (non static final) from other classes | False violations reported in jsp pages |
| [7504](https://technologies.castsoftware.com/rules?s=7504%7Cqualityrules%7C7504) | Persistent classes should Implement hashCode() and equals() | False violations reported in case of use of Lombok annotations |
| [8104](https://technologies.castsoftware.com/rules?s=8104%7Cqualityrules%7C8104) | Close database resources ASAP | False violations reported when close is in catch and finally clause of a try statement |

### Performance improvements

For moderate to large applications, JEE analysis duration has been reduced approximately by 38%.
### Transaction improvements

Standard Entry Point rule is kept for "JSF Input Fields" only when type of parent object is neither JSP nor XHTML.
## Resolved issues

| Ticket ID | Description |
| --------- | ----------- |
| 16842 | JSF Input Field is generating lot of empty transactions |
| 17051 | Warnings seen for Java Analysis which doesn't have anything apart from '-' |
| 16331 | Remove the log message regarding jsp:root |
| 16499 | JEE016 - Unable to resolve custom tag attribute -> better parsing or remove the log |
| 8596, 12879 | Lombok Annotation Usage : Throwing False Positive for Rule - Persistent classes should Implement hashCode() and equals() |
| 15596 | JEE088: The uri '`<Uri>`' could not be resolved within the file web.xml or among the jar files deployed with |
| 14943 | Warning : The attribute 'readOnly' for the tag 'input' is not defined in the TLD |
| 15828 | No taglib declaration found that uses 'c' as prefix |
| 15828 | Warning MODULMSG ; Job execution JEE065: Unable to process included file |
| 14943 | JEE012: Duplicate tag `<Tag>` found in library '`<Library>`'. |
| 15596 | http://www.springmodules.org/tags/commons-validator |
| 15422 | JEE010: Unable to resolve EL Function 'fn:length' `<Path>`\\webapp |
| 14242, 15827 | Unable to resolve URL warning |
| 16524 | Analysis log warning "JEE072 Custom TG "html" not found in tag library" |
| 17825 | All the violations coming up for Close database resources ASAP are false +ve |
| 17368 | PORT AIPCORE-22 from 8.2.x to 1.2.x - Avoid using Fields (non static final) from other Classes- False Violation |
| 18551 | No objects named webMethod and webService as JAVA ANNOTATION TYPE are being analysed in 8.3.12 |
| 17706 | Wrong & Missing links due to the limitation on duplicate classes |
| 17574 | Link not correctly created between two java methods of same analysis unit |
| 17038, 17337 | Classes from rt.jar Env Profile are not analyzed (unresolved references coming from rt.jar when it is used in the context of rt.jar.header.xml) |
| 18234 | Various Syntax Error Warning seen in Java Analysis Log resulting in files not analyzed |
| 18904 | Java Analysis crashed with warning Unknown Exception |
| 18808 | PORT - Java analysis warning: Exception: EXCEPTION_ACCESS_VIOLATION |
| 15334 | Warning when analyzing JSP files: JEE055: 'jsp:useBean action', 'type attribute' : invalid java type name 'java.util.HashMap[]' |
| 16645 | Issue occurred while computing URL path |
| 16799 | Security score dropped post migration due to new violations in rules |

# 1.2.4-funcrel

**1.2.4-funcrel is no longer available and must not be used. This is because of an issue with the new environment profile for Spring5, which caused an error while upgrading the extension.**
# 1.2.3-funcrel

## Improvements

### **Rules improvements**

| Rule ID | Rule Name | Description |
| ------- | --------- | ----------- |
| [7706](https://technologies.castsoftware.com/rules?s=7706%7Cqualityrules%7C7706) | Avoid table and column names that are too long | Fixed wrong bookmarks on violations |
| [7714](https://technologies.castsoftware.com/rules?s=7714%7Cqualityrules%7C7714) | Do not use auto-wiring | Fixed missing violations and false positives when interface defining autowired fields are not spring beans |
| [8214](https://technologies.castsoftware.com/rules?s=8214%7Cqualityrules%7C8214) | Expired or Released Resource should not be used | Remove reference to CWE-672 |

### Transaction improvements

Standard End Point rule Java - Java.io enhanced to take into account Inherit links in addition to Access Exec links
## Resolved issues

| Ticket ID | Description |
| --------- | ----------- |
| 15488 | Standard End Point - Java - Java.io needs to be updated |
| 14506 | Incorrect violation for the rule- Avoid table and column names that are too long (portability) |
| - | QR "Do not use auto-wiring" is not displayed in the AED dashboard with JEE 1.0.15 extension |
| 15188, 15258 | Java Analysis log warning "Syntax not recognized" for package org.omg.; |
| 17665 | Analysis is failing with "Log the exception information" warning in the analysis log |
| 17931 | Analysis failed during "Resolving parametrization links" with the warning: Log the exception information: Unknown Exception... |
| 17758 | Java Analysis failing with fatal Error when analyzing Open source JDK |

# 1.2.2-funcrel

## Improvements

### **PostgreSQL connectivity**

A change has been implemented to introduce a connectivity layer compatible with PostgreSQL 10 and 11.
### Transaction improvements

Standard Entry Point rule Java - org.apache.camel modified to keep only Java classses as entry points and not Java methods.
## Resolved issues

| Internal ID | Ticket ID | Description |
| ----------- | --------- | ----------- |
| JFAMILY-1113 | 17062 | Permanent Fix - JEE Analysis- Log the exception information: Unknown Exception. |
| JFAMILY-1124 | 16329 | Port of JFAMILY-1050 from 1.0.x to 1.2.y - Permanent fix: Onboarding : Wrong link between java method and Java Lambda Expression |
| JFAMILY-1141 | 15109 | ort of JFAMILY-924 from 1.0.x to 1.2.y - Permanent fix: Warning : Java-Lexer: Invalid String literal |
| JFAMILY-1150 | 17255 | Port from 1.0.x to 1.2.x - JFAMILY-1137 - Permanent fix: no java files analysed due to exception in Jee analysis |
| JFAMILY-1155 | 16633 | Permanent fix: |
| JFAMILY-1165 | - | ort of JFAMILY-1162 from 1.0.x to 1.2.y - Exception raised in JEE analyzer while creating an AMT object in JSP Scanner |
| JFAMILY-1168 | - | Port from 1.0.x to 1.2.x - JFAMILY-1102 - EXCEPTION_ACCESS_VIOLATION reported as a simple Warning - analysis KO indeed |
| JFAMILY-1180 | 17526 | Port - Java files not getting analyzed after re-run |
| JFAMILY-1181 | 17640 | Log the exception information: Unknown Exception... |

# 1.2.1-funcrel

## Improvements

### **Rules improvements**

| Rule ID | Rule Name | Description |
| ------- | --------- | ----------- |
| [7220](https://technologies.castsoftware.com/rules?s=7220%7Cqualityrules%7C7220) | Avoid Unused Imports | False violations reported when import used in arguments of generic methods |

### Links improvements

Improved resolution of java method references causing false violations on avoid unreferenced method
## Resolved issues

| Ticket ID | Description |
| --------- | ----------- |
| 15914 | Avoid unreferenced methods violation due to missing link |
| 16354 | Analysis in JEE 1.0.13 is getting stuck, same analysis is finishing in 8.2.10 |
| 14832 | Port of JFAMILY-893 from 1.0.x to 1.2.y - False positives in rule Avoid Unused Imports and Missing links |
| 16760 | JEE analysis is stuck, running in infinite loop. |
| 17019,17032, 17046 | JEE analysis is stuck, running in infinite loop. |
| 16251 | Port from 1.0.x to 1.2.x - JFAMILY-1035 - Missing links created from hibernate Entity to oracle function |
| 15255 | Port of JFAMILY-940 from 1.0.x to 1.2.y - "Cannot resolve a Struts Result from strings returned by method" |
| - | CHINESE SUPPORT: Unable to read file when there are chinese characters in the code |

# 1.2.0-funcrel

## Improvements

### **Rules improvements**

| Rule ID | Rule Name | Description |
| ------- | --------- | ----------- |
| [4592](https://technologies.castsoftware.com/rules?s=4592%7Cqualityrules%7C4592) | Avoid hiding static Methods | False violations reported when class is inherting from Java Swing ComponentUI class |
| 7498 | Collection must be the same between getter and setter | False violation reported because of false links to JPA Entity properties |

### Transaction improvements

Standard End Point rule Java - javax.jms added.
## Resolved issues

| Internal ID | Ticket ID | Description | Impact? |
| ----------- | --------- | ----------- | ------- |
| JFAMILY-903 | 14881 | False positive is coming for the rule "Avoid hiding static Methods" for a createUI object | The bug has been fixed, therefore analysis results may be impacted after upgrading to this extension and generating a post-upgrade snapshot on unchanged source code. |
| JFAMILY-925 | 15113 | JEE052: Syntax not recognized: \\n--%> | Removal of syntax warning messages. |
| JFAMILY-946 | 15297 | False positive for QR- Collection must be the same between getter and setter | The bug has been fixed, therefore analysis results may be impacted after upgrading to this extension and generating a post-upgrade snapshot on unchanged source code. |
| JFAMILY-1072 | 16580 | JAVA044: Syntax not recognized warnings | Removal of syntax warning messages. |
| JFAMILY-1032 | 16137 | Standard End Point - Java - javax.jms-supposed to have some objects-not coming-because of incorrect definition | TCC configuration has been fixed, therefore results may be impacted. |

# 1.2.0-beta1

## Resolved issues

| Internal ID | Ticket ID | Description |
| ----------- | --------- | ----------- |
| JFAMILY-803 | 12977 | Wrong book mark shown for the violation Avoid testing floating point numbers |
| JFAMILY-948 | 15330 | %JEE055: Warning MessageJEE001 |
| JFAMILY-983 | 15567 | JEE warning- Log the exception information: Exception: EXCEPTION_ACCESS_VIOLATION |
| JFAMILY-988 | 15496 | TCC shows OutputStram instead of OutputStream |
| JFAMILY-995 | 15578 | run methods are not identified by Standard Entry Point |
| JFAMILY-998 | 15904 | JEE analysis warning -Exception: EXCEPTION_ACCESS_VIOLATION |

# 1.2.0-alpha3

## Resolved issues

| Internal ID | Ticket ID | Description |
| ----------- | --------- | ----------- |
| JFAMILY-952 | 14451 | False positive is coming for rule CWE-672: Expired or Released Resource should not be used |
| JFAMILY-951 | 14661 | False positive is coming for the rule "Close database resources ASAP" |
| JFAMILY-936 | - | False Violation for QR 'Pages should use error handling page' when webdefault.xml is included in analysis |
| JFAMILY-935 | - | J2EE: Unable to process JSP analysis 'CCE_2b80894c' (An exception occurred) |
| JFAMILY-934 | - | Custom C++ and Java environment profiles keep disappearing |
| JFAMILY-930 | - | No longer create EFile for html and js files. |

# 1.2.0-alpha2

## New Support

### Support of Java 10 and Java 11

Partial support has been added for analyzing applications built with **Java 10** and **Java 11**.
## Resolved issues

| Internal ID | Ticket ID | Description |
| ----------- | --------- | ----------- |
| JFAMILY-923 | 15079 | Port from 1.0.x to 1.2.x JFAMILY-838,JFAMILY-754 - Perm fix: |
| JFAMILY-926 | - | Port from 1.0.x to 1.2.x JFAMILY-688: |
| JFAMILY-928 | 13140;13740 | Port from 1.0.x to 1.2.x: JFAMILY-786, JFAMILY-867: |
| JFAMILY-929 | - | Port from 1.0.x to 1.2.x JFAMILY-830: [Regression]: JSP to JSP links are missing in 1.0.7 when comparing 1.0.5 with 1.0.7 |

# 1.2.0-alpha1

## New Support

### Support of Java 9

