# 1.0.0-beta6

It is strongly advised to only use this release (or more recent) of the extension and not any previous releases: in previous releases, using the "run analysis only" option was the only way to ensure links were validated or ignored automatically.
- Bug fix: the validator doesn't update the links status when using the "generate a snapshot" option
- Added :

| Heuristic | Rationale |
| --------- | --------- |
| Ignore invalid Struts or Spring links | Ignore Struts or Spring links with wrong type of callee (it's a common DLM rule). |
| Validate or Ignore link from Java field to JPA | - |
| Ignore link from toString methods | Ignore link from toString methods. |
| Validate or Ignore link to JspForward | Ignore link to callee of type JSP_FORWARD unless a part of the fullname is found in the source. |

