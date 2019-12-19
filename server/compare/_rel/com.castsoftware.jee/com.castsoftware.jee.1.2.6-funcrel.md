# 1.2.6-funcrel

## Updates

### JFAMILY-1412 - False positive on Avoid using Fields (non static final) from other classes

This release fixes false positives on the Quality Rule Avoid using Fields (non static final) from other classes:
- Violations reported on fields in inner classes but used in outer classes
- Violations reported on fields in outer classes but used in outer classes

### Performance improvements

- For moderate to large applications (having roughly more than 1000 Jars and/or 1000 XML configuration files), both JEE Analyzer's memory usage and XML configuration file/Jar file processing has been improved.
- Analysis performance has been greatly improved in this release of the extension via the following tickets: JFAMILY-1392, JFAMILY-1393, JFAMILY-1394, JFAMILY-1401, JFAMILY-1402, JFAMILY-1403, JFAMILY-1404, JFAMILY-1405,        JFAMILY-1406, JFAMILY-1407, and JFAMILY-1441.

## Resolved issues

Below tickets, fixed in the 1.2.6-funcrel release, were ported from JEE 1.0.x to 1.2.x.
| Internal ID | Call ID | Description |
| ----------- | ------- | ----------- |
| JFAMILY-1153 | 12676 | PORT - False violation on metric "Use declarative transaction" |
| JFAMILY-1273 | 17868 | PORT - Permanent Fix - Java analysis, Performance issue while resolving parametrization link |
| JFAMILY-1340 | 15678 | PORT - Perm fix: False positive for QR- Avoid Web Server pages having a very low Comment/Code ratio |
| JFAMILY-1343 | 14949 | PORT - Cannot resolve 'rs' as package or type in package 'javax.ws' from package |
| JFAMILY-1367 | - | PORT - JFAMILY-1322 - EXCEPTION_ACCESS_VIOLATION |
| JFAMILY-1381 | 18034 | PORT - Permanent Fix - Missing links between Java methods |
| JFAMILY-1395 | - | PORT JFAMILY-1391 from 1.0.x to 1.2.x - GPF when analyzed `<App>` on jpa |
| JFAMILY-1423 | 19507 | PORT - Permanent Fix - False positive for rule "Persistent classes should Implement hashCode() and equals()" in case of use of Lombok annotations - @Data |
| JFAMILY-1411 | - | PORT - JFAMILY-1327 - Java Analysis failed with the error "Exception: EXCEPTION_ACCESS_VIOLATION" |
| JFAMILY-1412 | - | False positive on Avoid using Fields (non static final) from other classes |
| JFAMILY-1414 | 19558 | PORT - False positive in quality rule "Check usage of '==' and '\!=' on objects" |

