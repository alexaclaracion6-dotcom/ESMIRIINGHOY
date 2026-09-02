// ✅ GET /orders — List All Orders
const listOrders = async (req, res) => {
  const orders = []; // ← await orders.getAll() later

  return res.status(200).json({
    status: 200,
    data: orders,
    error: null
  });
};

module.exports = listOrders;
