# 1.2.0-beta2

## Updates

### New feature

- Support for .NET Core 2.2: The .NET Analyzer now analyzes the code that uses .NET Core 2.2

### New rule

The following rule has been added in this release - see:  [https://technologies.castsoftware.com/rules?sec=srs\\_dotnet&ref=%7C%7C1.2.0-beta2](https://technologies.castsoftware.com/rules?sec=srs_dotnet&ref=%7C%7C1.2.0-beta2)
| 1027012 |
| ------- |

## Resolved issues

| Internal ID | Call ID | Description | Impact? |
| ----------- | ------- | ----------- | ------- |
| DOTNET-621 | - | Bug in the quality rule "avoid instantiations inside loops" | No false violation message |
| DOTNET-745 | - | Regression: Snapshot failed with ERROR: duplicate key value violates unique constraint "dss_objects_pk" | There were 2 CRCs saved on some objects, now there is only 1 CRC. |
| DOTNET-763 | 18245 | LOC increase post migration | The analyzer was previously including empty lines in the lines of code (LOC) value therefore producing an erroneous value for this metric. This bug has been fixed (blank lines are no longer included in the LOC value) and therefore after an upgrade to the current version of the extension and the generation of a post-upgrade consistency snapshot on unchanged source code, the LOC value will reduce. |

