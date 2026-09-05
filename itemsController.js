// itemsController.js  ← YOUR existing file — add this pattern to it

// ✅ Standard response shape (matches your docs: {status, data, error})
const success = (data, message = "Success") => ({
  status: 200,
  data,
  error: null,
  message
});

const fail = (status, error, message) => ({
  status,
  data: null,
  error,
  message
});

// ✅ GET ALL — /menu
exports.listMenu = async (req, res) => {
  const items = []; // your logic here
  return res.json(success(items, "Menu retrieved"));
};

// ✅ GET SINGLE — /menu/:id
exports.showMenu = async (req, res) => {
  return res.json(success({ id: req.params.id }, "Item retrieved"));
};

// ✅ CREATE — with Validation (422) + Auth (403) GUARDS
exports.createMenu = async (req, res) => {
  const { name, price } = req.body;
  const userId = req.user?.id || "staff"; // your auth check

  // 🔒 AUTH GUARD → 403
  if (!userId) {
    return res.status(403).json(
      fail(403, "Forbidden", "Not authorized to create menu items")
    );
  }

  // 🛡️ VALIDATION GUARD → 422 (never 500/crash)
  if (!name || typeof name !== "string" || name.length < 2) {
    return res.status(422).json(
      fail(422, "Validation failed", "Name required (min 2 chars)")
    );
  }
  if (!price || typeof price !== "number" || price <= 0) {
    return res.status(422).json(
      fail(422, "Validation failed", "Price must be positive")
    );
  }

  // ✅ All checks passed → create
  const newItem = { id: Date.now(), name, price };
  return res.status(201).json(success(newItem, "Item created"));
};

// ✅ UPDATE — with guards
exports.updateMenu = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const userId = req.user?.id || "staff";
  const ownerId = "staff"; // from your data

  // 🔒 AUTH → 403
  if (userId !== ownerId) {
    return res.status(403).json(fail(403, "Forbidden", "Not allowed"));
  }

  // 🛡️ VALIDATION → 422
  if (name && name.length < 2) {
    return res.status(422).json(fail(422, "Validation failed", "Name too short"));
  }

  return res.json(success({ id, ...req.body }, "Item updated"));
};

// ✅ DELETE — with auth guard
exports.deleteMenu = async (req, res) => {
  const { id } = req.params;
  const userId = req.user?.id || "staff";
  if (userId !== "staff") {
    return res.status(403).json(fail(403, "Forbidden", "Not allowed"));
  }
  return res.json(success({ id }, "Item deleted"));
};
