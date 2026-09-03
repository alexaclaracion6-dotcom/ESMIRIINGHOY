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
```

---

## 🧪 Task 3 — Automated Tests (Arrange–Act–Assert)

### 📋 Test Rule: No code merges to MAIN with a failing test — RED blocks PR ✅

---

### 📝 Orders Controller Tests

#### ✅ Test 1 — Happy Path: Creates valid order

test "createOrder saves a valid order":
**Arrange**
request = fakeRequest(body = { item: "Cake", qty: 2, status: "pending" })
**Act**
result = createOrder(request)
**Assert**
expect(result.status == 201)
expect(result.error == null)
expect(result.data.received.item == "Cake")
expect(result.data.received.qty == 2)
plaintext

#### ✅ Test 2 — Validation Failure: Rejects missing required field

test "createOrder rejects when item is missing":
**Arrange**
request = fakeRequest(body = { qty: 2, status: "pending" })
**Act**
result = createOrder(request)
**Assert**
expect(result.status == 422)
expect(result.error == "item is required")
expect(result.field == "item")

#### ✅ Test 3 — Edge Case: Rejects negative quantity

test "createOrder rejects negative quantity":
**Arrange**
request = fakeRequest(body = { item: "Cake", qty: -1, status: "pending" })
**Act**
result = createOrder(request)
**Assert**
expect(result.status == 422)
expect(result.error == "qty must be 1–999")
expect(result.field == "qty")

---

### 🍽️ Menu Controller Tests

#### ✅ Test 1 — Happy Path: Creates valid menu item

test "createMenu saves valid menu item":
**Arrange**
request = fakeRequest(body = { name: "Lumpia", price: 45 })
**Act**
result = createMenu(request)
**Assert**
expect(result.status == 201)
expect(result.error == null)
expect(result.data.received.name == "Lumpia")

#### ✅ Test 2 — Validation Failure: Rejects wrong type

test "createMenu rejects price as text":
**Arrange**
request = fakeRequest(body = { name: "Lumpia", price: "expensive" })
**Act**
result = createMenu(request)
**Assert**
expect(result.status == 422)
expect(result.error == "price must be a number")
expect(result.field == "price")
plaintext

#### ✅ Test 3 — Edge Case: Rejects zero/negative price
test "createMenu rejects negative price":
**Arrange**
request = fakeRequest(body = { name: "Lumpia", price: -5 })
**Act**
result = createMenu(request)
**Assert**
expect(result.status == 422)
expect(result.error == "price cannot be negative")
expect(result.field == "price")
plaintext

---

### 👤 Customers Controller Tests

#### ✅ Test 1 — Happy Path: Creates valid customer
test "createCustomer saves valid customer":
**Arrange**
request = fakeRequest(body = { name: "Ana Reyes", phone: "09183334444", address: "Valencia, Bukidnon" })
**Act**
result = createCustomer(request)
**Assert**
expect(result.status == 201)
expect(result.error == null)
plaintext

#### ✅ Test 2 — Validation Failure: Rejects invalid phone format
test "createCustomer rejects wrong phone format":
**Arrange**
request = fakeRequest(body = { name: "Ana Reyes", phone: "12345", address: "Valencia, Bukidnon" })
**Act**
result = createCustomer(request)
**Assert**
expect(result.status == 422)
expect(result.field == "phone")
plaintext

#### ✅ Test 3 — Edge Case: Rejects very short address
test "createCustomer rejects address too short":
**Arrange**
request = fakeRequest(body = { name: "Ana Reyes", phone: "09183334444", address: "CDO" })
**Act**
result = createCustomer(request)
**Assert**
expect(result.status == 422)
expect(result.field == "address")
plaintext

---

### ✅ Test Results Summary
| Test Type | Expected Status | Result |
|---|---|---|
| Happy Path (valid data) | 201 Created | ✅ PASS |
| Validation Failure (bad input) | 422 Error | ✅ PASS |
| Edge Case (boundary value) | 422 Error | ✅ PASS |

> ✅ **All tests PASS → GREEN** — ready to merge
> ❌ **Any test FAILS → RED** — blocks pull request
