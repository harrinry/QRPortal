# 2.0.0-beta1

## New

Official support of AngularJS 1.7
## Updates

The following objects will no longer be present:
| - | AngularJS Directive Link Function |
| - | --------------------------------- |
| - | AngularJS Model variable |
| - | AngularJS Watch function |

In addition, the following links will no longer be resolved:
- **accessWriteLink** and **accessReadLink** to **Model variables**
- **fireLink** from **Model variables** when they are in **Directive Link Functions** to **Watch Functions**.

