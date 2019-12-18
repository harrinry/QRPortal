# 1.2.1-funcrel

## Resolved Issues

| Internal ID | Call ID | Description | Impact? |
| ----------- | ------- | ----------- | ------- |
| DOTNET-611 | - | Invalid CASTIL generation for ASP.NET pages | After upgrading, intermediate CastIL code related to web forms (.aspx) and web controls (.ascx) is now generated correctly for the User Security Input. Therefore after an upgrade to this version of the extension and the generation of a post upgrade consistency snapshot, results may change: more User Input Security related violations may be identified. |
| DOTNET-612 | - | Missing devirtualization links when type instantiations are involved | Devirtualization links are now created properly in the context of type instantiations. Therefore after an upgrade to this version of the extension and the generation of a post upgrade consistency snapshot, results may change: more accurate transaction information will be produced. |
| DOTNET-869 | - | Missing type conversion calls for the CastIL generation via Roslyn | Implicit calls to ToString() methods were not generated in CASTIL (for dataflow). Therefore after an upgrade to this version of the extension and the generation of a post upgrade consistency snapshot, results may change: more User Input Security related violations may be identified. |
| DOTNET-887 | - | Violations are missing in AED when compared with 1.0.14 extension | Violations were not reported on Page_Load methods in a web application. Therefore after an upgrade to this version of the extension and the generation of a post upgrade consistency snapshot, results may change: increased number of violations producing greater accuracy. |
| DOTNET-896 | - | Missing dependency toward netstandard.dll facade may cause name resolution errors | Name resolution errors are fixed. |
| DOTNET-897 | - | Resolution errors because of dependencies added twice | Name resolution errors are fixed. |

