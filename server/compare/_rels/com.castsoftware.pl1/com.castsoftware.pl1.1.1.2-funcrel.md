# 1.1.2-funcrel

| Internal ID | Call ID | Summary | Impact |
| ----------- | ------- | ------- | ------ |
| PL-339 | 17023 | Permanent Fix - Error when doing manager delivery/add version etc - PLI discoverer - Invalid Model | Upgrade from PL1 1.0.6 is now works correctly |
| PL-349 | 18012 | Violations for PL1 source are not detected: Rule ID : 1001104 : Avoid PLI Main procedures using variables with ALLOCATE and without FREE (PL1) | Missing violations for rule "1001104 : Avoid PLI Main procedures using variables with ALLOCATE and without FREE (PL1)" are now detected correctly for PL1 Main procedure. |

---
## Updates

### PL-327 - Support for CICS error handling

PL1 now parses code CICS Error handling. This may result in a difference in violations for:
- Avoid Main Procedures not having an ON ERROR clause (PL1)
- Avoid unreferenced PLI Procedures & Functions (PL1)

## Resolved issues

| Internal ID | Call ID | Summary | Impact |
| ----------- | ------- | ------- | ------ |
| PL-323 | 14901 | A condition existed in the search algorithm which would create enormous amount of links that would cause snapshot to get stuck. This is now been corrected. | Snapshot completes in a reasonable time. |
| PL-332 | \\- | A correction has been made to have call links to functions without parameters. | This may result in difference in results for QR "Avoid unreferenced functions (PL1)". |
| PL-331 | \\- | PL1 main procedures are now detected even with spaces in statement. |
| PL-328 | \\- |

%7C
