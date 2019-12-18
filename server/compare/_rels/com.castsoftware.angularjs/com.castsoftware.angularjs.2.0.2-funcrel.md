# 2.0.2-funcrel

## Resolved issues

- New fullnames
- In case of "$resource" calls, too many services were created, now, only explicit services (services with an explicit name) and implicit services which are really called from code are created.

| Internal ID | Call ID | Summary |
| ----------- | ------- | ------- |
| HTMLVJS-479 | 16850 | New HTML5/JavaScript extension is inserting meaningless information into the object fullname. |

