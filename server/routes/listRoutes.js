const express = require("express");
const {
  getLists,
  getListById,
  createList,
  updateList,
  deleteList,
} = require("../controllers/listController");

const router = express.Router();

// Routes
router.get("/", getLists); // GET all lists
router.get("/:id", getListById); // GET a single list by ID
router.post("/", createList); // POST a new list
router.put("/:id", updateList); // PUT (update) a list by ID
router.delete("/:id", deleteList); // DELETE a list by ID

module.exports = router;
