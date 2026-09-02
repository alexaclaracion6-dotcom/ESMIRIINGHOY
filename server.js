// Import controllers
const ordersController = require('./controllers/ordersController');
// Import ALL 5 controllers
const listOrders = require('./controllers/listOrders');
const showOrder = require('./controllers/showOrder');
const createOrder = require('./controllers/createOrder');
const updateOrder = require('./controllers/updateOrder');
const deleteOrder = require('./controllers/deleteOrder');

app.use(express.json());

// Validation placeholder
app.use((req, res, next) => {
  req.validatedBody = { ...req.body };
  req.validatedParams = { ...req.params };
  next();
});

// Routes → Controllers
app.get('/orders', listOrders);
app.get('/orders/:id', showOrder);
app.post('/orders', createOrder);
app.put('/orders/:id', updateOrder);
app.delete('/orders/:id', deleteOrder);

const PORT = 3000;
app.listen(PORT, () => console.log("✅ Server running on port 3000"));

// POST /orders — Create order
app.post('/orders', (req, res) => {
  const { item, qty, status } = req.body;

  // 🔴 Guard Clauses — ALL errors use SAME shape
  if (!item) {
    return res.status(422).json({
      status: 422,
      error: "item is required",
      field: "item"
    });
  }
  if (typeof item !== 'string') {
    return res.status(422).json({
      status: 422,
      error: "item must be text",
      field: "item"
    });
  }
  if (item.length < 1 || item.length > 100) {
    return res.status(422).json({
      status: 422,
      error: "item must be 1–100 characters",
      field: "item"
    });
  }
  if (qty === undefined) {
    return res.status(422).json({
      status: 422,
      error: "qty is required",
      field: "qty"
    });
  }
  if (typeof qty !== 'number') {
    return res.status(422).json({
      status: 422,
      error: "qty must be a number",
      field: "qty"
    });
  }
  if (qty < 1 || qty > 999) {
    return res.status(422).json({
      status: 422,
      error: "qty must be between 1–999",
      field: "qty"
    });
  }
  const allowedStatus = ['pending', 'paid', 'shipped'];
  if (!status || !allowedStatus.includes(status)) {
    return res.status(422).json({
      status: 422,
      error: "status must be: pending, paid, or shipped",
      field: "status"
    });
  }

  // ✅ Valid — success response
  return res.status(201).json({
    status: 201,
    data: { message: "createOrder stub", item, qty, status },
    error: null
  });
});

// PUT /orders/:id — Update order
app.put('/orders/:id', (req, res) => {
  const { id } = req.params;
  const { item, qty, status } = req.body;

  if (item !== undefined) {
    if (typeof item !== 'string') {
      return res.status(422).json({
        status: 422,
        error: "item must be text",
        field: "item"
      });
    }
    if (item.length < 1 || item.length > 100) {
      return res.status(422).json({
        status: 422,
        error: "item must be 1–100 characters",
        field: "item"
      });
    }
  }
  if (qty !== undefined) {
    if (typeof qty !== 'number') {
      return res.status(422).json({
        status: 422,
        error: "qty must be a number",
        field: "qty"
      });
    }
    if (qty < 1 || qty > 999) {
      return res.status(422).json({
        status: 422,
        error: "qty must be between 1–999",
        field: "qty"
      });
    }
  }
  if (status !== undefined) {
    const allowedStatus = ['pending', 'paid', 'shipped'];
    if (!allowedStatus.includes(status)) {
      return res.status(422).json({
        status: 422,
        error: "status must be: pending, paid, or shipped",
        field: "status"
      });
    }
  }

  // ✅ Valid — success response
  return res.status(200).json({
    status: 200,
    data: { message: "updateOrder stub", id, item, qty, status },
    error: null
  });
});
