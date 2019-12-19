# 1.4.0-beta1

## New features

- Object icons used to depict XAML Controls and XAML Custom Controls have been updated.
- XAML Source Files are now considered as the entry point for transactions. This has no impact on analysis results after an upgrade to this new release of the extension, however, CAST Transaction Configuration Center will report different results.

## Resolved issues

| Internal ID | Call ID | Description | Notes |
| ----------- | ------- | ----------- | ----- |
| APLWPF-24 |  | Create Link from WPF Control to Event Handler (Delegate holds a Property instead of Function) | In previous releases of the extension, links were shown between control and event handler if the event handler is a function in code behind a class. No links were shown between control and event handler if the event handler is a property. This issue has now been resolved and links are correctly resolved and displayed. Therefore after an upgrade to this release of the extension and the generation of a new snapshot on unchanged source code, results may differ. |

