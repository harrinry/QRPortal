# 1.1.4-funcrel

## New features

### Support for .NET Core 2.2

The .NET Analyzer is now capable of analyzing code that uses **.NET Core 2.2**.
## Resolved issues

| Internal ID | Ticket ID | Description | Impact? |
| ----------- | --------- | ----------- | ------- |
| DOTNET-718 | 17275 |

%7C After an upgrade to the current version of the extension and the generation of a post-upgrade consistency snapshot, results may changed for this rule - less false violations providing more accuracy. %7C
| DOTNET-723 | 17616 |
| ---------- | ----- |

%7C After an upgrade to the current version of the extension and the generation of a post-upgrade consistency snapshot, the error in the analysis log will no longer be displayed. %7C
| DOTNET-763 | 18245 |
| ---------- | ----- |

"LOC increase post migration"
%7C The line of code count will no longer increase after an upgrade to the current version of the extension and the generation of a post-upgrade consistency snapshot. %7C
| DOTNET-772 | 18360 | Computed LOC is not correct |
| ---------- | ----- | --------------------------- |

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Resolved issues

| Internal ID | Call ID | Description | Impact? |
| ----------- | ------- | ----------- | ------- |
| DOTNET-673 | 16489, 17397 | Perm Fix: False positive for rule 'Avoid using Keywords' for 'C\# Property Set' and 'C\# Property Get' | In previous releases of the extension, false positive violations to the rule "Avoid using Keywords as names - 3570" were returned during the analysis. The false violations were detected in property getter and setters, which are always called "set" and "get" and which appear on the list of keywords causing the violation. This bug has now been fixed (these object types are no excluded from the scope of this rule) and therefore after an upgrade to the current version of the extension and the generation of a post-upgrade consistency snapshot, results may changed for this rule - less false violations providing more accuracy. |
| DOTNET-689 | 16402 | Performance issue when analyzing application | Time required to run an analysis should now be improved. No impact to results. |
| DOTNET-714 | 17197, 17198 | DOTNET.0003: Unknown exception System.ComponentModel.Win32Exception (0x80004005): The filename or extension is too long | After updating to 1.1.3-funcrel, no exception found in the analysis log saying, "The filename or extension is too long". |
| DOTNET-722 | 17509 | PERMANENT FIX- AIP recommends to declare as static methods that cannot be declared as static | In previous releases of the extension, false positive violations to the rule "Declare as Static all methods not using instance members (.NET) - 7270" were returned during the analysis. The false violations were detected in property getter and setters, which cannot be declared static when they are overridden by a class from a base class, or when a class implements them from an interface. This bug has now been fixed and therefore after an upgrade to the current version of the extension and the generation of a post-upgrade consistency snapshot, results may changed for this rule - less false violations providing more accuracy. |

