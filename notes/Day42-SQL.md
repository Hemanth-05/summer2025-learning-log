
# 📘 Day 42: ORDER BY, LIMIT, and OFFSET in SQL

---

## 🔽 ORDER BY

### ✅ What it does:
`ORDER BY` is used to **sort the result set** based on one or more columns.

### 📌 Syntax:
```sql
SELECT column1, column2
FROM table_name
WHERE condition
ORDER BY column_name [ASC|DESC];
```

- `ASC` (ascending) is default
- `DESC` (descending) sorts from highest to lowest or Z to A

### 🧠 Why at the end?
Because it works on the **final result** after filtering and selection.

### 🔹 Example:
```sql
SELECT name, age
FROM Students
WHERE age > 18
ORDER BY age DESC;
```

---

## 📉 LIMIT

### ✅ What it does:
`LIMIT` restricts the number of rows returned by the query.

### 📌 Syntax:
```sql
SELECT column1
FROM table_name
ORDER BY column_name
LIMIT number;
```

- Use with `ORDER BY` to limit sorted results
- Use with `OFFSET` for pagination

### 🔹 Example:
```sql
SELECT name, score
FROM Players
ORDER BY score DESC
LIMIT 5;
```
✅ Returns **top 5 players** by score

---

## 🚫 OFFSET

### ✅ What it does:
`OFFSET` is used to **skip a specific number of rows** before starting to return results.

### 📌 Syntax:
```sql
SELECT column1, column2
FROM table_name
ORDER BY column_name
LIMIT limit_number OFFSET offset_number;
```

- Can be used for pagination
- **OFFSET must be after ORDER BY**

### 🔹 Example:
```sql
SELECT name, score
FROM Players
ORDER BY score DESC
LIMIT 5 OFFSET 5;
```
✅ Returns **rows 6 to 10**, skipping the top 5

---

## 🧠 Summary Table

| Clause     | Purpose                        | Placement     |
|------------|--------------------------------|----------------|
| `ORDER BY` | Sorts final result set         | End of query   |
| `LIMIT`    | Limits number of rows returned | After ORDER BY |
| `OFFSET`   | Skips rows before returning    | After LIMIT    |

---

## 💡 Pagination Tip
Use OFFSET and LIMIT together to paginate results:
- Page 1 → `LIMIT 10 OFFSET 0`
- Page 2 → `LIMIT 10 OFFSET 10`
- Page 3 → `LIMIT 10 OFFSET 20`

