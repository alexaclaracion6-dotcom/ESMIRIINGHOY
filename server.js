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