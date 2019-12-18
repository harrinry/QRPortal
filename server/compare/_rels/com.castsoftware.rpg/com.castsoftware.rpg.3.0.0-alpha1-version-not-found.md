# RPG 3.0.0-alpha1

## Updates

### Quality Rule changes

#### Bookmarks added

Following QRs now have bookmarks:
| ID | RPG language | Rule name |
| -- | ------------ | --------- |
| 1012026 | CL400 | Do not use MONMSG CPF0000 without EXEC  (CL400) |
| 1012024 | CL400 | Avoid use of OPNQRYF  (CL400) |
| 1012022 | CL400 | Avoid use of *NOMAX  (CL400) |
| 1012020 | CL400 | Avoid use of RCLRSC  (CL400) |
| 1012018 | CL400 | Avoid use of DLYJOB  (CL400) |
| 1012014 | CL400 | Avoid locking object by ALCOBJ command    (CL400) |
| 1012010 | CL400 | MONMSG command must be formated    (CL400) |
| 1009098 | RPG300 | Avoid using plain END statement, use the explained END statement like ENDIF, ENDDO, etc  (RPG300) |
| 1009096 | RPG300 | Better to use QUALIFIED datastructures  (RPG300) |
| 1009090 | RPG300 | Avoid using obsolete "Bit Operations" statements in RPG Programs  (RPG300) |
| 1009072 | RPG300 | Avoid using dynamic SQL (EXECUTE IMMEDIATE)  (RPG300) |
| 1009070 | RPG300 | Avoid using NOT IN  (RPG300) |
| 1009068 | RPG300 | Avoid using NOT EXISTS  (RPG300) |
| 1009066 | RPG300 | Avoid Programs with too many WHERE Clauses  (RPG300) |
| 1009062 | RPG300 | Avoid Programs with Subqueries  (RPG300) |
| 1009060 | RPG300 | Avoid Programs with SELECT * statement  (RPG300) |
| 1009058 | RPG300 | Avoid Programs With Queries using GROUP BY  (RPG300) |
| 1009056 | RPG300 | Avoid Programs With Queries on more than 4 Tables  (RPG300) |
| 1009054 | RPG300 | Avoid Programs with COUNT(*) statement  (RPG300) |
| 1009034 | RPG300 | Avoid Subroutines with nested if Statements  (RPG300) |
| 1008108 | RPG400 | Avoid using GOTO statement in RPG Programs  (RPG400) |
| 1008106 | RPG400 | Avoid obsolete L-spec  (RPG400) |
| 1008104 | RPG400 | Avoid obsolete E-spec  (RPG400) |
| 1008102 | RPG400 | Avoid using I-spec (RPG-IV only)  (RPG400) |
| 1008100 | RPG400 | Avoid using O-spec; use Printer Files instead  (RPG400) |
| 1008098 | RPG400 | Avoid using plain END statement, use the explained END statement like ENDIF, ENDDO, etc  (RPG400) |
| 1008096 | RPG400 | Better to use QUALIFIED data structures  (RPG400) |
| 1008092 | RPG400 | Avoid using obsolete "Call Operations" statements in RPG Programs (RPG-IV only)  (RPG400) |
| 1008090 | RPG400 | Avoid using obsolete "Bit Operations" statements in RPG Programs  (RPG400) |
| 1008088 | RPG400 | Avoid using obsolete "Definition/Allocation/Array Operations" statements in RPG Programs (RPG-IV only)  (RPG400) |
| 1008086 | RPG400 | Avoid using obsolete "Date Operations" statements in RPG Programs (RPG-IV only)  (RPG400) |
| 1008084 | RPG400 | Avoid using obsolete "Conditional Operations" statements in RPG Subroutines (RPG-IV only)  (RPG400) |
| 1008082 | RPG400 | Avoid using obsolete "Assignment Operations" statements in RPG Programs (RPG-IV only)  (RPG400) |
| 1008080 | RPG400 | Avoid using obsolete "String Operations" statements in RPG Programs (RPG-IV only)  (RPG400) |
| 1008078 | RPG400 | Avoid using obsolete "Arithmetic Operations" Statement in RPG Programs (RPG-IV only)  (RPG400) |
| 1008072 | RPG400 | Avoid using dynamic SQL (EXECUTE IMMEDIATE)  (RPG400) |
| 1008070 | RPG400 | Avoid using NOT IN  (RPG400) |
| 1008068 | RPG400 | Avoid using NOT EXISTS  (RPG400) |
| 1008066 | RPG400 | Avoid Programs with too many WHERE Clauses  (RPG300) |
| 1008062 | RPG400 | Avoid Programs with Subqueries  (RPG400) |
| 1008060 | RPG400 | Avoid Programs with SELECT * statement  (RPG400) |
| 1008058 | RPG400 | Avoid Programs With Queries using GROUP BY  (RPG400) |
| 1008056 | RPG400 | Avoid Programs With Queries on more than 4 Tables  (RPG400) |
| 1008054 | RPG400 | Avoid Programs with COUNT(*) statement  (RPG400) |
| 1008034 | RPG400 | Avoid Subroutines with nested IF  statements  (RPG400) |

#### Violation granularity

All the violations for QRs under the heading "Bookmarks For QRs" will have their violations reported to nearest RPG artifact instead of top level artifact as it was till version before as detailed below:
#### RPG400

- RPG400 Subroutine FreeFormat
- RPG400 Procedure
- RPG400 Procedure FreeFormat
- RPG400 Program
- RPG400 MainSubroutine
- RPG400 Subroutine
- RPG400 Procedure Prototype
- RPG400 Copy Member

#### RPG300

- RPG300 Program
- RPG300 MainSubroutine
- RPG300 Subroutine
- RPG300 Copy Member

#### CL400

- CL400 Program
- CL400 Subroutine

#### Deleted QRs

Following QRs have been removed and their results will no longer be available.
| QR ID | Title | Language | Reason |
| ----- | ------ | -------- | ------ |
| 1008036 | Avoid Programs with High RAW SQL Complexity (RPG400) | RPG400 | Results of these QRs are available in QR "Avoid Programs With Queries on more than 4 Tables  (RPG400)" (1008056) |
| 1008064 | Avoid Programs with too many FROM Clauses (RPG400) | RPG400 | - |
| 1009064 | Avoid Programs with too many FROM Clauses  (RPG300) | RPG300 | Results of these QRs are available in QR "Avoid Programs With Queries on more than 4 Tables (RPG300)" (1009056) |

## Resolved issues

The following table lists the bugs fixed in RPG 3.0.0-alpha.
