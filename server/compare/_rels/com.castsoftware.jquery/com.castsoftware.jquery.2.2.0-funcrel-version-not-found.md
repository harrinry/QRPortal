# 2.2.0-funcrel

## Updates

### APLJQ-128 - Remove two rules

- Implement success and error or complete callbacks when using jquery web service call before jQuery 3.0 - 1020304
- Always implement done, fail and/or always callbacks for $.ajax calls when using jQuery 3.0 (and latest)" - 1020326

### APLJQ-129 - Add a new rule

- Always implement the success/error/complete or done/fail/always callbacks when using jQuery ajax call - 1020340 (this rule replaces the two removed rules)

### APLJQ-130 \\- Add a new rule

- Avoid empty jQuery ajax error/fail blocks - 1020342

### Other

