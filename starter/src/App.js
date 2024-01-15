import "./App.css";
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ListBooks from "./ListBooks.js";
import Search from "./Search.js";

function App() {
  // const [showSearchPage, setShowSearchpage] = useState(false);

  // const [books, useBook] = useState([]);

  // useEffect(() => {
  //   async function fetchBooks() {
  // })

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={
          <ListBooks />
        }/>
        <Route exact path="/search" element={
          <Search />
        }/>
      </Routes>
      {/* {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <ListBooks setShowSearchpage={setShowSearchpage}/>
      )} */}
      {/* <Link to="/search" className="close-search">Close</Link> */}
    </div>
  );
}

export default App;
