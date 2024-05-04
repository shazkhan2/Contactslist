import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import NewContact from "./NewContact";

const Sidebar = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactsList = async () => {
      try {
        const contactsResponse = await fetch("/api/contacts");
        const contactsData = await contactsResponse.json();
        setContacts(contactsData);
        setFilteredContacts(contactsData); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching contacts:", error);
        setLoading(false);
      }
    };

    fetchContactsList();
  }, []);

  const addContact = async (newContact) => {
    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact),
      });
      if (response.ok) {
        const contactsResponse = await fetch("/api/contacts");
        const contactsData = await contactsResponse.json();
        setContacts(contactsData);
        setFilteredContacts(contactsData);
      } else {
        console.error("Failed to add contact");
      }
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="containerList">
      <div className="titleContainer">
        <h2>Remix contacts</h2>
      </div>
      <SearchBar contacts={contacts} setFilteredContacts={setFilteredContacts} />
      <NewContact addContact={addContact} />
      <div className="contactsList">
        <nav>
          <ul>
            {filteredContacts.map((contact) => (
              <li key={contact.id}>
                <Link to={`/contacts/${contact.id}`}>
                  {contact.first} {contact.last}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
