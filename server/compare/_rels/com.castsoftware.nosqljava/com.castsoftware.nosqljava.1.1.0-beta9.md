# 1.1.0-beta9

## Updates

### NOSQLJAVA-115- Support for class MongoRepository

Support has been added for connection and database through MongoRepository
### NOSQLJAVA-136- Documentation for Spring Data MongoDb support

Updated documentation spring data support including mongoTemplate and mongoRepository
# 1.1.0- beta8

## Updates

### NOSQLJAVA-183- Add Support For Methods Not Supported by Add Parametrization

Support has been added for the following methods below:
- count, deleteAll, deleteById, findById, findAll, save

### NOSQLJAVA-165- Creation of unknown Memcached objects

Support has been added for Unknown objects:
- CAST\\_Java\\_Unknown\\_Memcached\\_Connection
- CAST\\_Java\\_Unknown\\_Memcached\\_data

### NOSQLJAVA-175- Memcached client connected to several servers over the binary protocol:

Support has been added for connection of memcached client through several servers
### NOSQLJAVA-179- Added Crud Operation:

Support has been added for the following methods below:
- cas, asyncCAS, getAndTouch, asyncGetAndTouch, getAndLock and asyncGetAndLock

## Resolved issues

Below table lists the bugs fixed in the 1.1.0-beta8 release
| Internal ID | Call ID | Summary |
| ----------- | ------- | ------- |
| NOSQLJAVA-188 | - | Couchbase Spring Data: Object getting detected irrespective of Couchbase usage in all Java Projects |
| NOSQLJAVA-190 | - | Dynamo DB link and objects not showing Enlighten |

# 1.1.0- beta7

## Updates

### NOSQLJAVA-138- Initial Support for Couchbase Spring Data

Support has been added for Couchbase with Spring data:
- Creation of objects for a single Couchbase Bucket and Cluster.
- Creation of links for Couchbase specific operations such as select, insert, update and delete.

### NOSQLJAVA-137- Initial Support for Redis with Spring.

Support has been added for Redis with Spring
- Creation of objects for Redis connections in Spring.
- Creation of links for Redis specific operations such as select, insert, update and delete.

