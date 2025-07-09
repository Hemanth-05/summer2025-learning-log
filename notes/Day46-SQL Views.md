
# 🧩 SQL Views — Deep Dive

---

## 🔍 What is a View?

A **View** is a **virtual table** that stores the result of a predefined SQL query. It doesn't store data physically — it just wraps a query so that you can reuse it like a table.

> Think of a View as a **saved SELECT statement**.

---

## ✅ Why Use Views?

| Purpose                      | Explanation                                                                 |
|------------------------------|-----------------------------------------------------------------------------|
| Simplify complex queries     | Save long JOINs/filters into a view                                         |
| Improve code readability     | Abstract logic out of queries                                               |
| Enhance security             | Expose only specific columns or rows to users                              |
| Reuse logic and calculations | Use views in multiple queries or reports                                   |

---

## 🛠️ How to Create a View

### Syntax:
```sql
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

### Example:
```sql
CREATE VIEW HighEarners AS
SELECT e.name, d.department_name, e.salary
FROM Employees e
JOIN Departments d ON e.department_id = d.id
WHERE e.salary > 70000;
```

Now you can query it like this:
```sql
SELECT name
FROM HighEarners
WHERE department_name = 'Engineering';
```

---

## 🔄 How to Modify or Drop a View

### Drop a view:
```sql
DROP VIEW view_name;
```

### Recreate a view:
```sql
DROP VIEW IF EXISTS HighEarners;

CREATE VIEW HighEarners AS
SELECT ...
```

---

## 🧠 When to Use Views (Real-Life Scenarios)

- You need to **hide sensitive data**
- You want to **simplify repeated queries**
- You want to **apply consistent filtering or formatting**
- You want to **build reports** based on pre-defined logic

---

## ⚠️ Cautions

| Issue                 | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| Duplicate column names| Always alias columns to avoid ambiguity (`AS`)                             |
| Not always updatable  | Most views are read-only unless simple and based on a single table          |
| Not stored data       | Views are real-time; for caching, use materialized views (if supported)     |

---

## 🧪 Bonus: View with Duplicate Column Names

```sql
-- BAD: both e.name and d.name will conflict as "name"
CREATE VIEW HighEarners AS
SELECT e.name, d.name, e.salary
FROM Employees e
JOIN Departments d ON e.department_id = d.id
WHERE e.salary > 70000;
```

### ✅ Fix using aliases:
```sql
CREATE VIEW HighEarners AS
SELECT 
  e.name AS employee_name,
  d.name AS department_name,
  e.salary
FROM Employees e
JOIN Departments d ON e.department_id = d.id
WHERE e.salary > 70000;
```

---

## ✅ Summary

- Views help **simplify, secure, and reuse** SQL logic
- Treat them like **virtual tables**
- Always **alias** overlapping columns
- Use views to **abstract complexity and create clean interfaces**

