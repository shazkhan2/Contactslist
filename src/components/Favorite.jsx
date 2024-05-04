import React from "react";
import { Form } from "react-bootstrap";

const Favorite = ({ contact }) => {
  const { favorite } = contact;

  const handleFavoriteClick = async () => {
    try {
      const response = await fetch(`/api/contacts/${contact.id}/favorite`, {
        method: "POST",
        body: JSON.stringify({ favorite: !favorite }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to update favorite status");
      }
    } catch (error) {
      console.error("Error updating favorite status:", error);
    }
  };

  return (
    <Form method="post" onSubmit={handleFavoriteClick}>
      <button
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        type="submit"
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
};

export default Favorite;
