# 1.2.0-beta3

## Updates

The MAV2 metric "Length of the longest line" has been removed for .NET related analyses as a consequence it will no longer appear in the object properties list in CAST Enlighten.
## Resolved Issues

| Internal ID | Call ID | Description | Impact? |
| ----------- | ------- | ----------- | ------- |
| DOTNET-779 | - | CASTONCAST: snapshot fails with ERROR: duplicate key value violates unique constraint "dss_objects_pk" | The snapshot failed due to a duplicate checksum for certain objects (when shared projects were present in the sources). This has now been fixed and the snapshot will complete correctly. |
| DOTNET-708 | - | When both the iOS and android and UWP application are present in the same solution not finding the Xamarin reference | Missing links to framework dependencies for Xamarin projects will now be created |
| DOTNET-577 | - | DOTNET.0048:Error while loading XML document | Documentation updated to clarify scenario of an empty configuration file in project |
| DOTNET-709 | - | Not finding the Xamarin reference for the WatchOS App, can find the Xamarin WatchOS reference in web config | Missing links to framework dependencies for Xamarin projects will now be created |
| DOTNET-783 | - | EOF counted as line of code | The EOF is no longer counted as a line of code, therefore a change in the number of lines of code is to be expected after upgrade to this release. |

