// controllers/itemsController.js

// ✅ Standard Success Response Helper
const successResponse = (data, message = 'Success') => ({
  success: true,
  data,
  message
});

// ✅ Standard Error Response Helper
const errorResponse = (error, message, statusCode) => ({
  success: false,
  error,
  message,
  statusCode
});

// ✅ CREATE — Controller Function
exports.create = async (req, res) => {
  const { title, description } = req.body;

  // 🛡️ VALIDATION GUARD — inside controller, NOT route!
  if (!title || typeof title !== 'string' || title.trim().length < 3) {
    return res.status(422).json(
      errorResponse('Validation failed', 'Title is required (min 3 characters)', 422)
    );
  }

  // ✅ 🔒 AUTHORIZATION GUARD — inside controller
  const userId = req.user?.id || 'test-user'; // get actual logged-in user
  if (!userId) {
    return res.status(403).json(
      errorResponse('Forbidden', 'You must be logged in', 403)
    );
  }

  // ✅ Business Logic / CRUD Operation
  const newItem = {
    id: Date.now(),
    title: title.trim(),
    description: description || '',
    createdBy: userId
  };

  // ✅ Return STANDARD SUCCESS ENVELOPE
  return res.status(201).json(
    successResponse(newItem, 'Item created successfully')
  );
};

// ✅ UPDATE — Controller Function
exports.update = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const userId = req.user?.id || 'test-user';
  const itemOwnerId = 'test-user'; // ← get from your database

  // 🔒 Auth Guard — 403
  if (userId !== itemOwnerId) {
    return res.status(403).json(
      errorResponse('Forbidden', 'Not allowed to modify this item', 403)
    );
  }

  // 🛡️ Validation Guard — 422
  if (!title || typeof title !== 'string' || title.trim().length < 3) {
    return res.status(422).json(
      errorResponse('Validation failed', 'Title must be at least 3 characters', 422)
    );
  }

  // ✅ CRUD / Update Logic
  const updatedItem = { id, title: title.trim() };

  // ✅ Standard Success Response
  return res.json(
    successResponse(updatedItem, 'Item updated successfully')
  );
};

// ✅ READ / LIST — Controller Function
exports.getAll = async (req, res) => {
  // Your database/read logic here
  const items = [];
  return res.json(successResponse(items, 'Items retrieved'));
};

// ✅ DELETE — Controller Function
exports.remove = async (req, res) => {
  const { id } = req.params;
  const userId = req.user?.id || 'test-user';
  const itemOwnerId = 'test-user';

  // 🔒 Auth Guard
  if (userId !== itemOwnerId) {
    return res.status(403).json(
      errorResponse('Forbidden', 'Not allowed to delete this item', 403)
    );
  }

  // ✅ Delete logic
  return res.json(successResponse({ id }, 'Item deleted successfully'));
};
