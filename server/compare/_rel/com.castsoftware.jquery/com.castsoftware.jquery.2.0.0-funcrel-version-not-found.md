# 2.0.0-funcrel

## Updates

### APLJQ-93 - New rule added

One new rule has been added, see [https://technologies.castsoftware.com/rules?sec=srs\\_jquery&ref=%7C%7C2.0.0-funcrel](https://technologies.castsoftware.com/rules?sec=srs_jquery&ref=%7C%7C2.0.0-funcrel) for more information:
| 1020330 | Always implement done, fail and/or always callbacks for $.ajax calls when using jQuery 3.0 (and latest) |
| ------- | ------------------------------------------------------------------------------------------------------- |

## Resolved issues

| Internal ID | Call ID | Summary |
| ----------- | ------- | ------- |
| APLJQ-91 | 15054 | FALSE VIOLATION FOR - Implement success and error callbacks when using jquery web service call |

---
## Updates

### APLJQ-90 - New rule added

One new rule has been added:
| 1020326 | Always implement done, fail and/or always callbacks for $.ajax calls when using jQuery 3.0 (and latest) |
| ------- | ------------------------------------------------------------------------------------------------------- |

### APLJQ-89 - Existing rule improvements

One existing rule has been improved:
| 1020326 | Implement success and error callbacks when using jquery web service call |
| ------- | ------------------------------------------------------------------------ |

The rule has been improved as follows:
- The rule title has been changed to "**Implement success and error or complete callbacks when using jquery web service call before jQuery 3.0"**
- The rule title has been changed to reflect the fact that:

*   the rule will now also check that if no success/error callbacks are implemented, a complete callback is not implemented as well
*   the rule does not target jQuery version = 3.0 where these methods are no longer used
## Resolved issues

