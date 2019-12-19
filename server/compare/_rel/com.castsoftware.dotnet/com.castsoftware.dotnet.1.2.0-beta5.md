# 1.2.0-beta5

## Updates

### Support added for DbDataAdapter in CAST Transaction Configuration Center

The .TCCSetup file provided in the extension has been configured to recognize End points for DbDataAdapter.
### Dependencies in nupkg files not taken into account

Nuget package may have some dependencies toward other packages (specified in the nupec file). We should take these dependencies into account to include them as dependent packages.
## Resolved Issues

| Internal ID | Call ID | Description | Impact? |
| ----------- | ------- | ----------- | ------- |
| DOTNET-833 | 19400 | Crash in .Net analyzer | After upgrading to 1.2.0-beta5, .Net analyzer does not crash due to duplicate Keys in dictionaries. |
| DOTNET-780 | 18569 | Analysis warning: DOTNET.0020:Error while processing visitor: NumberOfBreaksInForLoops | After upgrading to 1.2.0-beta5, you will not get false warning message related to NumberOfBreaksForLoops |
| DOTNET-825 | 19152 | Receiving false positives reporting dead code for code that is in use | After upgrading to 1.2.0-beta5, you will not get any violations related to the following rules: |
| DOTNET-843 | - | Devirtualization should create a link to all overrides at least | After upgrading to 1.2.0-beta5, .Net analyzer creates a link to all overrides when devirtualization of a call do not find a single link. |

