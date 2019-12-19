# 3.0.3-funcrel

## Updates

### Handling of PHP Short Tags

As PHP Analyzer uses Universal analyzer, php short tags <? and <?= cannot be handled as is. So, they will be converted to <?php tags with added comment as shown below:
Input code:
phpConfluence \\]\\]>
Output code in LISA folder after pre-processing:
phpConfluence \\]\\]>
### PHPQRWeightchangePHP QR Weight change

Earlier, 'weight of every QR was 5'. With PHP 3.0.3-funcrel release, PHP QR weights have been revised.
QR weight change comes into effect only after CAIP is upgraded.
Follwing table lists the QR IDs, their original name and the current weight.
| QR ID | Rule name | Weight |
| ----- | --------- | ------ |
| 1007002 | Avoid artifacts directly accessing database tables (PHP) | 6 |
| 1007132 | Avoid classes with excessive number of fields (PHP) | 6 |
| 1007144 | Avoid classes with excessive number of weighted methods (PHP) | 8 |
| 1007016 | Avoid artifacts with High Cyclomatic Complexity (PHP) | 7 |
| 1007026 | Use identical type operators rather than EQUAL operators (PHP) | 7 |
| 1007036 | Avoid classes having excessive number of derived classes(PHP) | 7 |
| 1007038 | Avoid classes having excessive number of dependencies (PHP) | 7 |
| 1007046 | Avoid Classes with a High Depth of Inheritance Tree (PHP) | 7 |
| 1007180 | Use file inclusion based on API suitability (PHP) | 8 |
| 1007184 | Avoid using size functions inside loops (PHP) | 7 |
| 1007190 | Avoid using relative path (PHP) | 7 |
| 1007218 | Avoid using $row[xxx] (PHP) | 7 |
| 1007220 | Avoid Select * queries in PHP Section (PHP) | 7 |
| 1007146 | Avoid unconditional IF and ELSEIF statements (PHP) | 7 |
| 1007238 | Avoid having multiple classes defined in a single file - Symfony STD (PHP) | 6 |
| 1007244 | CWE-80: Avoid cross-site scripting - Improper Neutralization of script-related HTML tags in a web page (PHP) | 8 |
| 1007246 | CWE-98: Avoid Remote File Inclusion - Improper Control of Filename for Include/Require Statement in PHP Program (PHP) | 8 |
| 1007252 | CWE-661: Avoid filesystem function calls without sanitizing user input (PHP) | 8 |
| 1007050 | Avoid method invocation in a loop termination expression (PHP) | 7 |
| 1007116 | Avoid Methods with Object Instantiation in loops (PHP) | 7 |
| 1007172 | Avoid having constructors with a return value (PHP) | 8 |
| 1007176 | Avoid using break statement in FOR loops (PHP) | 7 |

### \#PHPCriticalQRsPHP Critical QRs

Following QRs are now marked critical and their thresholds have been changed accordingly.
| QR ID | QR Title | Reason |
| ----- | -------- | ------ |
| 1007024 | Avoid incrementer jumbling in loops (PHP) | This is a rare occurrence but when it does occur, results can be unpredictable. |
| 1007192 | Avoid using PHP short tags (PHP) | PHP Short tags, mainly <? is known problem mainly because it cannot be guaranteed that all the servers would have it enabled. Note, php short echo tag <?= is also a bad practice and considered as violation towards this QR. |
| 1007206 | Avoid using @error suppression (PHP) | Using Error Suppression can cause defects to stay hidden. |
| 1007156 | Avoid using eval expressions (PHP) | Use eval expression is known (security) risk. |
| 1007158 | Avoid using exit and die expressions (PHP) | Using exit or die expressions can terminate program abruptly causing unpredictable behavior. |
| 1007250 | CWE-624: Avoid preg_replace with /e option (PHP) | Using preg_replace with /e can execute malicious code. |

## Resolved Issues

The following table lists the bugs fixed in PHP 3.0.3-funcrel.
| Internal ID | Ticket ID | Summary | Impact/s of the fix |
| ----------- | --------- | ------- | ------------------- |
| PHP-1118 | - | Review PHP QRs weight | PHP QR weights have been revised (Refer: ""). Earlier weights of all QRs were below 5. |
| PHP-1117 | - | Review criticality of PHP QRs | After extension upgrade number of critical violations and application grade will change (Refer: "") |
| PHP-1116 | - | PHP Section objects are not created for php short tags | PHP Section objects for php short tags <? and <?= were not being created. This has now been fixed |
| PHP-879 | - | No violations for "Avoid using PHP short tags (PHP)" | "Avoid using PHP short tags (PHP)" did not have any violations. This has been now fixed. |
| PHP-1114 | - | Missing link from PHP to SQL DB | Links were missing in some cases while dealing with "from" clause of SQL statement. This has now been fixed. |
| PHP-1109 | - | False Positive for PHP rule: 'Avoid using function or method return value that do not have return (PHP)' | As PHP extension uses UA (Universal Analyzer) which has limitation while creating links, violations for following QRs: 1007168 and 1007170 were not reliable. |

