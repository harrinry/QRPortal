# 1.1.2-funcrel

## Resolved issues

| R&D ID | Ticket ID | Summary |
| ------ | --------- | ------- |
| FLEX-165 | 15961 | Flex warning- UA Plugin: No property (adobe.ac.pmd.rules.binding.TooLongBindingExpression) found in meta model |
| --- | --- | --- |
| FLEX-139 | 15466 | FLEX Warning : UA Plugin: No property found in metamodel |
| --- | --- | --- |
| FLEX-140 | 15464 | QR - Avoid type not found within analysis scope (Flex) should be updated |
| --- | --- | --- |

---
### Improved analysis support

Analysis support has been been improved for certain Flex objects:
- getter/setter/functions
- member variables
- classes

Therefore after an upgrade to this version of the extension and the generation of a post-upgrade consistency snapshot, analysis results may be impacted: there may be an increase in the number of objects identified during the analysis and as a consequence, there may be impacts with regard to the violations detected for these Flex objects.
Related issues
- FLEX-162 - Improved detection of gettter\\\\setter\\\\functions
- FLEX-163 - Improved detection of member variables
- FlEX-164 - Improved detection of Flex classes

### Reduced number of "UA Plugin: No Property found…" warnings

Changes have been made to reduce the warnings of type "**UA Plugin: No Property found…**". These changes will result in the following two impacts after an upgrade to this version of the extension and the generation of a post-upgrade consistency snapshot:
- Some of the Flex rules may have new violations
- The following rules will show all violations removed and then added back again because the violation object type has changed:

*   1003198: Avoid MXML component with more than one entry point (Flex)
*   1003200: Avoid MXML component with more than two entry points (Flex)
### Flex Rules Updates

The documentation of all Flex rules has been updated. As part of the update, rule titles have been updated as shown in the table below:
| ID | Old Title | New Title |
| -- | --------- | --------- |
| 1003010 | Avoid class that imports an internal class from another function area (Flex) | Avoid class that imports an internal class from another functional area (Flex) |
| 1003016 | Avoid long switch case (Flex) | Avoid long cases in switch (Flex) |
| 1003020 | Avoid empty method (Flex) | Avoid empty overridden method (Flex) |
| 1003024 | Avoid empty used private method (Flex) | Avoid empty private method (Flex) |
| 1003026 | Avoid too complex methods. (Flex) | Avoid too complex methods (Flex) |
| 1003036 | Avoid unused private attribute (Flex) | Avoid unused private field (Flex) |
| 1003038 | Avoid Cairngorm event name not containing the function area name before the actual event name (Flex) | Cairngorm: Avoid Cairngorm event name without functional area (Flex) |
| 1003040 | Avoid Event name not explicitly set (Flex) | Avoid Event name not set explicitly (Flex) |
| 1003044 | Avoid too short field name (Flex) | Avoid field with name too short (Flex) |
| 1003046 | Avoid too short variable name (Flex) | Avoid variable with name too short (Flex) |
| 1003056 | Avoid class name not starting by a majuscule character (Flex) | Avoid class name that does not start with capital letter (Flex) |
| 1003058 | Avoid field incorrectly named. (Flex) | Avoid fields with names that can reduce code readability (Flex) |
| 1003060 | Avoid variable incorrectly named. (Flex) | Avoid variables with names that can reduce code readability (Flex) |
| 1003066 | Avoid logger not correctly formatted (Flex) | Avoid incorrectly formatted logger (Flex) |
| 1003074 | Avoid modelLocator that is Bindable at a class level (Flex) | Cairngorm: Avoid modelLocator that is Bindable at a class level (Flex) |
| 1003080 | Avoid control statement in Constructor (must be as lightweight as possible) (Flex) | Avoid complex constructor (Flex) |
| 1003084 | Avoid calls to the StyleManager that do not pass FALSE as the second parameter (Flex) | Avoid recursive StyleManager call (Flex) |
| 1003096 | Avoid using public static fields (Flex) | Avoid non-const public static fields (Flex) |
| 1003100 | Avoid protected accessors in a final class (Flex) | Avoid protected fields in final class (Flex) |
| 1003110 | Avoid function that are too long (Flex) | Avoid functions that are too long (Flex) |
| 1003116 | Avoid class (in script) with too many fields (Flex) | Avoid Flex Script with too many fields (Flex) |
| 1003120 | Avoid ModelLocator not only accessible from the main application file (Flex) | Cairngorm: Avoid ModelLocator not only accessible from the main application file (Flex) |
| 1003122 | Avoid FrontController that adds all its commands within the Controller constructor (Flex) | Cairngorm: Avoid FrontController that adds all its commands within the Controller constructor (Flex) |
| 1003126 | Avoid method with more than one exit point (Flex) | Avoid more than one return path (Flex) |
| 1003128 | Avoid using the with keyword (Flex) | Avoid use of with statement (Flex) |
| 1003132 | Avoid switch statement with too few branches (Flex) | Avoid switch statement with less than 3 cases (Flex) |
| 1003134 | Avoid identical switch cases (Flex) | Avoid identical cases in switch (Flex) |
| 1003136 | Avoid test that does not contain at least one assertion (Flex) | Avoid unit test that does not contain at least one assertion (Flex) |
| 1003138 | Avoid BindingUtils class that uses hard coded strings (Flex) | Avoid BindingUtils class (Flex) |
| 1003140 | Avoid ChangeWatcher class that uses hard coded strings to specify the attribute name, to listen to. Prefer listening to events or setters (Flex) | Avoid use of ChangeWatcher class (Flex) |
| 1003142 | Avoid CairngormEventDispatcher called explicitly (Flex) | Cairngorm: Avoid CairngormEventDispatcher called explicitly (Flex) |
| 1003144 | Avoid more than one reference of ModelLocator per class (Flex) | Cairngorm: Avoid more than one reference of ModelLocator per class (Flex) |
| 1003148 | Avoid clone event not overriden in a custom event (Flex) | Avoid clone method not overridden in a custom event (Flex) |
| 1003150 | Avoid event dispatched in a constructor (Flex) | Avoid event dispatched from a constructor (Flex) |
| 1003152 | Avoid DispatchEvent function not dispatching constant strings (Flex) | Avoid dispatching events using hardcoded strings (Flex) |
| 1003154 | Avoid addEventListener containing hard coded strings (Flex) | Avoid listening to events using hard coded strings (Flex) |
| 1003156 | Avoid type not found within analysis scope (Flex) | Avoid partial source code delivery of application (Flex) |
| 1003158 | Avoid unspecified event type (Flex) | Avoid event without type specified (Flex) |
| 1003160 | Avoid test containing a hard coded boolean value. (Flex) | Avoid conditions with hardcoded boolean values (Flex) |
| 1003164 | Avoid using Object class in fields (Flex) | Avoid dynamic (Object) type fields (Flex) |
| 1003166 | Avoid using Object class in variables (Flex) | Avoid dynamic (Object) type variables (Flex) |
| 1003170 | Avoid using Dictionary class (Flex) | DELETED: Avoid using Dictionary class (Flex) |
| 1003176 | Avoid ArrayElementType metadata not specified for the array-type field (Flex) | Avoid array-type field without ArrayElementType metadata (Flex) |
| 1003178 | Avoid incorrect signature of the message interceptor. (Flex) | Avoid incorrect message interceptor signature (Flex) |
| 1003180 | Avoid packages with misplaced metadata (Flex) | Avoid packages having artifacts with misplaced metadata (Flex) |
| 1003182 | Avoid classes with misplaced metadata (Flex) | Avoid classes having artifacts with misplaced metadata (Flex) |
| 1003184 | Avoid type metadata argument redundant with the handler argument type (Flex) | Avoid redundant type metadata argument for handler type (Flex) |
| 1003186 | Avoid method metadata argument redundant with the handler name (Flex) | Avoid redundant method metadata argument for handler (Flex) |
| 1003188 | Avoid packages with unknown metadata attribute (Flex) | Avoid packages having artifacts with unknown metadata attribute (Flex) |
| 1003190 | Avoid classes with unknown metadata attribute (Flex) | Avoid classes having artifacts with unknown metadata attribute (Flex) |
| 1003192 | Avoid globally bindable classes. (Flex) | Avoid globally bindable classes (Flex) |
| 1003194 | Avoid constructor with a return type (Flex) | Avoid constructor with void return type specification (Flex) |
| 1003196 | Avoid switch statement without a default statement (Flex) | Avoid switch statement without a default case (Flex) |
| 1003198 | Avoid MXML component with more than 1 public variable (Flex) | Avoid MXML component with more than one entry point (Flex) |
| 1003200 | Avoid MXML component with more than 2 public variables (Flex) | Avoid MXML component with more than two entry points (Flex) |
| 1003204 | Avoid too long script block (Flex) | Avoid script block that are too long (Flex) |

