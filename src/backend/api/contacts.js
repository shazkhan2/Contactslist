const express = require("express");
const router = express.Router();
const knex = require("../database");

// GET - Return all contacts
router.get("/", async (request, response) => {
  try {
    const allContacts = await knex("contacts").select("*");
    response.json(allContacts);
  } catch (error) {
    throw error;
  }
});

// Post - Add a new contact to the database
router.post("/", async (request, response) => {
  const addContact = request.body;
  addContact.createdAt = new Date();
  addContact.favorite = false;

  try {
    await knex("contacts").insert(addContact);
    response.status(201).json("New contact has been added");
  } catch (error) {
    console.error(error); 
    response.status(500).json({ error: "Failed to add a new contact" });
  }
});

// Get - /api/contacts/:id - Return the contact by id
router.get("/:id", async (request, response) => {
  const { id } = request.params; 

  try {
    const contact = await knex("contacts").select("*").where({ id }).first(); 
    if (contact) {
      response.json(contact);
    } else {
      response.status(404).json({ error: "Contact not found" });
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Failed to retrieve the contact" });
  }
});

// PUT - /api/contacts/:id - Update the contact by id
router.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const updatedContact = request.body;

    const results = await knex("contacts")
      .update(updatedContact).where({ id });

    if (results) {
      return response.json({ message: "Contact updated successfully" });
    } else {
      return response.status(404).json({ error: "Contact not found" });
    }
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Error updating contact" });
  }
});

// DELETE - /api/contacts/:id - Delete the contact by id
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const contact = await knex("contacts").select("*").where({ id }).first();

    if (!contact) {
      return response.status(404).json({ error: "Contact not found" });
    }

    await knex("contacts").where({ id }).del();

    response.json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Error deleting contact" });
  }
});

// POST - /api/contacts/:id/favorite - Toggle the favorite status
router.post("/:id/favorite", async (request, response) => {
  try {
    const { id } = request.params;
    const { favorite } = request.body;

    await knex("contacts").update({ favorite }).where({ id });

    response.json({ message: "Favorite status updated successfully" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Error updating favorite status" });
  }
});

module.exports = router;
