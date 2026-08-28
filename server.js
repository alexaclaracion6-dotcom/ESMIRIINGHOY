const express = require('express');
const app = express();
app.use(express.json());

// GET /orders — View all orders
app.get('/orders', (req, res) => {
  return res.status(200).json({
    status: 200,
    data: { message: "listOrders stub" },
    error: null
  });
});

// GET /orders/:id — View one order
app.get('/orders/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    status: 200,
    data: { message: "showOrder stub", id: id },
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

const PORT = 3000;
app.listen(PORT, () => console.log("✅ Server running on port 3000"));
