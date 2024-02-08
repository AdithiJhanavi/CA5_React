import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar({ onSearch }) {
  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle changes in the search input field
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle form submission when searching
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    onSearch(searchQuery); // Call the onSearch function passed as prop
  };

  // Function to clear the search query and reset the search results
  const clearSearchQuery = () => {
    setSearchQuery(""); // Clear the search query state
    onSearch(""); // Clear the search results by passing an empty string
  };

  return (
    <div className="main">
      <nav className="nav">
        {/* Link to navigate to the main page. onClick event to clear the search query */}
        <Link to="/" className="site-title" onClick={clearSearchQuery}>
          Kalvium Books
        </Link>

        {/* Search form */}
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="search"
            className="search"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search"
          />
          <button className="btn" type="submit">Search</button>
        </form>

        {/* Link to navigate to the registration form */}
        <Link to="/form" className="register">Register</Link>
      </nav>
    </div>
  );
}
