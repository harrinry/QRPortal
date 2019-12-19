# 1.1.0-beta6

## Updates

### NOSQLJAVA-46- Initial Support for Memcached

Support has been added for Memcached:
- Creation of objects for Memcahed with JAVA.
- Creation of different kind of links for various operations such as insert, delete and so on.

# 1.1.0- beta5

## Updates

### NOSQLJAVA-123: Azure CosmosDB : Support for Asynchronous API for Java

Support of Asynchronous API for Java SDK to access Azure CosmosDB
### NOSQLJAVA-111: Azure CosmosDB : Support for Collection based operations

Support of detecting operations on Collections.
## Resolved issues

Below table lists the bugs fixed in the 1.1.0-beta5 release
| Internal ID | Call ID | Summary |
| ----------- | ------- | ------- |
| NOSQLJAVA-132 | - | Metamodel and Documentation for CouchDB is not as per implementation |

# 1.1.0- beta4

## Updates

### NOSQLJAVA-103: Support for MongoTemplate(MongoDbFactory mongoDbFactory)

Support of databases created with the help of MongoDBFactory using MongoTemplate.
### NOSQLJAVA-107: Support for GenericXmlApplicationContext

Support of Connections and databases created with the help of XML.
### NOSQLJAVA-97: Support for org.springframework.data.mongodb.core.query

Support for different crud operations with MongoOperations:
- Support of INSERT operation through mongoOperation
- Support of UPDATE operation through mongoOperation
- Support of SELECT operation through mongoOperation
- Support of REMOVE operation through mongoOperation
- Support of DROP operation through mongoOperation

### NOSQLJAVA-110: Support for Redis connections using diffferent Jedis packages

Support of different formats for creating jedis connections
