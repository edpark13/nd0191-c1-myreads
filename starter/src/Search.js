import { Link } from "react-router-dom";
import { useState } from "react";
import * as BooksAPI from './BooksAPI.js'
import Bookshelf from "./Bookshelf.js";

const Search = ({ onChangeShelf, currentlyReading, wantToRead, read }) => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  const currentlyReadingIds = currentlyReading.map(book => book.id);
  const wantToReadIds = wantToRead.map(book => book.id);
  const readIds = read.map(book => book.id);

  async function searchBooks(newQuery) {
    if (newQuery === "") {
      setQuery("");
      return setBooks([]);
    }
    setQuery(newQuery);
    const result = await BooksAPI.search(newQuery, 20);
    if (result.error) {
      console.log("No books returned");
      return setBooks([]);
    }
    const books = result.map(book => {
      if (currentlyReadingIds.includes(book.id)) {
        book.shelf = "currentlyReading";
      } else if (wantToReadIds.includes(book.id)) {
        book.shelf = "wantToRead";
      } else if (readIds.includes(book.id)) {
        book.shelf = "read";
      } else {
        book.shelf = "none";
      }
      return book;
    })
    setBooks(books)
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