# 2.0.5

CAST highly recommends that you use ≥ 2.0.6 where possible.
## Resolved issues

| Internal ID | Call ID | Description | Impact |
| ----------- | ------- | ----------- | ------ |
| EXTMVNHTTP-57 | - | Add a limit to the recursive extraction of the Maven dependent artifacts. | The number of artifacts that will be extracted for each recursive loop is limited to 10000. The maximum number of artifacts that will be extracted for all recursive loops is 15000. |

# 2.0.4

CAST highly recommends that you use ≥ 2.0.6 where possible.
## Updates

### EXTMVNHTTP-52 - Extract artifact with a version range

The extractor has been updated to correctly extract artifacts when a given dependency has a version number in a range. For example, given the following code, the extractor should take the best available version:
xml xalan xalan \\[2.4.1,2.4.2\\] \\]\\]>
## Resolved issues

| Internal ID | Call ID | Description | Impact |
| ----------- | ------- | ----------- | ------ |
| EXTMVNHTTP-51 | - | Extracts recursively the Maven dependent artifacts. | No impact on packaging results, however, the number of remediation loops has been reduced to improve performance. |

# 2.0.3

CAST highly recommends that you use ≥ 2.0.6 where possible.
## Resolved issues

| Internal ID | Call ID | Description |
| ----------- | ------- | ----------- |
| EXTMVNHTTP-46 | - | Extracts recursively the POM parent artifacts |
| EXTMVNHTTP-41 | - | WAR files are not picked up by the DMT |

# 2.0.2

## Resolved issues

| Internal ID | Call ID | Description |
| ----------- | ------- | ----------- |
| EXTMVNHTTP-45 | 13793 | The Automatic remediation step in packaging take long time for Maven packaging |
| EXTMVNHTTP-42 | - | Single connection to improve the performance |

# 2.0.1

## Resolved issues

| Internal ID | Call ID | Description |
| ----------- | ------- | ----------- |
| EXTMVNHTTP-40 | - | Maven HTTP Extractor raised a null pointer Exception |

# 2.0.0

## Updates

- The **Classifier** string is now supported for specifying Artifacts (see below).

