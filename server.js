// POST /orders — Create order
app.post('/orders', (req, res) => {
  const { item, qty, status } = req.body;

  // 🔴 GUARD CLAUSES — Check BAD cases FIRST
  if (!item) {
    return res.status(422).json({
      status: 422,
      error: "item is required",
      data: null
    });
  }
  if (typeof item !== 'string') {
    return res.status(422).json({
      status: 422,
      error: "item must be text",
      data: null
    });
  }
  if (item.length < 1 || item.length > 100) {
    return res.status(422).json({
      status: 422,
      error: "item must be 1–100 characters",
      data: null
    });
  }
  if (qty === undefined) {
    return res.status(422).json({
      status: 422,
      error: "qty is required",
      data: null
    });
  }
  if (typeof qty !== 'number') {
    return res.status(422).json({
      status: 422,
      error: "qty must be a number",
      data: null
    });
  }
  if (qty < 1 || qty > 999) {
    return res.status(422).json({
      status: 422,
      error: "qty must be between 1–999",
      data: null
    });
  }
  const allowedStatus = ['pending', 'paid', 'shipped'];
  if (!status || !allowedStatus.includes(status)) {
    return res.status(422).json({
      status: 422,
      error: "status must be: pending, paid, or shipped",
      data: null
    });
  }

  // ✅ ALL CHECKS PASSED — Continue (stub response)
  return res.status(201).json({
    status: 201,
    data: { message: "createOrder stub", item, qty, status },
    error: null
  });
});
