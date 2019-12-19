# 1.1.0-beta1

## New features

### Support for Universal Windows Platform (UWP)

The .NET Analyzer 1.1.x is now capable of analyzing **Universal Windows Platform (UWP)** projects, in addition to all existing project support. Discoverers embedded in the CAST Delivery Manager Tool (with CAST AIP ≥ 8.3.5) will detect Universal Windows Platform projects.
## Resolved issues

| R&D ID | Ticket ID | Summary | Impact? |
| ------ | --------- | ------- | ------- |
| DOTNET-544 | 14332 | Analysis Log warning "GUID duplicate found : CAST\\_DotNet\\_SOAP\\_Server " |

| DOTNET-547 | 14533 | False violation - Avoid Unreferenced Methods | A bug has been discovered which has meant that the rule "Avoid Unreferenced Methods - 7908" returns false positives. This bug is now fixed, therefore, after an upgrade to this release and the generation of a post-upgrade consistency snapshot on the same source code, results may differ: reduced number of violations and improved accuracy. |
| ---------- | ----- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

---
## New features

### Support for ASP.NET Core

The .NET Analyzer 1.1.x is now capable of analyzing code that uses **ASP.NET Core v 2.x**.
### Support for .NET Core 1.x

The .NET Analyzer 1.1.x is now capable of analyzing code that uses **ASP.NET Core v 1.x **(in addition to 2.x that was already supported).
## Resolved issues

| R&D ID | Ticket ID | Summary |
| ------ | --------- | ------- |
| DOTNET-528 | \\- | Analysis log must show warning of the 4.71 framework as as the prerequisite |

- Client/Server links for the ADO.NET technology are now resolved correctly.
- Silverlight projects are now taken into account properly.

