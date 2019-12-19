- Added support for Oracle Object Type
	Methods and Constructors
	SELF prefix for Methods
	Types with Subtypes : CREATE OR REPLACE TYPE X UNDER Y
	CREATE OR REPLACE TYPE X IS TABLE OF Y
- Added support for dynamic SQL
	Add links when tables are readables in the SQL dynamic statement
	Add links when statements are sliced but readables
	Add links when when the table name is a variable / parameter easy to resolve
	OPEN-FOR-USING is resolved as dynamic SQL
- Added support for overloaded methods
	Based on number of parameters and how many are optionals
- Fixed Avoid Artifacts with High Depth of Code
- Fixed Avoid Artifacts with too many parameters
- Added support for ALTER TABLE ... WITH CHECK / NOCHECK ADD CONSTRAINT ... 
- Improved performances of client server quality rules calculation and creating symbol step