# 2.0.0-alpha1

## Updates

- HTTP2 library is now supported to create/access web service.
- HTTPS library is now supported to create web resources.
- Hapijs framework is now supported for web services calls.
- Filesystem access Exit point definition is now supported:

*   fs.open
*   fs.readFile
*   fs.readFileSync
*   fs.writeFile
*   fs.writeFileSync
*   fs.close
*   fs.closeSync
*   fs.WriteStream.on
*   fs.readStream.on
- New rules added. See [https://technologies.castsoftware.com/rules?sec=srs\\_nodejs&ref=%7C%7C2.0.0-alpha1](https://technologies.castsoftware.com/rules?sec=srs_nodejs&ref=%7C%7C2.0.0-alpha1):

*   1020744: Avoid using TLS library before Node.js 9.11.2 and 10.4.1
*   1020746: Avoid using HTTP/2 library before Node.js 8.11.3, 9.11.2 and 10.4.1
*   1020748: Avoid using the call of data service with Node.js inside a loop
