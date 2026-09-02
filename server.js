const express = require('express');
const app = express();  // 🔑 NEVER DELETE THIS LINE!

// ==========================================
// Middleware
// ==========================================
app.use(express.json());

// Validation placeholder
app.use((req, res, next) => {
  req.validatedBody = { ...req.body };
  req.validatedParams = { ...req.params };
  next();
});

// ==========================================
// Import Controllers
// ==========================================
const listOrders = require('./controllers/listOrders');
const showOrder = require('./controllers/showOrder');
const createOrder = require('./controllers/createOrder');
const updateOrder = require('./controllers/updateOrder');
const deleteOrder = require('./controllers/deleteOrder');

// ==========================================
// Routes
// ==========================================
app.get('/orders', listOrders);
app.get('/orders/:id', showOrder);
app.post('/orders', createOrder);
app.put('/orders/:id', updateOrder);
app.delete('/orders/:id', deleteOrder);

// ==========================================
// Start Server
// ==========================================
const PORT = 3000;
app.listen(PORT, () => console.log("✅ Server running on port 3000"));