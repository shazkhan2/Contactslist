import React, { useState } from "react";

const SearchBar = ({ contacts, setFilteredContacts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = contacts.filter(
      (contact) =>
        contact.first.toLowerCase().includes(term) ||
        contact.last.toLowerCase().includes(term)
    );
    setFilteredContacts(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
