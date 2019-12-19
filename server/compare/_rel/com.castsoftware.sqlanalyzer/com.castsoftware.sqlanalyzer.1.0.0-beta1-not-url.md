Objects : Schema, Table, View, Table Column, Function, Procedure, Package, Trigger, Index, Foreign Key, Unique Constraint, Event.
Links : relyOn, referLink, useSelect, useInsert, useUpate, useDelete.
Quality rules :
1634	Avoid unreferenced Tables
7130	Avoid Artifacts with High Depth of Nested Subqueries
7344	Avoid "SELECT *" queries
7346	Avoid redundant indexes
7348	Avoid too many Indexes on one Table
7388	Avoid artifacts having recursive calls
7390	Avoid having multiple Artifacts inserting data on the same SQL Table
7394	Avoid having multiple Artifacts updating data on the same SQL Table
7392	Avoid having multiple artifacts deleting data on the same SQL table
7424	Avoid using SQL queries inside a loop
7762	Avoid undocumented triggers, functions and procedures
7808	Avoid Artifacts with SQL statement including subqueries
7814	Avoid Tables not using referential integrity
7860	Avoid unreferenced Functions
1101000	Never use SQL queries with a cartesian product
1101002	Never use SQL queries with a cartesian product on XXL Tables
1101004	Avoid SQL queries that no index can support
1101006	Avoid SQL queries on XXL tables that no index can support