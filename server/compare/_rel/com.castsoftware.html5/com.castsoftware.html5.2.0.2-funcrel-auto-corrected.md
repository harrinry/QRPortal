# 2.0.2-funcrel

## Updates

### HTMLVJS-391 - \\*.jsf and \\*.jsff

\\*.**jsf** and \\*.**jsff** will now automatically be taken into account during the analysis. These files will be analyzed as .jsp files. Therefore, after an upgrade to 2.0.2 and the generation of a post–upgrade snapshot on unchanged source code, results may be impacted if your delivery contains these file types.
### HTMLVJS-458 -  Updates to support IBM EAD4J Jade framework

Updates have been made to support the  framework:
- **\\*.jade** files are now automatically analyzed
- A new object icon has been added to represent **\\*.jade** files:

## Resolved issues

| Internal ID | Ticket ID | Summary |
| ----------- | --------- | ------- |
| HTMLVJS-391 | 15988 | Reference pattern (eFile to Bean) is not working in CAST AIP 8.3.6 |

---
## Updates

- String evaluation in case of 'config' nodejs library. When json files are present in a config directory with data initializations, these files are used for string evaluation when the 'config' library is referred to through "require" statement.

- The following javascript libraries are now skipped automatically:

*   infragistics
*   MicrosoftAjax
*   raphael
*   morris
*   wysihtml5
*   chosen
