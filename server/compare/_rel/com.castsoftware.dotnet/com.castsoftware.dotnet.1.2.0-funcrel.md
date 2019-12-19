# 1.2.0-funcrel

## Resolved Issues

| Internal ID | Call ID | Description | Impact? |
| ----------- | ------- | ----------- | ------- |
| DOTNET-784 | - | "C\# Property" objects are "synthetic", but their children (setters and getters) are internal | Previously, these objects were not considered as "" and therefore violations found in them were included in grade and violation counts. After an upgrade to 1.2.0-funcrel and the generation of a post upgrade consistency snapshot on unchanged source code, results may be impacted due to this change: grades may change due the non-inclusion of violations caused by these objects. In addition, other metrics may change such as the total number of violations and Line of Code count (generated objects do not contribute to these). |
| DOTNET-855 |  | Error while processing visitor: MethodBodyVisitor | The consequence of this change is that previously the generated code for the entire file was lost (skipped due to the error), however, now the generated code is lost only for the specific method mentioned in the warning message. |
| DOTNET-856 |  | Error while processing visitor: LinqToSQLVisitor | After upgrading to 1.2.0-funcrel, warning message is not displayed. |

