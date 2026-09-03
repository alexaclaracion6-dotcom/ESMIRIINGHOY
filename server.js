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

app.post('/menu', (req, res) => {
  const newItem = {
    id: "M" + Date.now().toString().slice(-4),
    name: req.body.name || "Unnamed Item",
    price: req.body.price || 0,
    description: req.body.description || "No description provided"
  };
  return res.status(201).json({
    status: 201,
    data: { message: "Menu item created successfully!", item: newItem },
    error: null
  });
});

app.get('/menu/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    status: 200,
    data: { message: "Menu item details", id: id, name: "Chicken Adobo", price: 120, description: "Braised chicken in soy sauce & vinegar" },
    error: null
  });
});

app.put('/menu/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = {
    name: req.body.name || "Chicken Adobo",
    price: req.body.price || 120,
    description: req.body.description || "Braised chicken in soy sauce & vinegar"
  };
  return res.status(200).json({
    status: 200,
    data: { message: "Menu item updated successfully!", id: id, updated: updatedData },
    error: null
  });
});

app.delete('/menu/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    status: 200,
    data: { message: "Menu item deleted successfully!", deletedId: id },
    error: null
  });
});

// ==========================================
// 📝 ORDERS — Stub Handlers
// ==========================================
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

app.post('/orders', (req, res) => {
  return res.status(201).json({
    status: 201,
    data: { message: "createOrder stub" },
    error: null
  });
});

app.get('/orders/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    status: 200,
    data: { message: "showOrder stub", id: id },
    error: null
  });
});

app.put('/orders/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    status: 200,
    data: { message: "updateOrder stub", id: id },
    error: null
  });
});

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
// ✅ BAGONG DAGDAG: GET ALL CUSTOMERS
app.get('/customers', (req, res) => {
  return res.status(200).json({
    status: 200,
    data: {
      customers: [
        { id: "C001", name: "Maria Santos", phone: "09171234567", address: "Maramag, Bukidnon" },
        { id: "C002", name: "Juan Dela Cruz", phone: "09171112222", address: "Poblacion, Maramag" }
      ]
    },
    error: null
  });
});

app.post('/customers', (req, res) => {
  const newCustomer = {
    id: "C" + Date.now().toString().slice(-4),
    name: req.body.name || "Unnamed Customer",
    phone: req.body.phone || "Not provided",
    address: req.body.address || "Not provided"
  };
  return res.status(201).json({
    status: 201,
    data: { message: "Customer created successfully!", customer: newCustomer },
    error: null
  });
});

app.get('/customers/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    status: 200,
    data: { message: "Customer details", id: id, name: "Maria Santos", phone: "09171234567", address: "Maramag, Bukidnon" },
    error: null
  });
});

app.put('/customers/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = {
    name: req.body.name || "Maria Santos",
    phone: req.body.phone || "09171234567",
    address: req.body.address || "Maramag, Bukidnon"
  };
  return res.status(200).json({
    status: 200,
    data: { message: "Customer updated successfully!", id: id, updated: updatedData },
    error: null
  });
});

app.delete('/customers/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    status: 200,
    data: { message: "Customer deleted successfully!", deletedId: id },
    error: null
  });
});

// ==========================================
// 💰 SALES — Stub Handlers
// ==========================================
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
