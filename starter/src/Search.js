import { Link } from "react-router-dom";
import { useState } from "react";
import * as BooksAPI from './BooksAPI.js'
import Bookshelf from "./Bookshelf.js";

const Search = ({ onChangeShelf }) => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  async function searchBooks(newQuery) {
    if (!newQuery) {
      return;
    }
    setQuery(newQuery);
    const result = await BooksAPI.search(newQuery, 20);
    if (!result) {
      console.log("No books returned");
      return;
    }
    setBooks(result)
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
          <form>
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              name="search"
              value={query}
              onChange={e => searchBooks(e.target.value)}
            />
          </form>
        </div>
      </div>
      <Bookshelf title="Search Results" books={books} onChangeShelf={onChangeShelf} />
    </div>
  )
}

export default Search;