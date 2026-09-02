// ==========================================
// 🟢 ORDERS CONTROLLER — THIN! NO VALIDATION!
// ==========================================

// GET ALL — listOrders
const listOrders = async (req, res) => {
  // 1. Get validated data (none needed for list)
  // 2. Call DATA LAYER ← (stubbed until Week 6)
  const orders = []; // ← will be replaced with: await orders.getAll()

  // 3. Return standardized response
  return res.status(200).json({
    status: 200,
    data: orders,
    error: null
  });
};

// GET ONE — showOrder
const showOrder = async (req, res) => {
  const { id } = req.validatedParams; // ✅ Already validated!

  // Call DATA LAYER
  const order = { id: id }; // ← await orders.getById(id)

  return res.status(200).json({
    status: 200,
    data: order,
    error: null
  });
};

// CREATE — createOrder
const createOrder = async (req, res) => {
  const data = req.validatedBody; // ✅ Already validated!

  // Call DATA LAYER
  const newOrder = { id: Date.now(), ...data }; // ← await orders.save(data)

  return res.status(201).json({
    status: 201,
    data: newOrder,
    error: null
  });
};

// UPDATE — updateOrder
const updateOrder = async (req, res) => {
  const { id } = req.validatedParams;
  const data = req.validatedBody; // ✅ Already validated!

  // Call DATA LAYER
  const updated = { id, ...data }; // ← await orders.update(id, data)

  return res.status(200).json({
    status: 200,
    data: updated,
    error: null
  });
};

// DELETE — deleteOrder
const deleteOrder = async (req, res) => {
  const { id } = req.validatedParams; // ✅ Already validated!

  // Call DATA LAYER
  // ← await orders.remove(id)

  return res.status(200).json({
    status: 200,
    data: { message: "Order deleted", id: id },
    error: null
  });
};

// ==========================================
// EXPORT ALL → so routes can USE them!
// ==========================================
module.exports = {
  listOrders,
  showOrder,
  createOrder,
  updateOrder,
  deleteOrder
};
