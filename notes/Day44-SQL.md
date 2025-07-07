# Day 44: Learning about nested queries

## Nested Queries
A nested query, or subquery, is a query written inside another SQL query. It allows you to use the result of one query as an input for another.

Subqueries are often used in:

- WHERE clauses for filtering
- FROM clauses as virtual tables
- SELECT clauses for calculated values

### 🧠 Why Use Subqueries?

- Break down complex logic into smaller parts
- Make queries more dynamic
- Replace multiple-step queries with a single query

Now we are gonna learn about subqueries in WHERE Clause

Eg

``` SQL
SELECT name
FROM Employees
WHERE department_id IN (
    SELECT id
    FROM Departments
    WHERE department_name = 'HR'
);
```

**NOTE**
✅ You can use = instead of IN only if the subquery returns exactly one value (i.e., one row and one column).
❌ You cannot use = if the subquery returns multiple rows.