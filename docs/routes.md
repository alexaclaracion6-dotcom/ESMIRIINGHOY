# 📋 Routing Table & Test Results — Maramag Home Food Pre-Order Manager

## Complete Routing Table

| # | Method | Path | Handler | Expected Status | Purpose |
|---|---|---|---|---|---|
| 1 | GET | /menu | listMenuItems | 200 OK | View all menu items |
| 2 | POST | /menu | createMenuItem | 201 Created | Add new menu item |
| 3 | GET | /menu/:id | showMenuItem | 200 OK | View one menu item |
| 4 | PUT | /menu/:id | updateMenuItem | 200 OK | Edit menu item |
| 5 | DELETE | /menu/:id | deleteMenuItem | 200 OK | Remove menu item |
| 6 | GET | /orders | listOrders | 200 OK | View all orders |
| 7 | POST | /orders | createOrder | 201 Created | Place new order |
| 8 | GET | /orders/:id | showOrder | 200 OK | View one order |
| 9 | PUT | /orders/:id | updateOrder | 200 OK | Edit order |
| 10 | DELETE | /orders/:id | deleteOrder | 200 OK | Cancel order |
| 11 | GET | /customers | listCustomers | 200 OK | View all customers |
| 12 | POST | /customers | createCustomer | 201 Created | Add new customer |
| 13 | GET | /customers/:id | showCustomer | 200 OK | View one customer |
| 14 | PUT | /customers/:id | updateCustomer | 200 OK | Edit customer |
| 15 | DELETE | /customers/:id | deleteCustomer | 200 OK | Remove customer |
| 16 | GET | /sales | listSales | 200 OK | View sales records |

---

## Example Request & Response

| Route | Example Request | Example Response |
|---|---|---|
| GET /menu | curl http://localhost:3000/menu | {"status":200,"data":{"message":"listMenuItems stub"},"error":null} |
| POST /menu | curl -X POST http://localhost:3000/menu | {"status":201,"data":{"message":"createMenuItem stub"},"error":null} |
| GET /menu/:id | curl http://localhost:3000/menu/M001 | {"status":200,"data":{"message":"showMenuItem stub","id":"M001"},"error":null} |
| PUT /menu/:id | curl -X PUT http://localhost:3000/menu/M001 | {"status":200,"data":{"message":"updateMenuItem stub","id":"M001"},"error":null} |
| DELETE /menu/:id | curl -X DELETE http://localhost:3000/menu/M001 | {"status":200,"data":{"message":"deleteMenuItem stub","id":"M001"},"error":null} |
| GET /orders | curl http://localhost:3000/orders | {"status":200,"data":{"message":"listOrders stub"},"error":null} |
| POST /orders | curl -X POST http://localhost:3000/orders | {"status":201,"data":{"message":"createOrder stub"},"error":null} |
| GET /orders/:id | curl http://localhost:3000/orders/O001 | {"status":200,"data":{"message":"showOrder stub","id":"O001"},"error":null} |
| PUT /orders/:id | curl -X PUT http://localhost:3000/orders/O001 | {"status":200,"data":{"message":"updateOrder stub","id":"O001"},"error":null} |
| DELETE /orders/:id | curl -X DELETE http://localhost:3000/orders/O001 | {"status":200,"data":{"message":"deleteOrder stub","id":"O001"},"error":null} |
| GET /customers | curl http://localhost:3000/customers | {"status":200,"data":{"message":"listCustomers stub"},"error":null} |
| POST /customers | curl -X POST http://localhost:3000/customers | {"status":201,"data":{"message":"createCustomer stub"},"error":null} |
| GET /customers/:id | curl http://localhost:3000/customers/C001 | {"status":200,"data":{"message":"showCustomer stub","id":"C001"},"error":null} |
| PUT /customers/:id | curl -X PUT http://localhost:3000/customers/C001 | {"status":200,"data":{"message":"updateCustomer stub","id":"C001"},"error":null} |
| DELETE /customers/:id | curl -X DELETE http://localhost:3000/customers/C001 | {"status":200,"data":{"message":"deleteCustomer stub","id":"C001"},"error":null} |
| GET /sales | curl http://localhost:3000/sales | {"status":200,"data":{"message":"listSales stub"},"error":null} |

---

## Wrong Method Test

| Test Case | Request | Result |
|---|---|---|
| DELETE /orders (no ID) | curl -X DELETE http://localhost:3000/orders | Returns 404 Not Found — sensible error ✅ |


=======
---

## Notes
- All responses follow shape: `{ status, data, error }`
- GET/PUT/DELETE return 200
- POST returns 201 Created
- Route parameter `:id` echoed back in response
