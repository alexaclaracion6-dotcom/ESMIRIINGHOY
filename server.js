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

// GET /menu — View all menu items
app.get('/menu', (req, res) => {
  return res.status(200).json({
    status: 200,
    data: {
      menuItems: [
        { id: "M001", name: "Chicken Adobo", price: 120.00, description: "Braised chicken in soy sauce & vinegar" },
        { id: "M002", name: "Pork Sinigang", price: 150.00, description: "Sour tamarind soup with pork & vegetables" },
        { id: "M003", name: "Beef Caldereta", price: 180.00, description: "Spicy beef stew in tomato sauce" },
        { id: "M004", name: "Fried Rice", price: 35.00, description: "Garlic fried rice" },
        { id: "M005", name: "Grilled Fish", price: 130.00, description: "Fresh tilapia grilled to perfection" }
      ]
    },
    error: null
  });
});


// POST /menu — Create NEW menu item
app.post('/menu', (req, res) => {
  const newItem = {
    id: "M" + Date.now().toString().slice(-4), // Auto-generate ID like M1234
    name: req.body.name || "Unnamed Item",
    price: req.body.price || 0,
    description: req.body.description || "No description provided"
  };

  return res.status(201).json({
    status: 201,
    data: {
      message: "Menu item created successfully!",
      item: newItem
    },
    error: null
  });
});

// GET /menu/:id — Show ONE menu item
app.get('/menu/:id', (req, res) => {
  const { id } = req.params;
  
  return res.status(200).json({
    status: 200,
    data: {
      message: "Menu item details",
      id: id,
      name: "Chicken Adobo",
      price: 120,
      description: "Braised chicken in soy sauce & vinegar"
    },
    error: null
  });
});


// PUT /menu/:id — UPDATE existing menu item
app.put('/menu/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = {
    name: req.body.name || "Chicken Adobo",
    price: req.body.price || 120,
    description: req.body.description || "Braised chicken in soy sauce & vinegar"
  };

  return res.status(200).json({
    status: 200,
    data: {
      message: "Menu item updated successfully!",
      id: id,
      updated: updatedData
    },
    error: null
  });
});

// DELETE /menu/:id — DELETE menu item
app.delete('/menu/:id', (req, res) => {
  const { id } = req.params;

  return res.status(200).json({
    status: 200,
    data: {
      message: "Menu item deleted successfully!",
      deletedId: id
    },
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

// GET /orders — View ALL orders
app.get('/orders', (req, res) => {
  return res.status(200).json({
    status: 200,
    data: {
      orders: [
        { id: "O001", item: "Chicken Adobo", qty: 3, status: "pending" },
        { id: "O002", item: "Pork Sinigang", qty: 2, status: "paid" },
        { id: "O003", item: "Beef Caldereta", qty: 5, status: "shipped" },
        { id: "O004", item: "Fried Rice", qty: 10, status: "pending" },
        { id: "O005", item: "Grilled Fish", qty: 1, status: "paid" }
      ]
    },
    error: null
  });
});

// POST /customers — CREATE new customer
app.post('/customers', (req, res) => {
  const newCustomer = {
    id: "C" + Date.now().toString().slice(-4), // Auto-generate ID like C1234
    name: req.body.name || "Unnamed Customer",
    phone: req.body.phone || "Not provided",
    address: req.body.address || "Not provided"
  };

  return res.status(201).json({
    status: 201,
    data: {
      message: "Customer created successfully!",
      customer: newCustomer
    },
    error: null
  });
});

// GET /customers/:id — View ONE customer
app.get('/customers/:id', (req, res) => {
  const { id } = req.params;

  return res.status(200).json({
    status: 200,
    data: {
      message: "Customer details",
      id: id,
      name: "Maria Santos",
      phone: "09171234567",
      address: "Maramag, Bukidnon"
    },
    error: null
  });
});

// PUT /customers/:id — UPDATE existing customer
app.put('/customers/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = {
    name: req.body.name || "Maria Santos",
    phone: req.body.phone || "09171234567",
    address: req.body.address || "Maramag, Bukidnon"
  };

  return res.status(200).json({
    status: 200,
    data: {
      message: "Customer updated successfully!",
      id: id,
      updated: updatedData
    },
    error: null
  });
});

// DELETE /customers/:id — DELETE customer
app.delete('/customers/:id', (req, res) => {
  const { id } = req.params;

  return res.status(200).json({
    status: 200,
    data: {
      message: "Customer deleted successfully!",
      deletedId: id
    },
    error: null
  });
});

// ==========================================
// 💰 SALES — Stub Handlers
// ==========================================

// GET /sales — View ALL sales records
app.get('/sales', (req, res) => {
  return res.status(200).json({
    status: 200,
    data: {
      sales: [
        { id: "S001", orderId: "O001", item: "Chicken Adobo", qty: 3, total: 360, date: "2026-09-01" },
        { id: "S002", orderId: "O002", item: "Pork Sinigang", qty: 2, total: 300, date: "2026-09-02" },
        { id: "S003", orderId: "O003", item: "Beef Caldereta", qty: 5, total: 900, date: "2026-09-03" }
      ]
    },
    error: null
  });
});

// ==========================================
// ✅ START SERVER
// ==========================================
const PORT = 3000;
app.listen(PORT, () => console.log("✅ Server running on port 3000"));
