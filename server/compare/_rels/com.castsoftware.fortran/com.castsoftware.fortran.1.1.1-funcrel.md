# 1.1.1-funcrel

## Updates

### Rename extension to Fortran Analyzer

Fortran Extension is now known as Fortran Analyzer.
### Deprecate FortranIfConstruct, FortranSelectCase, FortranDoConstruct

Objects of type FortranIfConstruct, FortranSelectCase, FortranDoConstruct will no longer be created after analysis. Links and metrics belonging to these objects will now belong to their respective container artifacts. Therefore, after upgrade, QR results will change.
## Resolved Issues

The following table lists the bugs fixed in Fortran 1.1.1-funcrel.
| R&D ID | Description | Impact? |
| ------ | ----------- | ------- |
| FORTRAN-34 | Getting many more FORTRAN warnings and not getting any violation in dashboard | The warnings for types FortranIfConstruct, FortranSelectCase, FortranDoConstruct have been removed as these objects are no longer created. |

