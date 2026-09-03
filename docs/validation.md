# Validation Matrix — Maramag Home Food Pre-Order Manager

## 📋 Validation Vocabulary Key
- **presence** = required / cannot be empty
- **type** = must be correct data type (string, number, etc.)
- **length/range** = must be within min/max limits
- **format** = must match expected pattern
- **allowed values** = must be from approved list
- **referential** = must exist in related data

---

## 📝 Orders Validation

| Route | Field | Rules |
|---|---|---|
| POST `/orders` | item | required, string, 1–100 characters |
| POST `/orders` | qty | required, number, 1–999 |
| POST `/orders` | status | required, one of: pending, paid, shipped |
| PUT `/orders/:id` | item | optional, string, 1–100 characters |
| PUT `/orders/:id` | qty | optional, number, 1–999 |
| PUT `/orders/:id` | status | optional, one of: pending, paid, shipped |

---

## 🍽️ Menu Items Validation

| Route | Field | Rules |
|---|---|---|
| POST `/menu` | name | required, string, 1–100 characters |
| POST `/menu` | price | required, number, minimum 0 |
| POST `/menu` | description | optional, string, max 250 characters |
| PUT `/menu/:id` | name | optional, string, 1–100 characters |
| PUT `/menu/:id` | price | optional, number, minimum 0 |
| PUT `/menu/:id` | description | optional, string, max 250 characters |

---

## 👤 Customers Validation

| Route | Field | Rules |
|---|---|---|
| POST `/customers` | name | required, string, 1–100 characters |
| POST `/customers` | phone | required, string, Philippine format, 11 digits |
| POST `/customers` | address | required, string, 5–250 characters |
| PUT `/customers/:id` | name | optional, string, 1–100 characters |
| PUT `/customers/:id` | phone | optional, string, Philippine format, 11 digits |
| PUT `/customers/:id` | address | optional, string, 5–250 characters |

---

## ✅ Error Response Standard

```json
{
  "status": 422,
  "error": "qty out of range",
  "field": "qty"
}

```
---

## 🔐 Authorization Guard

Sensitive actions like DELETE or editing others' records require permission.

**Pseudocode**

**Status Code Difference:**
- **422** = Validation Error
- **403** = Forbidden 

**Applied to:**
- `DELETE /orders/:id` — Only owner can delete
- `DELETE /menu/:id` — Only owner can delete

---

## 🧪 Task 5 — Try to Break Your Own App

| # | Attempt / Bad Request | Expected Result | Actual Result |
|---|---|---|---|
| 1 | **Missing required field** — send POST `/orders` without `item` | 422, "item is required" | ✅ Returns 422 — no crash |
| 2 | **Wrong type** — send `qty: "cake"` (text instead of number) | 422, "qty must be a number" | ✅ Returns 422 — no crash |
| 3 | **Out-of-range value** — send `qty: 0` or `qty: 9999` | 422, "qty must be 1–999" | ✅ Returns 422 — no crash |
| 4 | **Invalid status** — send `status: "cancelled"` (not in allowed list) | 422, "invalid status" | ✅ Returns 422 — no crash |
| 5 | **Forbidden action** — DELETE without permission header | 403, "not allowed" | ✅ Returns 403 — no crash |

### ✅ Summary
- All bad requests return **422 or 403** — **NO 500 ERRORS, NO CRASHES** ✅
- Server stays running — invalid input is caught by guard clauses ✅
- No raw errors or stack traces exposed to client ✅

---

## ✅ Standard Response Envelope

All responses — **SUCCESS and ERROR** — use the same consistent shape:

### ✅ Success Response Shape
```json
{
  "status": 200,
  "data": { "message": "listOrders stub" },
  "error": null
}
```
{
  "status": 201,
  "data": { "id": "O001", "item": "Chicken Adobo", "qty": 3 },
  "error": null
}
```
{
  "status": 422,
  "error": "qty out of range",
  "field": "qty"
}

