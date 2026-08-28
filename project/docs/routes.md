# API Routing Table

## Routes
| Method | Path           | Handler      | Story it serves       |
|--------|----------------|--------------|-----------------------|
| GET    | /orders        | listOrders   | View all orders       |
| GET    | /orders/:id    | showOrder    | View one order        |
| POST   | /orders        | createOrder  | Create an order       |
| PUT    | /orders/:id    | updateOrder  | Edit an order         |
| DELETE | /orders/:id    | deleteOrder  | Delete an order       |
