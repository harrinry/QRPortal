# 1.1.1-funcrel

## Updates

### DOTNET-651

Metrics are no longer calculated for generated objects, as such, analysis results may be impacted.
## Resolved issues

| Internal ID | Call ID | Description | Impact? |
| ----------- | ------- | ----------- | ------- |
| DOTNET-568 | 14692 | Asmx files are not saved in some cases | As such, analysis results may be impacted. |
| DOTNET-629 | 15751 | FALSE VIOLATION FOR RULE- Declare as static all methods not using instance members. | After upgrading to 1.1.1, no violations will be reported in interfaces. As such, analysis results may be impacted. |
| DOTNET-635 | - | Wrong line of code count | After upgrading to 1.1.1, the line of code count will be correct. |
| DOTNET-645 | - | NullReferenceException related to managment of 'dynamic' type | After upgrading to 1.1.1, the NullReferenceException crash will not occur. |
| DOTNET-647 | 13903 | Permanent Fix: "GUID duplicate found : CAST_DotNet_SOAP_Proxy" | After upgrading to 1.1.1, the warning will not occur. |

