import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const EditContact = ({ contactId }) => {
  const [contact, setContact] = useState(null);


  const fetchContactDetails = async () => {
    try {
      const contactResponse = await fetch(`http://localhost:5000/api/contacts/${contactId}`);
      const contactData = await contactResponse.json();
      setContact(contactData);
    } catch (error) {
      console.error("Error fetching contact details:", error);
    }
  };

  useEffect(() => {
    if (contactId) {
      fetchContactDetails();
    }
  }, [contactId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = contactId ? "PUT" : "POST";
      const url = contactId ? `/api/contacts/${contactId}` : "/api/contacts";
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
      } else {
        console.error("Failed to save contact");
      }
    } catch (error) {
      console.error("Error saving contact:", error);
    }
  };
if (contact==null) {
  return;
}
  return (
    <Form id="contact-form" onSubmit={handleSubmit}>
      <p>
        <span>Name</span>
        <input
          value={contact.first}
          onChange={handleInputChange}
          aria-label="First name"
          name="first"
          type="text"
          placeholder="First"
        />
        <input
          value={contact.last}
          onChange={handleInputChange}
          aria-label="Last name"
          name="last"
          placeholder="Last"
          type="text"
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          value={contact.twitter}
          onChange={handleInputChange}
          name="twitter"
          placeholder="@jack"
          type="text"
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          value={contact.avatar}
          onChange={handleInputChange}
          aria-label="Avatar URL"
          name="avatar"
          placeholder="https://example.com/avatar.jpg"
          type="text"
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          value={contact.notes}
          onChange={handleInputChange}
          name="notes"
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
};

export default EditContact;
