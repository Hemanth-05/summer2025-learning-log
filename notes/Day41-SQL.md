# Day 41 - First day of SQL

I've been kind of busy but not too busy to not even spend an hr a day, I got a little lazy but lets bring back the efforts. Lets get locked in. Everyday, learn something new. Lets start to dive deep into SQL for the next few days.

About me is that I know the basics of SQL, so we'll document the learnings where we learn some new things.

Alias:
Alias in SQL is used to give a temporary name to a column or a table in your query output. It does not change the actual name in the database — it's only for display or readability in query results.

```SQL
SELECT player_name as Player, catches as 'Caught Out'
FROM Cricket Players
```
- player_name will appear as Player in the result.
- catches will appear as Caught Out.
- If your alias has spaces or special characters, enclose it in double quotes (") or single quotes (') depending on the SQL dialect.

**NOTE**
AS is optional. You can also write:

```SQL
SELECT player_name Player, catches "Caught Out"
FROM CricketPlayers;
```
Using aliases makes your query easier to read and understand, especially in reports or dashboards.

## WHERE Clause Operators

The `WHERE` clause in SQL is used to **filter records** from a table that meet a specific condition.

---

### 🔎 Basic Syntax
```sql
SELECT column1, column2
FROM table_name
WHERE condition;
```

---

### ⚙️ 1. Comparison Operators

| Operator | Description              | Example                    |
|----------|--------------------------|----------------------------|
| =        | Equal to                 | `WHERE age = 25`           |
| != or <> | Not equal to             | `WHERE name <> 'John'`     |
| >        | Greater than             | `WHERE salary > 50000`     |
| <        | Less than                | `WHERE age < 30`           |
| >=       | Greater than or equal to | `WHERE score >= 80`        |
| <=       | Less than or equal to    | `WHERE marks <= 60`        |

---

### 🔁 2. Logical Operators

| Operator | Description                      | Example                            |
|----------|----------------------------------|------------------------------------|
| AND      | All conditions must be true      | `WHERE age > 25 AND city = 'Dallas'` |
| OR       | At least one condition is true   | `WHERE age < 18 OR age > 60`         |
| NOT      | Reverses the condition           | `WHERE NOT city = 'New York'`        |

---

Example:
```SQL
SELECT * 
FROM Students
WHERE NOT grade = 'A';
```

### 🎯 3. Special Operators

| Operator     | Description                          | Example                             |
|--------------|--------------------------------------|-------------------------------------|
| BETWEEN      | Between two values (inclusive)       | `WHERE age BETWEEN 18 AND 30`       |
| IN           | Matches any value in a list          | `WHERE city IN ('Dallas', 'Austin')`|
| LIKE         | Pattern matching                     | `WHERE name LIKE 'J%'`              |
| IS NULL      | Value is NULL                        | `WHERE email IS NULL`               |
| IS NOT NULL  | Value is NOT NULL                    | `WHERE phone IS NOT NULL`           |

---

### 🔡 LIKE Wildcards

| Symbol | Meaning                   | Example                          |
|--------|---------------------------|----------------------------------|
| %      | Zero or more characters   | `WHERE name LIKE 'J%'`           |
| _      | Exactly one character     | `WHERE code LIKE 'A_1'`          |

---


## 🔍 SQL `LIKE` Clause — Detailed Explanation

---

### 📌 What is `LIKE`?

The `LIKE` clause in SQL is used in a `WHERE` statement to **search for a specified pattern** in a column.

It's commonly used with **string/text columns** when you **don’t know the exact value**, but you **know part of it** (e.g., starts with, ends with, contains something).

---

### ⚙️ Syntax

```sql
SELECT column1, column2
FROM table_name
WHERE column_name LIKE 'pattern';
```

---

### 🎨 Wildcard Characters in `LIKE`

| Symbol | Meaning                   | Example                        |
|--------|---------------------------|--------------------------------|
| `%`    | Zero or more characters   | `'A%'` matches `'Alice'`, `'Anna'`, `'A'` |
| `_`    | Exactly one character     | `'J_n'` matches `'Jan'`, `'Jon'` but not `'John'` |

---

### 🧪 Examples

#### 🔹 1. Starts With

```sql
SELECT * FROM Employees
WHERE name LIKE 'A%';
```
✅ Matches names like: `Alice`, `Aaron`, `Andrew`

---

#### 🔹 2. Ends With

```sql
SELECT * FROM Employees
WHERE name LIKE '%son';
```
✅ Matches names like: `Johnson`, `Anderson`, `Emerson`

---

#### 🔹 3. Contains

```sql
SELECT * FROM Products
WHERE description LIKE '%wireless%';
```
✅ Matches descriptions that contain the word **"wireless"** anywhere.

---

#### 🔹 4. Single Character Match

```sql
SELECT * FROM Students
WHERE name LIKE '_im';
```
✅ Matches: `Jim`, `Tim`, but **not** `Kimberly`

---

#### 🔹 5. Multiple Wildcards

```sql
SELECT * FROM Users
WHERE email LIKE '%@gmail._om';
```
✅ Matches emails ending in `@gmail.com`, `@gmail.aom`, etc. (1 character after the dot)

---

### 🚨 Case Sensitivity

- **MySQL**: `LIKE` is **case-insensitive** by default.
- **PostgreSQL**: `LIKE` is **case-sensitive**. Use `ILIKE` for case-insensitive match:

```sql
SELECT * FROM names
WHERE name ILIKE 'a%';
```

---

### 🔄 Using `NOT LIKE`

```sql
SELECT * FROM Customers
WHERE name NOT LIKE 'A%';
```
✅ Returns all names that **do not start** with "A".

---


