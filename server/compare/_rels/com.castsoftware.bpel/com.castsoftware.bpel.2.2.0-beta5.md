# 2.2.0-beta5

| Internal ID | Call ID | Summary |
| ----------- | ------- | ------- |
| BPEL-26 |  | Regression: many warnings reporting "problem encountered while processing wsdl files". |
| BPEL-27 |  | BPEL Invoke objects with 'null' operation don't have any functional interest (in real code they are used as a wrapping of Java code snippets). Thus we omit creation of these particular objects. |
| BPEL-28 |  | Creation of missing Invoke objects when nested inside other invokes. |
| BPEL-30 | - | Correctly handle empty java code fragments (avoid errors at application-level). |

