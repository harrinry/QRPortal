# 1.0.9

## Updates

### DOTNET-636 - PostgreSQL connectivity

A change has been implemented to introduce a connectivity layer compatible with PostgreSQL 10 and 11.
# 1.0.8

## Resolved issues

| Internal ID | Call ID | Summary | Impact? |
| ----------- | ------- | ------- | ------- |
| DOTNET-634 | 15799 | FALSE VIOLATION FOR RULE- Close the outermost stream ASAP | It fixes false violations for the quality rule. Results may be impacted when re-analysing existing source code with this release of the extension. |

# 1.0.7

Resolved issues
## 

| Internal ID | Call ID | Summary | Impact? |
| ----------- | ------- | ------- | ------- |
| DOTNET-665 | 15662 | Performance issue with devirtualization in .NET analysis |

# .NET analysis should be able to finish at a logical pace in regards to the application size %7C 1.0.6

## Updates

### DOTNET-651

Metrics are no longer calculated for generated objects, as such, analysis results may be impacted.
## Resolved issues

| Internal ID | Call ID | Summary | Impact? |
| ----------- | ------- | ------- | ------- |
| DOTNET-568 | 14692 | Asmx files are not saved in some cases | After upgrading to 1.0.6, .asmx files will be correctly analyzed. As such, analysis results may be impacted. |
| DOTNET-629 | 15751 | Permanent Fix - FALSE VIOLATION FOR RULE- Declare as static all methods not using instance members | In previous releases of the extension, violations of this rule were being incorrectly returned for interfaces. After upgrading to 1.0.6, no violations will be reported in interfaces. As such, analysis results may be impacted. |
| DOTNET-635 | - | Wrong line of code count. | After upgrading to 1.0.6, the line of code count will be correct. |
| DOTNET-647 | 13903 | Permanent Fix: "GUID duplicate found : CAST_DotNet_SOAP_Proxy" | After upgrading to 1.0.6, the warning will not occur. |

# 1.0.5

## Resolved issues

| Internal ID | Call ID | Summary | Impact? |
| ----------- | ------- | ------- | ------- |
| DOTNET-10 | \\- | Duplicate GUID issue while analyzing Application App4. | \\- |
| --- | --- | --- | --- |
| DOTNET-498 | 13496 | CastGenerated objects created from aspx files are marked as internal. | \\- |
| --- | --- | --- | --- |
| DOTNET-533 | 13933 | "The Type or Namespace name "XX" could not be found" warning. | Warning message has been removed. |
| --- | --- | --- | --- |
| DOTNET-592, DOTNET-600 | 14997, 15002 | Missing links from C\# to Database objects through constants. | Links are now generated correctly. Results may be impacted when re-analysing existing source code with this release of the extension. |
| --- | --- | --- | --- |
| DOTNET-624 | 14824 | .NET warning: System.AggregateException: One or more errors occurred. System.NullReferenceException: Object reference not set to an instance of an obj | Warning messages have been removed. |
| --- | --- | --- | --- |

---
## Resolved issues

| Internal ID | Call ID | Summary | Impact? |
| ----------- | ------- | ------- | ------- |
| DOTNET-527 | 13802 | DOTNET.0003:Unknown exception System.AggregateException: One or more errors occurred. ---&gt; System.ArgumentException: An item with the same key has alr | Analysis will now run without failing. |
| --- | --- | --- | --- |
| DOTNET-529 | 4498 | Standard javascript library files are not being excluded from the .Net Analysis | In previous releases of the extension, when using the "Exclude standard Javascript Libraries" option in the CAST Management Studio, violations were still being raised on objects that should have been excluded. This bug has now been fixed and therefore after an upgrade to this release of the extension and the generation of a post upgrade consistency snapshot on unchanged source code, results may be impacted: objects are now correctly excluded and violations are no longer raised on them. |
| --- | --- | --- | --- |
| DOTNET-546 | 14244 | False positives for C\# rule "Avoid using Keywords as names" | In previous releases of the extension, false positive violations were being raised for the C\# rule "Avoid using Keywords as names - 3570". Violations were being incorrectly raised for words that were not keywords. This bug has now been fixed and therefore after an upgrade to this release of the extension and the generation of a post upgrade consistency snapshot on unchanged source code, results may be impacted: less false violations and more accurate results. |
| --- | --- | --- | --- |
| DOTNET-564 | 14533 | False violation - Avoid Unreferenced Methods | In previous releases of the extension, false positive violations were being raised for the rule "Avoid Unreferenced Methods - 7908". This bug has now been fixed and therefore after an upgrade to this release of the extension and the generation of a post upgrade consistency snapshot on unchanged source code, results may be impacted: less false violations and more accurate results. |
| --- | --- | --- | --- |

---
## Resolved issues

| Internal ID | Call ID | Summary | Notes |
| ----------- | ------- | ------- | ----- |
| DOTNET-482 | 13330 | False Positive for rule : "Avoid using Parse for primitive types and used instead TryParse" | See information . |
| DOTNET-488 | 12889 | False positive for rule: "Avoid instantiations inside loops" | See information . |
| DOTNET-489 | 11019 | So many static links are getting created from a .NET method to several other .NET methods with same name, creating a large SCC group. | See information . |
| DOTNET-490 | 12883 | .Net code analysis running slow | \\- |
| DOTNET-492 | 13252 | False violations for "The exception Exception should never been thrown. Always Subclass Exception and throw the subclassed Classes" | See information . |
| DOTNET-497 | \\- | Crash in CastIlCS.dll during the devirtualization | \\- |

---
This section lists changes in results post upgrade from 1.0.2 to 1.0.3:
### 482DOTNET-482 - Avoid using Parse for primitive types and used instead TryParse - 8150

A bug has been discovered that is causing the rule "Avoid using Parse for primitive types and used instead TryParse - 8150" to be incorrectly violated when a Parse is NOT used within a try catch block. This bug has been fixed and therefore after an upgrade to 1.0.3 and the generation of a post upgrade snapshot on the same source code, results may change: there may be less violations for this rule, improving accuracy.
### 488DOTNET-488 - Avoid instantiations inside loops - 7212

A bug has been discovered that is causing the rule "Avoid instantiations inside loops - 7212" to be incorrectly violated where an initializer (for / foreach) is present in a loop. This bug has been fixed and therefore after an upgrade to 1.0.3 and the generation of a post upgrade snapshot on the same source code, results may change: there may be less violations for this rule, improving accuracy.
### 489DOTNET-489 - Links created from .NET method "A" to .NET method "B" which all have the same name

A change has been made in the way the .NET analyzer behaves with regard to links between .NET methods which cannot absolutely be determined. Previously the .NET analyzer would create multiple objects of the same name for one single .NET method "B" and create links from the calling .NET method "A" to those objects. This resulted in multiple links between .NET method "A" and multiple instances of .NET method "B". This behaviour has now been changed: multiple instances of objects will still be created, however, only one link between the methods will be created. Therefore, after an upgrade to 1.0.3 and the generation of a post upgrade snapshot on the same snapshot, results may differ: there may be less links between objects affecting transaction values.
### 492DOTNET-492 - The exception Exception should never been thrown. Always Subclass Exception and throw the subclassed Classes - 7824

A bug has been discovered that is causing the rule "The exception Exception should never been thrown. Always Subclass Exception and throw the subclassed Classes - 7824" to be incorrectly violated. This bug has been fixed and therefore after an upgrade to 1.0.3 and the generation of a post upgrade snapshot on the same source code, results may change: there may be less violations for this rule, improving accuracy.
# 1.0.2

## Resolved issues

| Internal ID | Call ID | Summary |
| ----------- | ------- | ------- |
| DOTNET-466 | \\- | False violation appearing for the QR: "Close the outermost stream ASAP" |
| DOTNET-468 | 12486 | False Violation for QR - Close SQL connection ASAP |

---
This section lists changes in results post upgrade from 1.0. to 1.0.2:
### DOTNET-466 - Close the outermost stream ASAP - 8108

A bug has been discovered that is causing the rule "Close the outermost stream ASAP - 8108" to be incorrectly violated when the stream is closed in a "finally block". This bug has been fixed and therefore after an upgrade to 1.0.2 and the generation of a new snapshot on the same source code, results may change: there may be less violations for this rule, improving accuracy.
### DOTNET-468 - Close SQL connection ASAP - 3612

A bug has been discovered that is causing the rule "Close SQL connection ASAP - 3612" to be incorrectly violated when the SQL connection is correctly closed. This bug has been fixed and therefore after an upgrade to 1.0.2 and the generation of a new snapshot on the same source code, results may change: there may be less violations for this rule, improving accuracy.
# 1.0.1

## Resolved issues

| Internal ID | Call ID | Summary |
| ----------- | ------- | ------- |
| DOTNET-47 |

%7C Duplicate GUID warnings on Dataflow test case %7C
| DOTNET-53 |
| --------- |

# %7C Regression: Warnings : Unable to open file "ExtensionExternalLinksRules.xml" after migration from 8.3.2->8.3.4 %7C 1.0.0

## Changes in results post upgrade

This section lists changes in results post upgrade from CAST AIP 8.3.2 with the embedded .NET Analyzer.
**Externalization of the .NET Analyzer**
The .NET Analyzer has been "externalized" as an official CAST AIP Extension in this release of CAST AIP. This extension is delivered and installed automatically with CAST AIP 8.3.x with new CAST AIP triplets and as part of an . Note that any changes in analysis results that are visible after an upgrade to CAST AIP 8.3.x (and therefore to the externalized .NET Analyzer) are **only** due to improvements and bug fixes introduced in this release of the analyzer and NOT due to the externalization.
## SCRAIP-30874 - Declare as Static all methods not using instance members - 7270

