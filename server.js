const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// ==========================================
// 🍽️ MENU ROUTES — with Guard Clause Validation
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

// GET /menu/:id — View single menu item
app.get('/menu/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    status: 200,
    data: { message: "showMenu stub", id: id },
    error: null
  });
});

// POST /menu — Create menu item with validation
app.post('/menu', (req, res) => {
  const { name, price, description } = req.body;

  // --- GUARD CLAUSES — Check BAD cases FIRST ---
  if (!name) {
    return res.status(422).json({ status: 422, error: "name is required", field: "name" });
  }
  if (typeof name !== "string") {
    return res.status(422).json({ status: 422, error: "name must be text", field: "name" });
  }
  if (name.length < 1 || name.length > 100) {
    return res.status(422).json({ status: 422, error: "name must be 1–100 characters", field: "name" });
  }
  if (price === undefined || price === null) {
    return res.status(422).json({ status: 422, error: "price is required", field: "price" });
  }
  if (typeof price !== "number") {
    return res.status(422).json({ status: 422, error: "price must be a number", field: "price" });
  }
  if (price < 0) {
    return res.status(422).json({ status: 422, error: "price cannot be negative", field: "price" });
  }
  if (description !== undefined && typeof description === "string" && description.length > 250) {
    return res.status(422).json({ status: 422, error: "description max 250 characters", field: "description" });
  }
  // --- ALL VALIDATION PASSED ---

  return res.status(201).json({
    status: 201,
    data: { message: "createMenu stub", received: { name, price, description } },
    error: null
  });
});

// PUT /menu/:id — Update menu item with validation
app.put('/menu/:id', (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;

  // --- GUARD CLAUSES ---
  if (name !== undefined) {
    if (typeof name !== "string") {
      return res.status(422).json({ status: 422, error: "name must be text", field: "name" });
    }
    if (name.length < 1 || name.length > 100) {
      return res.status(422).json({ status: 422, error: "name must be 1–100 characters", field: "name" });
    }
  }
  if (price !== undefined) {
    if (typeof price !== "number") {
      return res.status(422).json({ status: 422, error: "price must be a number", field: "price" });
    }
    if (price < 0) {
      return res.status(422).json({ status: 422, error: "price cannot be negative", field: "price" });
    }
  }
  if (description !== undefined && typeof description === "string" && description.length > 250) {
    return res.status(422).json({ status: 422, error: "description max 250 characters", field: "description" });
  }
  // --- ALL VALIDATION PASSED ---

  return res.status(200).json({
    status: 200,
    data: { message: "updateMenu stub", id: id, received: { name, price, description } },
    error: null
  });
});

// DELETE /menu/:id — Delete menu item (with Authorization Guard)
app.delete('/menu/:id', (req, res) => {
  const { id } = req.params;
  // --- AUTHORIZATION GUARD ---
  const currentUserId = req.headers['x-user-id'];
  const menuOwnerId = "user-owner-123"; // Simulated owner

  if (!currentUserId || currentUserId !== menuOwnerId) {
    return res.status(403).json({
      status: 403,
      error: "You are not allowed to delete this menu item",
      action: "delete"
    });
  }
  // --- AUTHORIZATION PASSED ---

  return res.status(200).json({
    status: 200,
    data: { message: "deleteMenu stub", deletedId: id },
    error: null
  });
});

// ==========================================
// 📝 ORDER ROUTES — with Guard Clause Validation
// ==========================================

// GET /orders — View all orders
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

// GET /orders/:id — View single order
app.get('/orders/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    status: 200,
    data: { message: "showOrder stub", id: id },
    error: null
  });
});

// POST /orders — Create order with validation
app.post('/orders', (req, res) => {
  const { item, qty, status } = req.body;
  const ALLOWED_STATUSES = ["pending", "paid", "shipped"];

  // --- GUARD CLAUSES — Check BAD cases FIRST ---
  if (!item) {
    return res.status(422).json({ status: 422, error: "item is required", field: "item" });
  }
  if (typeof item !== "string") {
    return res.status(422).json({ status: 422, error: "item must be text", field: "item" });
  }
  if (item.length < 1 || item.length > 100) {
    return res.status(422).json({ status: 422, error: "item must be 1–100 characters", field: "item" });
  }
  if (qty === undefined || qty === null) {
    return res.status(422).json({ status: 422, error: "qty is required", field: "qty" });
  }
  if (typeof qty !== "number") {
    return res.status(422).json({ status: 422, error: "qty must be a number", field: "qty" });
  }
  if (qty < 1 || qty > 999) {
    return res.status(422).json({ status: 422, error: "qty must be 1–999", field: "qty" });
  }
  if (!status) {
    return res.status(422).json({ status: 422, error: "status is required", field: "status" });
  }
  if (!ALLOWED_STATUSES.includes(status)) {
    return res.status(422).json({ status: 422, error: "invalid status — allowed: pending, paid, shipped", field: "status" });
  }
  // --- ALL VALIDATION PASSED ---

  return res.status(201).json({
    status: 201,
    data: { message: "createOrder stub", received: { item, qty, status } },
    error: null
  });
});

// PUT /orders/:id — Update order with validation
app.put('/orders/:id', (req, res) => {
  const { id } = req.params;
  const { item, qty, status } = req.body;
  const ALLOWED_STATUSES = ["pending", "paid", "shipped"];

  // --- GUARD CLAUSES ---
  if (item !== undefined) {
    if (typeof item !== "string") {
      return res.status(422).json({ status: 422, error: "item must be text", field: "item" });
    }
    if (item.length < 1 || item.length > 100) {
      return res.status(422).json({ status: 422, error: "item must be 1–100 characters", field: "item" });
    }
  }
  if (qty !== undefined) {
    if (typeof qty !== "number") {
      return res.status(422).json({ status: 422, error: "qty must be a number", field: "qty" });
    }
    if (qty < 1 || qty > 999) {
      return res.status(422).json({ status: 422, error: "qty must be 1–999", field: "qty" });
    }
  }
  if (status !== undefined && !ALLOWED_STATUSES.includes(status)) {
    return res.status(422).json({ status: 422, error: "invalid status — allowed: pending, paid, shipped", field: "status" });
  }
  // --- ALL VALIDATION PASSED ---

  return res.status(200).json({
    status: 200,
    data: { message: "updateOrder stub", id: id, received: { item, qty, status } },
    error: null
  });
});

// DELETE /orders/:id — Delete order (with Authorization Guard)
app.delete('/orders/:id', (req, res) => {
  const { id } = req.params;
  // --- AUTHORIZATION GUARD ---
  // Placement: Check PERMISSION BEFORE allowing delete
  const currentUserId = req.headers['x-user-id']; // Simulated: current logged-in user
  const orderOwnerId = "user-owner-123"; // Simulated: who owns this order (from database later)
  
  if (!currentUserId || currentUserId !== orderOwnerId) {
    // 403 = FORBIDDEN — different from validation's 422!
    return res.status(403).json({
      status: 403,
      error: "You are not allowed to delete this order",
      action: "delete"
    });
  }
  // --- AUTHORIZATION PASSED — proceed safely ---

  return res.status(200).json({
    status: 200,
    data: { message: "deleteOrder stub", deletedId: id },
    error: null
  });
});

// ==========================================
// 👤 CUSTOMER ROUTES — with Guard Clause Validation
// ==========================================

// GET /customers — View all customers
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

// GET /customers/:id — View single customer
app.get('/customers/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    status: 200,
    data: { message: "showCustomer stub", id: id },
    error: null
  });
});

// POST /customers — Create customer with validation
app.post('/customers', (req, res) => {
  const { name, phone, address } = req.body;
  const PHONE_PATTERN = /^09\d{9}$/; // starts with 09, 11 digits total

  // --- GUARD CLAUSES ---
  if (!name) {
    return res.status(422).json({ status: 422, error: "name is required", field: "name" });
  }
  if (typeof name !== "string") {
    return res.status(422).json({ status: 422, error: "name must be text", field: "name" });
  }
  if (name.length < 1 || name.length > 100) {
    return res.status(422).json({ status: 422, error: "name must be 1–100 characters", field: "name" });
  }
  if (!phone) {
    return res.status(422).json({ status: 422, error: "phone is required", field: "phone" });
  }
  if (!PHONE_PATTERN.test(phone)) {
    return res.status(422).json({ status: 422, error: "phone must be 11 digits Philippine format (09XXXXXXXX)", field: "phone" });
  }
  if (!address) {
    return res.status(422).json({ status: 422, error: "address is required", field: "address" });
  }
  if (typeof address !== "string") {
    return res.status(422).json({ status: 422, error: "address must be text", field: "address" });
  }
  if (address.length < 5 || address.length > 250) {
    return res.status(422).json({ status: 422, error: "address must be 5–250 characters", field: "address" });
  }
  // --- ALL VALIDATION PASSED ---

  return res.status(201).json({
    status: 201,
    data: { message: "createCustomer stub", received: { name, phone, address } },
    error: null
  });
});

// PUT /customers/:id — Update customer with validation
app.put('/customers/:id', (req, res) => {
  const { id } = req.params;
  const { name, phone, address } = req.body;
  const PHONE_PATTERN = /^09\d{9}$/;

  // --- GUARD CLAUSES ---
  if (name !== undefined) {
    if (typeof name !== "string") {
      return res.status(422).json({ status: 422, error: "name must be text", field: "name" });
    }
    if (name.length < 1 || name.length > 100) {
      return res.status(422).json({ status: 422, error: "name must be 1–100 characters", field: "name" });
    }
  }
  if (phone !== undefined && !PHONE_PATTERN.test(phone)) {
    return res.status(422).json({ status: 422, error: "phone must be 11 digits Philippine format (09XXXXXXXX)", field: "phone" });
  }
  if (address !== undefined) {
    if (typeof address !== "string") {
      return res.status(422).json({ status: 422, error: "address must be text", field: "address" });
    }
    if (address.length < 5 || address.length > 250) {
      return res.status(422).json({ status: 422, error: "address must be 5–250 characters", field: "address" });
    }
  }
  // --- ALL VALIDATION PASSED ---

  return res.status(200).json({
    status: 200,
    data: { message: "updateCustomer stub", id: id, received: { name, phone, address } },
    error: null
  });
});

// DELETE /customers/:id — Delete customer
app.delete('/customers/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    status: 200,
    data: { message: "deleteCustomer stub", deletedId: id },
    error: null
  });
});

// ==========================================
// 💰 SALES ROUTES
// ==========================================

// GET /sales — View all sales records
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
// START SERVER
// ==========================================
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

module.exports = app;
