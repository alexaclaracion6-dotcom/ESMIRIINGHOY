# Validation Matrix

## POST /orders — Create Order
| Field   | Rules |
|---------|-------|
| item    | required, string, 1–100 chars |
| qty     | required, number, 1–999 |
| status  | required, one of: pending, shipped, cancelled |

## PUT /orders/:id — Update Order
| Field   | Rules |
|---------|-------|
| item    | optional, string, 1–100 chars |
| qty     | optional, number, 1–999 |
| status  | optional, one of: pending, shipped, cancelled |
