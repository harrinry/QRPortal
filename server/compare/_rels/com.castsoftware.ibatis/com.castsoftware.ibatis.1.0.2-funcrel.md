# 1.0.2-funcrel

## Resolved issue

The following issue has been fixed in this release of the extension:
| Internal ID | Call ID | Summary |
| ----------- | ------- | ------- |
| MYBATIS-47 | 16615 | Extension com.castsoftware.ibatis has encountered an issue |

---
## New features

- Support of "Include" tag used in Mapper XML file -
- Support of Dynamic SQL tag used in Mapper XML file -

The tags 'extends\\=' ( Mapper xml extend feature) and 'groupBy=' in Java does not need any special support since they do not have impact on links resolution nor on quality rules results
select \\* from content where id=1 ... \\]\\]>
\\]\\]>
Please note that the "groupBy" attribute has been eliminated in MyBatis 3.  The above example of "groupBy" is from a 2.x sqlMap
## Resolved issues

The following issues have been fixed in this release of the extension:
| Internal ID | Call ID | Summary |
| ----------- | ------- | ------- |
| MYBATIS-44 | 16118 | Missing links between SQL Named Query and Oracle table |

