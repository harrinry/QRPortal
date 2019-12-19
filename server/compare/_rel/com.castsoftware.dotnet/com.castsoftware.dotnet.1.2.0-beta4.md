# 1.2.0-beta4

## Updates

### Support for Xamarin.Forms in CAST Transaction Configuration Center

The .TCCSetup file provided in the extension has been configured to recognize Entry points for Xamarin.Forms and End points for SQLite. And thus Transaction can now be seen in CAST Transaction Configuration Center.
### Single warning for each unresolved type

A single warning is now displayed in the log file for each unresolved type.
## Resolved Issues

| Internal ID | Call ID | Description | Impact? |
| ----------- | ------- | ----------- | ------- |
| DOTNET-808 | 19086,19229 | Snapshot error - ‘Error while executing Procedure’ | After upgrading to 1.2.0-beta4, no error is displayed. |
| DOTNET-789 | - | There should be fatal error instead Warning message "Analysis failure, could not load a type. The following assemblies could not be loaded as well:" | After upgrading to 1.2.0-beta4, fatal error message is displayed instead of warning message. |
| DOTNET-820 | - | DOTNET.0020:Error while processing visitor: WebServiceVisitor | After upgrading to 1.2.0-beta4, no error while processing "WebServiceVisitor" |
| DOTNET-742 | - | FALSE VIOLATION FOR RULE- "Close the outermost stream ASAP" | Methods returning streams will not be considered for violation. After an upgrade to the current version of the extension and the generation of a post-upgrade consistency snapshot, results may changed for this rule - less false violations providing more accuracy. |
| DOTNET-805 | - | Workaround for "Nupkg files exclusion in Nuget packaging" | Xamarin.Forms libraries were not getting referenced as while packaging Files and folders starting with '.' or ending with '.nupkg' are excluded by default. This problem is solved by shipping the '.nupkg' as '.castpkg'. |
| DOTNET-819 | 17666 | FALSE VIOLATIONS FOR "Avoid improper processing of the execution status of data handling operations" | The current rule is not violated in the below cases: Either empty catch blocks, catch blocks with comments only, or only write to a stream are violating the rule. Appropriate logging or other treatment of exception are said to be valid. |

