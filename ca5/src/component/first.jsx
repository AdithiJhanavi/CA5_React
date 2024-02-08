import axios from 'axios';
import Navbar from './navbar'; // Importing Navbar component
import '../App.css'; // Importing CSS styles
import { useState, useEffect } from 'react';

function BookSearch() {
  // State variables for storing books data, filtered books, search query
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch data from the API when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://reactnd-books-api.udacity.com/books`,
        { headers: { 'Authorization': 'whatever-you-want' }}
      );
      // Set both books and filteredBooks state to fetched data
      setBooks(response.data.books);
      setFilteredBooks(response.data.books);
    } catch (error) {
      console.error("Error fetching data:", error); // Log error if fetching data fails
    }
  };

  // Function to handle search
  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery); // Update searchQuery state
    // Filter books based on searchQuery and update filteredBooks state
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} /> {/* Render Navbar component with handleSearch function passed as prop */}
      <div className="content">
        {/* Map through filteredBooks and render each book */}
        {filteredBooks.map((book, index) => (
          <div key={index} className="container">
            <h4>{book.title}</h4>
            <div className='s1'>
              <img src={book.imageLinks.smallThumbnail} alt={book.title} />
            </div>
            {/* Map through authors and render each author */}
            {book.authors.map((author, index) => (
              <div key={index} className='author'>{author}</div>
            ))}
            <div className='price'>Free</div> {/* Display price as Free */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookSearch;
