# 2.2.1

JEE File Discoverer 2.2.1 has been released as an [LTS](https://doc.castsoftware.com/display/EXTEND/Release+types) (Long Term Support).
## Updates

### DISJFIL-69 - Signing required when using the extension with CAST AIP 8.2.x.

The extension is optimized to work with CAST AIP 8.3.x, which does not require signed MDA plugin files. However, CAST AIP 8.2.x requires signed MDA plugin files and therefore a manual action is now required before the extension is installed, see for more information about this manual action.
## Resolved Issues

| Internal ID | Call ID | Summary | Impact? |
| ----------- | ------- | ------- | --------- |
| DISJFIL-69 | 17245 | User getting an error while trying to package through DMT with extension "JEE file discoverer" version "2.1.0-funcrel" installed with CAST AIP 8.2.7 | User can do packaging without any error with "JEE file discoverer" version "2.2.1-funcrel" installed with CAST AIP 8.2.x. |

