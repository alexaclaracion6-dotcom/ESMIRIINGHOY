// menu.js — THIS IS YOUR ROUTES FILE (THIN — ONLY PATHS!)
const express = require("express");
const router = express.Router();

// ✅ Connect routes to your controller
const menuController = require("./itemsController");

// ✅ MATCHES YOUR TABLE IN routes.md EXACTLY
router.get("/", menuController.listMenu);        // GET /menu
router.get("/:id", menuController.showMenu);      // GET /menu/:id
router.post("/", menuController.createMenu);     // POST /menu
router.put("/:id", menuController.updateMenu);   // PUT /menu/:id
router.delete("/:id", menuController.deleteMenu); // DELETE /menu/:id

module.exports = router;
