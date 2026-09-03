# API Routes — Maramag Home Food Pre-Order Manager

**Base URL:** `https://fantastic-spoon-jr4rg4grq94pfj7vp-3000.app.github.dev`
**Response Standard:** `{ status, data, error }`

---

## 📋 Routing Table

| Method | Path | Handler | Story |
|---|---|---|---|
| GET | `/menu` | listMenu | View all menu items |
| GET | `/menu/:id` | showMenu | View single menu item |
| POST | `/menu` | createMenu | Add new menu item |
| PUT | `/menu/:id` | updateMenu | Edit menu item |
| DELETE | `/menu/:id` | deleteMenu | Remove menu item |
| GET | `/orders` | listOrders | View all orders |
| GET | `/orders/:id` | showOrder | View single order |
| POST | `/orders` | createOrder | Place new order |
| PUT | `/orders/:id` | updateOrder | Edit order |
| DELETE | `/orders/:id` | deleteOrder | Cancel/remove order |
| GET | `/customers` | listCustomers | View all customers |
| GET | `/customers/:id` | showCustomer | View single customer |
| POST | `/customers` | createCustomer | Add new customer |
| PUT | `/customers/:id` | updateCustomer | Edit customer info |
| DELETE | `/customers/:id` | deleteCustomer | Remove customer |
| GET | `/sales` | listSales | View all sales records |

---

## 🍽️ Menu Items

### ✅ GET `/menu`
**Request:** `GET /menu`

**Response:**
```json
{
  "status": 200,
  "data": {
    "menuItems": [
      { "id": "M001", "name": "Chicken Adobo", "price": 120.00, "description": "Braised chicken in soy sauce & vinegar" },
      { "id": "M002", "name": "Pork Sinigang", "price": 150.00, "description": "Sour tamarind soup with pork & vegetables" },
      { "id": "M003", "name": "Beef Caldereta", "price": 180.00, "description": "Spicy beef stew in tomato sauce" },
      { "id": "M004", "name": "Fried Rice", "price": 35.00, "description": "Garlic fried rice" },
      { "id": "M005", "name": "Grilled Fish", "price": 130.00, "description": "Fresh tilapia grilled to perfection" }
    ]
  },
  "error": null
}

✅ GET /menu/:id
Request: GET /menu/M001
Response:
json
{
  "status": 200,
  "data": {
    "message": "Menu item details",
    "id": "M001",
    "name": "Chicken Adobo",
    "price": 120,
    "description": "Braised chicken in soy sauce & vinegar"
  },
  "error": null
}

✅ POST /menu
Request:
http
POST /menu
Content-Type: application/json

{ "name": "Lumpia", "price": 45, "description": "Fried spring rolls" }
Response:
json
{
  "status": 201,
  "data": {
    "message": "Menu item created successfully!",
    "item": { "id": "M5678", "name": "Lumpia", "price": 45, "description": "Fried spring rolls" }
  },
  "error": null
}
✅ PUT /menu/:id
Request:
http
PUT /menu/M001
Content-Type: application/json

{ "price": 130 }
Response:
json
{
  "status": 200,
  "data": {
    "message": "Menu item updated successfully!",
    "id": "M001",
    "updated": { "name": "Chicken Adobo", "price": 130, "description": "Braised chicken in soy sauce & vinegar" }
  },
  "error": null
}
✅ DELETE /menu/:id
Request: DELETE /menu/M005
Response:
json
{
  "status": 200,
  "data": { "message": "Menu item deleted successfully!", "deletedId": "M005" },
  "error": null
}
📝 Orders
✅ GET /orders
Request: GET /orders
Response Table:
Table
ID	Item	Quantity	Status
O001	Chicken Adobo	3	pending
O002	Pork Sinigang	2	paid
O003	Beef Caldereta	5	shipped
O004	Fried Rice	10	pending
O005	Grilled Fish	1	paid
✅ GET /orders/:id
Request: GET /orders/O001
Response:
json
{
  "status": 200,
  "data": { "message": "showOrder stub", "id": "O001" },
  "error": null
}
✅ POST /orders
Request:
http
POST /orders
Content-Type: application/json

{ "item": "Lumpia", "qty": 5, "status": "pending" }
Response:
json
{
  "status": 201,
  "data": { "message": "createOrder stub" },
  "error": null
}
✅ PUT /orders/:id
Request: PUT /orders/O001
Response:
json
{
  "status": 200,
  "data": { "message": "updateOrder stub", "id": "O001" },
  "error": null
}
✅ DELETE /orders/:id
Request: DELETE /orders/O001
Response:
json
{
  "status": 200,
  "data": { "message": "deleteOrder stub", "id": "O001" },
  "error": null
}
👤 Customers
✅ GET /customers
Request: GET /customers
Response Table:
Table
ID	Name	Phone	Address
C001	Maria Santos	09171234567	Maramag, Bukidnon
C002	Juan Dela Cruz	09171112222	Poblacion, Maramag
✅ GET /customers/:id
Request: GET /customers/C001
Response:
json
{
  "status": 200,
  "data": {
    "message": "Customer details",
    "id": "C001",
    "name": "Maria Santos",
    "phone": "09171234567",
    "address": "Maramag, Bukidnon"
  },
  "error": null
}
✅ POST /customers
Request:
http
POST /customers
Content-Type: application/json

{ "name": "Ana Reyes", "phone": "09183334444", "address": "Valencia, Bukidnon" }
Response:
json
{
  "status": 201,
  "data": {
    "message": "Customer created successfully!",
    "customer": { "id": "C5678", "name": "Ana Reyes", "phone": "09183334444", "address": "Valencia, Bukidnon" }
  },
  "error": null
}
✅ PUT /customers/:id
Request: PUT /customers/C001
Response:
json
{
  "status": 200,
  "data": {
    "message": "Customer updated successfully!",
    "id": "C001",
    "updated": { "name": "Maria Santos", "phone": "09179998888", "address": "Maramag, Bukidnon" }
  },
  "error": null
}
✅ DELETE /customers/:id
Request: DELETE /customers/C001
Response:
json
{
  "status": 200,
  "data": { "message": "Customer deleted successfully!", "deletedId": "C001" },
  "error": null
}
💰 Sales
✅ GET /sales
Request: GET /sales
Response Table:
Table
ID	Order ID	Item	Quantity	Total	Date
S001	O001	Chicken Adobo	3	₱360	2026-09-01
S002	O002	Pork Sinigang	2	₱300	2026-09-02
S003	O003	Beef Caldereta	5	₱900	2026-09-03
✅ Status Codes Reference
Table
Code	Meaning	Used For
200	OK	GET, PUT, DELETE success
201	Created	POST success
404	Not Found	Invalid route / wrong ID
