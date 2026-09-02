// ==========================================
// ✅ 1. SETUP — ALWAYS AT THE TOP
// ==========================================
const express = require('express');
const app = express(); // 🔑 NEVER DELETE THIS LINE!

// ==========================================
// ✅ 2. MIDDLEWARE
// ==========================================
app.use(express.json());

// Validation placeholder — Week 4 will replace with REAL validation
app.use((req, res, next) => {
  req.validatedBody = { ...req.body };
  req.validatedParams = { ...req.params };
  next();
});

// ==========================================
// ✅ 3. IMPORT CONTROLLERS — ONLY ONCE!
// ==========================================
const listOrders = require('./controllers/listOrders');
const showOrder = require('./controllers/showOrder');
const createOrder = require('./controllers/createOrder');
const updateOrder = require('./controllers/updateOrder');
const deleteOrder = require('./controllers/deleteOrder');

// ==========================================
// ✅ 4. ROUTES → CONTROLLERS (THIN!)
// ==========================================
app.get('/orders', listOrders);
app.get('/orders/:id', showOrder);
app.post('/orders', createOrder);
app.put('/orders/:id', updateOrder);
app.delete('/orders/:id', deleteOrder);

// ==========================================
// ✅ 5. START SERVER
// ==========================================
const PORT = 3000;
app.listen(PORT, () => console.log("✅ Server running on port 3000"));
