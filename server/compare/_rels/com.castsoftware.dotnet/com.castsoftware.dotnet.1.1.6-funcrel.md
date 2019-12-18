# 1.1.6-funcrel

## Resolved issues

Below table lists the issue resolved in 1.1.6-funcrel release.
| Internal ID | Ticket ID | Description | Impact? |
| ----------- | --------- | ----------- | ------- |
| DOTNET-674 | - | Devirtualization should create a link to all overrides at least | Previously, when the real type of a virtual call is unknown the devirtualization would not create any link, however, after upgrade to 1.1.6-funcrel, links will be created towards all overrides. Results of post-upgrade analyses on unchanged source code will be impacted. |
| DOTNET-822 | - | A regression added in 1.1.5-funcrel taints analysis and cause incomplete results | After upgrading to 1.1.6-funcrel, analysis completes without any issue. |

