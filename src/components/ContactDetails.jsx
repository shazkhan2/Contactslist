import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Favorite from "./Favorite";
import DeleteContact from "./DeleteContact";
import EditContact from "./EditContact";

const ContactDetails = () => {
  const { contactId } = useParams();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const contactResponse = await fetch(`http://localhost:5000/api/contacts/${contactId}`);
        const contactData = await contactResponse.json();
        setContact(contactData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching contact details:", error);
        setLoading(false);
      }
    };

    fetchContactDetails();
  }, [contactId]);

  if (loading) {
    return <div>Loading contact details...</div>;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    setIsDeleting(true);
  };

  return (
    <div id="contact">
      <div>
        <img alt={`${contact.first} ${contact.last} avatar`} src={contact.avatar} />
      </div>
      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}
        </h1>
        {contact.twitter && (
          <p>
            <a href={`https://twitter.com/${contact.twitter}`}>{contact.twitter}</a>
          </p>
        )}
        {contact.notes && <p>{contact.notes}</p>}
        <Favorite contact={contact} />

        <div>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      </div>

      {isEditing && <EditContact contactId={contactId} />}
      {isDeleting && <DeleteContact contactId={contactId} />}
    </div>
  );
};

export default ContactDetails;
