# 1.1.0-funcrel

## Updates

- Modified the quality rule 'Avoid using risky cryptographic hash (JEE)' to check input ''MD5/SHA1 from .properties files. There is no impact on rule results.
- Improvement in scope of implementation:

*   Accepting the parameters
*   Reading the input from the Properties file only
*   Covered Algorithms
*   Bounce Castle
*   JCE
*   MD5
*   SHA1
## Resolved issues

Below table lists the internal and customer bugs fixed in the 1.1.0-funcrel release.
| Internal ID | Call ID | Summary |
| ----------- | ------- | ------- |
| JEEQRS-70 | 16584 | Permanent Fix - Extension com.castsoftware.jeerules has encountered an issue - version 1.1.0 beta1 |
| JEEQRS-73 | 16586 | Permanent Fix - |
| JEEQRS-72 | - | False - on Avoid using DocumentBuilder without restriction of XML External Entity Reference (XXE) |
| JEEQRS-74 | - | Deactivated. |

