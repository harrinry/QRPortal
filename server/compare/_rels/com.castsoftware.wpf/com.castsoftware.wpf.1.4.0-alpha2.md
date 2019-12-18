# 1.4.0-alpha2

## New features

- New links are created between WPF controls and C\# command delegate methods in case of command bindings.
- New links are resolved where inheritance is involved: between the command object and the method passed to the command constructor.

## Resolved issues

| Internal ID | Call ID | Description |
| ----------- | ------- | ----------- |
| APLWPF-142 | - | Links from command to delegate methods are not created in base classes for datacontext |

