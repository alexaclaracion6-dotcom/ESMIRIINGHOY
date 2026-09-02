// ==========================================
// ✅ SETUP — ALWAYS FIRST!
// ==========================================
const express = require('express');
const app = express();

app.use(express.json());

// ==========================================
// ✅ RESPONSE SHAPE — AGREED BY TEAM: { status, data, error }
// ==========================================

// ==========================================
// 🍽️ MENU ITEMS — Stub Handlers
// ==========================================

// GET /menu — List all menu items
app.get('/menu', (req, res) => {
  return res.status(200).json({
    status: 200,
    data: { message: "listMenuItems stub" },
    error: null
  });
});

// POST /menu — Create menu item
app.post('/menu', (req, res) => {
  return res.status(201).json({
    status: 201,
    data: { message: "createMenuItem stub" },
    error: null
  });
});

// GET /menu/:id — Show one menu item
app.get('/menu/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    status: 200,
    data: { message: "showMenuItem stub", id: id },
    error: null
  });
});

// PUT /menu/:id — Update menu item
app.put('/menu/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    status: 200,
    data: { message: "updateMenuItem stub", id: id },
    error: null
  });
});

// DELETE /menu/:id — Delete menu item
app.delete('/menu/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    status: 200,
    data: { message: "deleteMenuItem stub", id: id },
    error: null
  });
});

// ==========================================
// 📝 ORDERS — Stub Handlers
// ==========================================

// GET /orders — List all orders
app.get('/orders', (req, res) => {
  return res.status(200).json({
    status: 200,
    data: { message: "listOrders stub" },
    error: null
  });
});

// POST /orders — Create order
app.post('/orders', (req, res) => {
  return res.status(201).json({
    status: 201,
    data: { message: "createOrder stub" },
    error: null
  });
});

// GET /orders/:id — Show one order
app.get('/orders/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    status: 200,
    data: { message: "showOrder stub", id: id },
    error: null
  });
});

// PUT /orders/:id — Update order
app.put('/orders/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    status: 200,
    data: { message: "updateOrder stub", id: id },
    error: null
  });
});

// DELETE /orders/:id — Delete order
app.delete('/orders/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    status: 200,
    data: { message: "deleteOrder stub", id: id },
    error: null
  });
});

// ==========================================
// 👤 CUSTOMERS — Stub Handlers
// ==========================================

// GET /customers — List all customers
app.get('/customers', (req, res) => {
  return res.status(200).json({
    status: 200,
    data: { message: "listCustomers stub" },
    error: null
  });
});

// POST /customers — Create customer
app.post('/customers', (req, res) => {
  return res.status(201).json({
    status: 201,
    data: { message: "createCustomer stub" },
    error: null
  });
});

// GET /customers/:id — Show one customer
app.get('/customers/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    status: 200,
    data: { message: "showCustomer stub", id: id },
    error: null
  });
});

// PUT /customers/:id — Update customer
app.put('/customers/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    status: 200,
    data: { message: "updateCustomer stub", id: id },
    error: null
  });
});

// DELETE /customers/:id — Delete customer
app.delete('/customers/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    status: 200,
    data: { message: "deleteCustomer stub", id: id },
    error: null
  });
});

// ==========================================
// 💰 SALES — Stub Handlers
// ==========================================

// GET /sales — List all sales records
app.get('/sales', (req, res) => {
  return res.status(200).json({
    status: 200,
    data: { message: "listSales stub" },
    error: null
  });
});

// ==========================================
// ✅ START SERVER
// ==========================================
const PORT = 3000;
app.listen(PORT, () => console.log("✅ Server running on port 3000"));