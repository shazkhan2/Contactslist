import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const EditContact = ({ contactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const contactResponse = await fetch(`http://localhost:5000/api/contacts/${contactId}`);
        const contactData = await contactResponse.json();
        setContact(contactData);
      } catch (error) {
        console.error("Error fetching contact details:", error);
      }
    };

    fetchContactDetails();
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
      const response = await fetch(`/api/contacts/${contactId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        console.log("Contact updated successfully");
      } else {
        console.error("Failed to update contact");
      }
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  if (!contact) {
    return <div>Loading contact details...</div>;
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
          value={contact.notes || " "}
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
