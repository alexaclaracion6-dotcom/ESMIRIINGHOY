# API Routing Table

## Routes
| Method | Path           | Handler      | Story it serves       |
|--------|----------------|--------------|-----------------------|
| GET    | /orders        | listOrders   | View all orders       |
| GET    | /orders/:id    | showOrder    | View one order        |
| POST   | /orders        | createOrder  | Create an order       |
| PUT    | /orders/:id    | updateOrder  | Edit an order         |
| DELETE | /orders/:id    | deleteOrder  | Delete an order       |


---
# 📋 API Routes — Test Results

## 🍽️ Menu Items

### GET /menu
- **Request:** `curl http://localhost:3000/menu`
- **Response:**
```json
{"status":200,"data":{"message":"listMenuItems stub"},"error":null}

GET /menu/:id
Request: curl http://localhost:3000/menu/M001
Response:
json
{"status":200,"data":{"message":"showMenuItem stub","id":"M001"},"error":null}
Status: ✅ 200 OK
POST /menu
Request: curl -X POST http://localhost:3000/menu
Response:
json
{"status":201,"data":{"message":"createMenuItem stub"},"error":null}
Status: ✅ 201 Created
PUT /menu/:id
Request: curl -X PUT http://localhost:3000/menu/M001
Response:
json
{"status":200,"data":{"message":"updateMenuItem stub","id":"M001"},"error":null}
Status: ✅ 200 OK
DELETE /menu/:id
Request: curl -X DELETE http://localhost:3000/menu/M001
Response:
json
{"status":200,"data":{"message":"deleteMenuItem stub","id":"M001"},"error":null}
Status: ✅ 200 OK
📝 Orders
GET /orders
Request: curl http://localhost:3000/orders
Response:
json
{"status":200,"data":{"message":"listOrders stub"},"error":null}
Status: ✅ 200 OK
GET /orders/:id
Request: curl http://localhost:3000/orders/O001
Response:
json
{"status":200,"data":{"message":"showOrder stub","id":"O001"},"error":null}
Status: ✅ 200 OK
POST /orders
Request: curl -X POST http://localhost:3000/orders
Response:
json
{"status":201,"data":{"message":"createOrder stub"},"error":null}
Status: ✅ 201 Created
PUT /orders/:id
Request: curl -X PUT http://localhost:3000/orders/O001
Response:
json
{"status":200,"data":{"message":"updateOrder stub","id":"O001"},"error":null}
Status: ✅ 200 OK
DELETE /orders/:id
Request: curl -X DELETE http://localhost:3000/orders/O001
Response:
json
{"status":200,"data":{"message":"deleteOrder stub","id":"O001"},"error":null}
Status: ✅ 200 OK
👤 Customers
GET /customers
Request: curl http://localhost:3000/customers
Response:
json
{"status":200,"data":{"message":"listCustomers stub"},"error":null}
Status: ✅ 200 OK
GET /customers/:id
Request: curl http://localhost:3000/customers/C001
Response:
json
{"status":200,"data":{"message":"showCustomer stub","id":"C001"},"error":null}
Status: ✅ 200 OK
POST /customers
Request: curl -X POST http://localhost:3000/customers
Response:
json
{"status":201,"data":{"message":"createCustomer stub"},"error":null}
Status: ✅ 201 Created
PUT /customers/:id
Request: curl -X PUT http://localhost:3000/customers/C001
Response:
json
{"status":200,"data":{"message":"updateCustomer stub","id":"C001"},"error":null}
Status: ✅ 200 OK
DELETE /customers/:id
Request: curl -X DELETE http://localhost:3000/customers/C001
Response:
json
{"status":200,"data":{"message":"deleteCustomer stub","id":"C001"},"error":null}
Status: ✅ 200 OK
💰 Sales
GET /sales
Request: curl http://localhost:3000/sales
Response:
json
{"status":200,"data":{"message":"listSales stub"},"error":null}
Status: ✅ 200 OK





