# API Routing Table

## Routes
| Method | Path           | Handler      | Story it serves       |
|--------|----------------|--------------|-----------------------|
| GET    | /orders        | listOrders   | View all orders       |
| GET    | /orders/:id    | showOrder    | View one order        |
| POST   | /orders        | createOrder  | Create an order       |
| PUT    | /orders/:id    | updateOrder  | Edit an order         |
| DELETE | /orders/:id    | deleteOrder  | Delete an order       |

## Example Requests & Responses

### GET /orders
**Request:**

## Test Results — Example Request & Response

### ✅ GET /orders
**Request:** `GET http://localhost:3000/orders`
**Response (200 OK):**
```json
{"status":200,"data":{"message":"listOrders stub"},"error":null}
