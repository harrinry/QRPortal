# 1.2.5-funcrel

## Updates

Performance of JEE analyzer has been improved. Sample applications show reduction in JEE analysis duration approximately by 38%.
### JFAMILY-532 - Support of Spring 5

Support for Spring framework version 5.x is added. JEE Analyzer -1.2.5-funcrel now supports reactive programming and functional programming (lambdas) in Spring Framework.
## Resolved issues

Below tickets, fixed in the 1.2.5-funcrel release, were ported from JEE 1.0.x to 1.2.x.
| Internal ID | Call ID | Description |
| ----------- | ------- | ----------- |
| JFAMILY-1097 | 16842 | JSF Input Field is generating lot of empty transactions- Need explanation |
| JFAMILY-1109 | 17051 | Warnings seen for Java Analysis which doesn't have anything apart from '-' |
| JFAMILY-1121 | 16331 | Remove the log message regarding jsp:root |
| JFAMILY-1122 | 16499 | JEE016 - Unable to resolve custom tag attribute -> better parsing or remove the log |
| JFAMILY-1189 | 8596, 12879 | Lombok Annotation Usage : Throwing False Positive for Rule - Persistent classes should Implement hashCode() and equals() |
| JFAMILY-1205 | 15596 | JEE088: The uri '`<Uri>`' could not be resolved within the file web.xml or among the jar files deployed with |
| JFAMILY-1207 | 14943 | Warning : The attribute 'readOnly' for the tag 'input' is not defined in the TLD |
| JFAMILY-1210 | 15828 | No taglib declaration found that uses 'c' as prefix |
| JFAMILY-1211 | 15828 | Warning MODULMSG ; Job execution JEE065: Unable to process included file |
| JFAMILY-1218 | 14943 | JEE012: Duplicate tag `<Tag>` found in library '`<Library>`'. |
| JFAMILY-1220 | 15596 | http://www.springmodules.org/tags/commons-validator |
| JFAMILY-1222 | 15422 | JEE010: Unable to resolve EL Function 'fn:length' `<Path>`\\webapp |
| JFAMILY-1224 | 14242, 15827 | Unable to resolve URL warning |
| JFAMILY-1236 | 16524 | Analysis log warning "JEE072 Custom TG "html" not found in tag library" |
| JFAMILY-1269 | 17825 | All the violations coming up for Close database resources ASAP are false +ve |
| JFAMILY-1275 | 17368 | PORT AIPCORE-22 from 8.2.x to 1.2.x - Avoid using Fields (non static final) from other Classes- False Violation |
| JFAMILY-1287 | 18551 | No objects named webMethod and webService as JAVA ANNOTATION TYPE are being analysed in 8.3.12 |
| JFAMILY-1295 | 17706 | Wrong & Missing links due to the limitation on duplicate classes |
| JFAMILY-1296 | 17574 | Link not correctly created between two java methods of same analysis unit |
| JFAMILY-1297 | 17038, 17337 | Classes from rt.jar Env Profile are not analyzed (unresolved references coming from rt.jar when it is used in the context of rt.jar.header.xml) |
| JFAMILY-1300 | 18234 | Various Syntax Error Warning seen in Java Analysis Log resulting in files not analyzed |
| JFAMILY-1337 | 18904 | Java Analysis crashed with warning Unknown Exception |
| JFAMILY-1342 | 18808 | PORT - Java analysis warning: Exception: EXCEPTION_ACCESS_VIOLATION |
| JFAMILY-1347 | 15334 | Warning when analyzing JSP files: JEE055: 'jsp:useBean action', 'type attribute' : invalid java type name 'java.util.HashMap[]' |
| JFAMILY-1348 | 16645 | Issue occurred while computing URL path |
| JFAMILY-1353 | 16799 | Security score dropped post migration due to new violations in rules |

