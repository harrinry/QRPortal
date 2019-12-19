Objects : Schema, Table, View, Table Column, Function, Procedure, Package, Trigger, Index, Foreign Key, Unique Constraint, Event, Synonym.
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
7404    Avoid unreferenced views
7424	Avoid using SQL queries inside a loop
7436    Prefer UNION ALL to UNION
7762	Avoid undocumented triggers, functions and procedures
7776    Avoid Artifacts with High Fan-In
7778    Avoid Artifacts with High Fan-Out
7808	Avoid Artifacts with SQL statement including subqueries
7814	Avoid Tables not using referential integrity
7860	Avoid unreferenced Functions
1101000	Never use SQL queries with a cartesian product *
1101002	Never use SQL queries with a cartesian product on XXL Tables *
1101004	Avoid non-indexed SQL queries *) *
1101006	Avoid non-indexed XXL SQL queries *
1101008	Avoid non-SARGable queries *
1101010	Avoid NATURAL JOIN queries *
1101012	Specify column names instead of column numbers in ORDER BY clauses *
1101014	Avoid queries using old style join convention instead of ANSI-Standard joins *
1101016 Avoid Artifacts with too many parameters
1101018 Avoid using the GROUP BY clause
1101020 Avoid using quoted identifiers
1101022 Avoid Tables without Primary Key
1101024 Avoid using dynamic SQL in SQL Artifacts
1101026 Always define column names when inserting values *
1101028 Use MINUS or EXCEPT operator instead of NOT EXISTS and NOT IN subqueries *
*) Avoid SQL queries that no index can support was the previous name of Avoid non-indexed SQL queries
* Applying not only for SQL Analyzer technology by also for all client technologies having client bookmarks with SQL Analyzer tables / views, and property "inferenceEngineRequests" (ID : 138788, description : "Requests found by the Inference Engine") valued to a DML statement. Except Cobol language when it suffice to have client server bookmarks with SQL Analyzer tables / views.