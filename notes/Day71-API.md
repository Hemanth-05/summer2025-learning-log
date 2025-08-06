# Day71 - Query Parameters vs Path Parameters

## 🔹 Path Parameters

## 🔹 Query Parameters

Query parameters are added after a `?` in the URL and are used to **filter, search, or sort data**.

**Example:**
```
GET /users?id=123
```

- `id=123` is a query parameter.
- Often optional.
- Used for filtering, searching, sorting, and pagination.
- Multiple query parameters can be combined (e.g., `?sort=name&limit=10`).

---

Path parameters are part of the URL and are used to **identify** specific resources.

**Example:**
```
GET /users/123
```

- `123` is a path parameter representing a unique user ID.
- Typically required.
- Used to directly access a specific resource.
- Common in RESTful API design.

---

## ✅ Summary

| Feature            | Path Parameter        | Query Parameter                      |
|--------------------|------------------------|--------------------------------------|
| Location           | In URL path (`/users/1`) | After `?` (e.g., `?id=1`)           |
| Use Case           | Identify specific resource | Filter or modify data             |
| Optional?          | ❌ Usually required    | ✅ Often optional                    |
| RESTful API        | ✅ Preferred            | ✅ Used for advanced querying        |
