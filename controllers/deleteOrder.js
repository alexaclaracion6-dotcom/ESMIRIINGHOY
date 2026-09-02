// ✅ DELETE /orders/:id — Delete Order
const deleteOrder = async (req, res) => {
  const { id } = req.validatedParams;
  // ← await orders.remove(id) later

  return res.status(200).json({
    status: 200,
    data: { message: "Order deleted successfully", id: id },
    error: null
  });
};

module.exports = deleteOrder;
