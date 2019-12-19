# 1.3.0-funcrel

## Updates

- **New rule** added, see [https://technologies.castsoftware.com/rules?sec=srs\\_typescript&ref=%7C%7C1.3.0-funcrel](https://technologies.castsoftware.com/rules?sec=srs_typescript&ref=%7C%7C1.3.0-funcrel):

| 1020862 | Avoid having cookie with an overly broad domain (TypeScript) |
| ------- | ------------------------------------------------------------ |
| 1020864 | Avoid using unsecured cookie (TypeScript) |
| 1020866 | Avoid creating cookie with overly broad path (TypeScript) |
| 1020868 | Avoid creating cookie without setting httpOnly option (TypeScript) |
| 1020872 | Always use JSON.parse & JSON.stringify with try/catch block (TypeScript) |

## Resolved issues

| Internal ID | Call ID | Summary |
| ----------- | ------- | ------- |
| ANGTS-245 | 19954 | "POST PUT GET DELETE service Objects are not identified by typescript analyzer" |

---
## Updates

Added support for **AWS S3** framework
## Resolved issues

| Internal ID | Call ID | Summary |
| ----------- | ------- | ------- |
| ANGTS-232 | 19799 | Missing Link between Angular AngularGET HTTP Operation to Spring MVC Get Operation |
| ANGTS-239 | 19795 | When no call to an anonymous function is found, a callLink from the callable in which the anonymous function is defined to that anonymous function is created |

---
## Updates

- Added support for [path mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html\#path-mapping)
- Added explicit dependency with  and extensions
- Four rules relative to **React** framework have been added to the extension - see [https://technologies.castsoftware.com/rules?sec=srs\\_typescript&ref=%7C%7C1.3.0-beta1](https://technologies.castsoftware.com/rules?sec=srs_typescript&ref=%7C%7C1.3.0-beta1):

<table class="wrapped">`<colgroup>``<col>``<col>`</colgroup>`<tbody>``<tr>`<td colspan="1">1020452</td><td colspan="1">Avoid using "&lt;script&gt;" tag in HTML template used by React.js components (TypeScript)</td></tr>`<tr>`<td style="text-align: left;">1020854</td><td style="text-align: left;">Avoid using React dangerouslySetInnerHTML (TypeScript)</td></tr>`<tr>`<td style="text-align: left;">1020856</td><td style="text-align: left;">Ensure catching Typescript error in React components</td></tr>`<tr>`<td colspan="1">1020858</td><td colspan="1">Avoid empty componentDidCatch blocks (Typescript)</td></tr></tbody></table>
