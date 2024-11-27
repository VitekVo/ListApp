const List = require("../models/listModel");

// Get all lists
const getLists = async (req, res) => {
  try {
    const lists = await List.find(); // Retrieve all lists
    res.json(lists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single list by ID
const getListById = async (req, res) => {
  try {
    const list = await List.findById(req.params.id);
    if (!list) {
      return res.status(404).json({ message: "List not found" });
    }
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new list
const createList = async (req, res) => {
  const { name, host, guests, items } = req.body;

  try {
    const newList = new List({
      name,
      host,
      guests: guests || [], // Optional guests array
      items: items || [], // Optional items array
    });
    const savedList = await newList.save();
    res.status(201).json(savedList);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a list by ID
const updateList = async (req, res) => {
  try {
    const updatedList = await List.findByIdAndUpdate(
      req.params.id,
      req.body, // Accepts fields to update
      { new: true } // Return the updated document
    );

    if (!updatedList) {
      return res.status(404).json({ message: "List not found" });
    }

    res.json(updatedList);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a list by ID
const deleteList = async (req, res) => {
  try {
    const deletedList = await List.findByIdAndDelete(req.params.id);
    if (!deletedList) {
      return res.status(404).json({ message: "List not found" });
    }
    res.status(204).send(); // No content
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getLists,
  getListById,
  createList,
  updateList,
  deleteList,
};
