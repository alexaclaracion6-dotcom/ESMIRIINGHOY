// ✅ POST /orders — Create Order
const createOrder = async (req, res) => {
  const data = req.validatedBody;
  const newOrder = { id: Date.now(), ...data }; // ← await orders.save(data) later

  return res.status(201).json({
    status: 201,
    data: newOrder,
    error: null
  });
};

module.exports = createOrder;
