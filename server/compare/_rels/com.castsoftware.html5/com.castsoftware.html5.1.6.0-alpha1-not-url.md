New quality rules:
-7776    : Avoid Artifacts with High Fan-In
-7778    : Avoid Artifacts with High Fan-Out
-7782    : Avoid empty finally blocks
-7788    : Avoid empty catch blocks
-7792    : Avoid Classes with a High Number Of Children
-8032    : Avoid using a break statement in FOR loops
-8028    : Avoid missing default in switch statements
-1020058 : Avoid using eval()
-1020060 : Avoid using console.log()
-1020062 : Avoid using non thread-safe Javascript singleton pattern
-1020064 : Avoid Superclass knowing Subclass in Javascript
-1020066 : Avoid using Javascript Function constructor
-1020068 : Avoid return statement in finally block
-1020070 : Avoid hardcoded network resource names in Javascript
-1020072 : Avoid direct access to Database Tables in Javascript
-1020074 : Avoid enabling autocomplete "on" for inputs/forms
-1020074 : Avoid Artifacts with too many parameters

Exclusion from analysis of following files:
-Gruntfile.js (build file)
-*-spec.js (tests files)
-Files containing asyncTest (qunit tests files)