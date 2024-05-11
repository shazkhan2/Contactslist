import React, { useState } from "react";

const NewContact = ({ addContact }) => {
  const [contact, setContact] = useState({
    first: "",
    last: "",
    twitter: "",
    avatar: "",
    notes: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(contact);
    setContact({
      first: "",
      last: "",
      twitter: "",
      avatar: "",
      notes: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        name="first"
        value={contact.first}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="last"
        value={contact.last}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Twitter"
        name="twitter"
        value={contact.twitter}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Avatar URL"
        name="avatar"
        value={contact.avatar}
        onChange={handleInputChange}
      />
      <textarea
        placeholder="Notes"
        name="notes"
        value={contact.notes}
        onChange={handleInputChange}
      ></textarea>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default NewContact;
