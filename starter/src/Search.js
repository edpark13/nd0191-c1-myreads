import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from './BooksAPI.js'
import Bookshelf from "./Bookshelf.js";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (event) => {
    // async function searchBooks(values) {
    //   await BooksAPI.search(values, 20)
    // }

    event.preventDefault()
    // console.log("event", event.target.search.value)
    // setBooks(searchBooks(event.target.search.value));
    // console.log(books)
    // console.log("search", event.target.search.value);
    // setSearchValue(event.target.search.value);
    // setSearchValue(event.target.search.value);
    // setBooks(searchBooks());
    searchBooks()
  }

  async function searchBooks() {
    console.log("searchValue", searchValue);
    // const response = await BooksAPI.search(searchValue, 20);
    // console.log("response", response);
    // return response;
    setBooks(await BooksAPI.search(searchValue, 20));
  }

  // useEffect(() => {
  //   searchBooks()
  //   console.log("books", books);
  // }, []);
  
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link
          exact to="/"
          className="close-search"
        >
          Close
        </Link>
        <div className="search-books-input-wrapper">
          {/* <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            name="search"
            onSubmit={handleSubmit}
          /> */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              name="search"
              onChange={e => setSearchValue(e.target.value)}
            />
          </form>
        </div>
      </div>
      {books.length !== 0 && <Bookshelf title="Search Results" books={books} onChangeShelf={(e) => {console.log(e)}} />}
      {/* <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div> */}
    </div>
  )
}

export default Search;