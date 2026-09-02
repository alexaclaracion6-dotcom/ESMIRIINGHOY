// ✅ PUT /orders/:id — Update Order
const updateOrder = async (req, res) => {
  const { id } = req.validatedParams;
  const data = req.validatedBody;
  const updatedOrder = { id, ...data }; // ← await orders.update(id, data) later

  return res.status(200).json({
    status: 200,
    data: updatedOrder,
    error: null
  });
};

module.exports = updateOrder;
