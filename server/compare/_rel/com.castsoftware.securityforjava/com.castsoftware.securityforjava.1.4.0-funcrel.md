# 1.4.0-funcrel

## Updates

### SECJAVA-54 - Log improvements

The log mechanism has been improved:
- Review of log levels (log levels have been reclassified)
- Log memory more frequently and at regular intervals
- The list of missing imports will be sorted
- Remove some extraneous logs from JDT
- Log memory in castlog before running java2castil

### SECJAVA-62 - URL encoding of project names

Special characters such as **/\\\\:"\\*?<>%7C** used in Analysis Unit names will now be transformed during the analysis to use URL encodings. This will enable the analysis to proceed.
## Resolved issues

