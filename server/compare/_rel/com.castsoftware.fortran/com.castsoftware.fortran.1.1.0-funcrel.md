# 1.1.0-funcrel

## What to expect after an upgrade

1.1.0-funcrel is a major release and includes many bug fixes to improve the results produced by the extension. Therefore, after upgrading to 1.1.0 and generating a post upgrade consistency snapshot on unchanged source code, analysis results (objects, links, rules) will be impacted as follows:
- Less files are skipped during the analysis, providing greater accuracy.
- More objects are discovered and included in the analysis.
- Object boundaries are discovered more accurately.
- Strings and comments are now detected correctly.

## Resolved Issues

The following table lists all bugs fixed in Fortran 1.1.0-funcrel.
