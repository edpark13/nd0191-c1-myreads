import { Link } from "react-router-dom";
import { useState } from "react";
import * as BooksAPI from './BooksAPI.js'
import Bookshelf from "./Bookshelf.js";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    searchBooks()
  }

  async function searchBooks() {
    setBooks(await BooksAPI.search(searchValue, 20));
  }

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
      <Bookshelf title="Search Results" books={books} onChangeShelf={(e) => {console.log(e)}} />
    </div>
  )
}

export default Search;