import React from "react";
import { useHistory } from "react-router-dom";

const DeleteContact = ({ contactId }) => {
  const history = useHistory();

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/contacts/${contactId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        history.push("/");
      } else {
        console.error("Failed to delete contact");
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div id="delete-contact">
      <p>Are you sure you want to delete this contact?</p>
      <button onClick={handleDelete}>Yes, delete</button>
      <button onClick={() => history.goBack()}>Cancel</button>
    </div>
  );
};

export default DeleteContact;
