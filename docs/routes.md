# API Routes

| Method | Path | Handler |
|---|---|---|
| GET | /orders | listOrders |
| GET | /orders/:id | showOrder |
| POST | /orders | createOrder |
| PUT | /orders/:id | updateOrder |
| DELETE | /orders/:id | deleteOrder |

## Test Results
- GET /orders → 200 ✅ `{"message":"listOrders stub"}`
- GET /orders/42 → 200 ✅ `{"message":"showOrder stub","id":"42"}`
- POST /orders → 201 ✅ `{"message":"createOrder stub"}`
- PUT /orders/42 → 200 ✅ `{"message":"updateOrder stub","id":"42"}`
- DELETE /orders/42 → 200 ✅ `{"message":"deleteOrder stub","id":"42"}`
