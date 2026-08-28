# API Routes

| Method | Path | Handler |
|---|---|---|
| GET | /orders | listOrders |
| GET | /orders/:id | showOrder |
| POST | /orders | createOrder |
| PUT | /orders/:id | updateOrder |
| DELETE | /orders/:id | deleteOrder |

### ✅ GET /orders
**Request:** `GET http://localhost:3000/orders`
**Response (200 OK):**
```json
{"status":200,"data":{"message":"listOrders stub"},"error":null}
