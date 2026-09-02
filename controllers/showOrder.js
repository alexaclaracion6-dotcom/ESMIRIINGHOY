// ✅ GET /orders/:id — Show One Order
const showOrder = async (req, res) => {
  const { id } = req.validatedParams;
  const order = { id: id }; // ← await orders.getById(id) later

  return res.status(200).json({
    status: 200,
    data: order,
    error: null
  });
};

module.exports = showOrder;
