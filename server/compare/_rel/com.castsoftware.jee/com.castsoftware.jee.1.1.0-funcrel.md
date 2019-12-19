# 1.1.0-funcrel

## Updates

### JFAMILY-756 - Log improvements

Improvements have been made to the analysis log:
- some warnings are now only displayed in debug mode:

*   XML file format not matching any env profile
*   Annotation not managed
*   No parametrization trigger found
- transitions between analysis steps are now clearly defined in the log.

### Rule documentation improvements

The following improvements have been added to the rule documentation:
| Internal ID | Rule ID | Rule Name | Change implemented |
| ----------- | ------- | --------- | ------------------ |
| JFAMILY-708 | 7728 | Avoid thread creation for application running on application server | This rule has been tagged to state that it complies to "ASCRM-RLB-05: Runtime Resource Management Control Element in a Component Built to Run on Application Servers". |
| JFAMILY-725 | 7150 | Favor PreparedStatement or CallableStatement over Statement | Rule description has been improved and enhanced. |
| JFAMILY-726 | 7730 | Use declarative transaction | Rule description has been improved and enhanced. |
| JFAMILY-725 | 7144 | Action Artifacts should not directly use database objects | Action Artifacts should not directly use database objects". |
| JFAMILY-898 | 7146 | JSP pages should only reference Java Objects associated to J2EE Scoped Bean | Description has been updated to better explain the rule. |

## Resolved issues

| Internal ID | Call ID | Description |
| ----------- | ------- | ----------- |
| JFAMILY-719 | - | Link is found "internally escalated" whereas expected normal link |

