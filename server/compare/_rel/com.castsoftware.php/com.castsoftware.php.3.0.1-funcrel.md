# 3.0.1-funcrel

## Resolved Issues

The following table lists the internal bugs fixed in **PHP 3.0.1-funcrel**.
| Internal ID | Ticket ID | Summary | Impacts of the fix |
| ----------- | --------- | ------- | ------------------ |
| PHP-1050 | - | The PHP discoverer identifies a PHP project when only .inc, .yml and .yaml files are present. | The behaviour of the PHP discoverer (embedded in the PHP extension) has now been changed. If the discoverer identifies only ,  or . files in the source code, no PHP project will be discovered and no corresponding Analysis Unit will be created. This fix has been implemented because these file types are also used by other technologies unrelated to PHP and in this situation a PHP project should not be discovered. |
| PHP-1097 | - | Preprocessor gets stuck | The preprocessor will no longer get stuck due to insufficient handling of different line endings. As a consequence of the fix, line endings in all files processed by PHP extension will be normalized to windows. |
| PHP-1091 | - | Update the Description for PHP Rules (Remove the "CWE" word). | The titles of PHP rules that included the word "CWE" have now been updated and the word "CWE" removed. There is no impact to results. |

