# API Routes — Maramag Home Food Pre-Order Manager

**Base URL:** 
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
