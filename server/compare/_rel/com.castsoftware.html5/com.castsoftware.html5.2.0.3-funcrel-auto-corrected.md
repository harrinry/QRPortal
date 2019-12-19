# %7C 2.0.3-funcrel

## Updates

### HTMLVJS-273 - \\*.jspx

**\\*.jspx** will now automatically be taken into account during the analysis. These files will be analyzed as .jsp files. Therefore, after an upgrade to 2.0.3 and the generation of a post–upgrade snapshot on unchanged source code, results may be impacted if your delivery contains these file types.
### HTMLVJS-464 -  Support of file extensions manually added in CAST Management Studio

Any files delivered with these custom extensions will be analyzed as .**html**, **.jsp** or **.js** file depending on the detection made by the analyzer.
### MISC

Minor correction on misleading "file skipped" messages in log file when analyzing typescript files (extension \\*.ts).
## Resolved issues

| Internal ID | Ticket ID | Summary |
| ----------- | --------- | ------- |
| HTMLVJS-472 | 16698 | Minor correction on entry-point definition. |
| HTMLVJS-471 | 16703 | Correction on cyclomatic complexity and length of longest line. Before correction, these metrics were wrong because, for a function including a function, the complexity and length of longer lines of the sub function were added to those of the main function. Therefore results may be impacted after upgrading to this extension release and performing a post upgrade consistency snapshot on unchanged source code. |
| HTMLVJS-462 | 16457 | Minor correction on HTTP Request Service which were not found in jsp files. |

