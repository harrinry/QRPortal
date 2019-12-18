# 1.1.0-beta2

## Resolved issues

| Internal ID | Call ID | Description |
| ----------- | ------- | ----------- |
| DOTNET-591 | - | Unknown exception System.IO.FileLoadException: The given assembly name or codebase was invalid. |
| DOTNET-588 | - | System.UnauthorizedAccessException: Access to the path 'XXX' is denied |
| DOTNET-584 | - | Assembly folders not taken into account in "Referenced Assemblies" in CMS |
| DOTNET-581 | - | Package references should be resolved as project references too |
| DOTNET-572 | - | Warnings "Type 'X' is not defined" because of missing implicit reference to Microsoft.VisualBasic.dll |
| DOTNET-569 | - | Exception System.ArgumentException is raised when a reference is duplicated in a .NET project |

In addition, the following fixes have been ported from CAST AIP 8.2.11 and 8.2.12:
| Internal ID | Call ID | Description | Impact? |
| ----------- | ------- | ----------- | ------- |
| SCRAIP-30145 | 11019 | So many static links are getting created from a .net method to several other .net methods with same name creating a large SCC group | A change has been made in the way the .NET analyzer behaves with regard to links between .NET methods which cannot absolutely be determined. Previously the .NET analyzer would create multiple objects of the same name for one single .NET method "B" and create links from the calling .NET method "A" to those objects. This resulted in multiple links between .NET method "A" and multiple instances of .NET method "B". This behaviour has now been changed: multiple instances of objects will still be created, however, only one link between the methods will be created. Therefore, after an upgrade to this release of the extension and the generation of a post upgrade snapshot, results may differ: there may be less links between objects affecting transaction values. |
| SCRAIP-32270 | - | False Violation for QR - Close SQL connection ASAP | Close SQL connection ASAP |
| SCRAIP-31238 | 12889 | False positive for rule - 'Avoid instantiations inside loops' | 'Avoid instantiations inside loops |
| SCRAIP-30630 | 12883 | .Net code analysis running slow | - |
| SCRAIP-30222 | 10337 | False positive for "avoid unreferenced method" | A bug has been discovered which is causing the Quality Rule "Avoid unreferenced Methods - 7908" to be falsely violated by objects that are called by NET framework objects. These objects should not be part of the scope of this rule. This bug has now been fixed and after an upgrade to this release of the extension, results may differ for this rule - there will be a reduction in false positives. |

