import Bookshelf from './Bookshelf';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI.js'

const ListBooks = () => {
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const books = await BooksAPI.getAll();
      setCurrentlyReading(books.filter((book) => book.shelf === "currentlyReading"))
      setWantToRead(books.filter((book) => book.shelf === "wantToRead"))
      setRead(books.filter((book) => book.shelf === "read"))
    }

    fetchBooks();

    return () => {
      console.log("No books found");
    }
  }, [])

  const getShelf = (shelf) => {
    if (shelf === "currentlyReading") {
      return currentlyReading;
    } else if (shelf === "wantToRead") {
      return wantToRead;
    } else if (shelf === "read") {
      return read;
    }
  }

  const setBookToShelf = (book, shelf) => {
    if (shelf === "currentlyReading") {
      setCurrentlyReading([...currentlyReading, book])
    } else if (shelf === "wantToRead") {
      setWantToRead([...wantToRead, book])
    } else if (shelf === "read") {
      setRead([...read, book])
    }
  }

  const removeBookFromShelf = (book) => {
    const shelfStr = book.shelf;
    const filteredShelf = getShelf(shelfStr).filter((b) => b.id !== book.id)
    if (shelfStr === "currentlyReading") {
      setCurrentlyReading(filteredShelf)
    } else if (shelfStr === "wantToRead") {
      setWantToRead(filteredShelf)
    } else if (shelfStr === "read") {
      setRead(filteredShelf)
    }
  }

  const updateShelf = (book, newShelf) => {
    removeBookFromShelf(book)
    setBookToShelf(book, newShelf);
  }

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf title="Currently Reading" books={currentlyReading} onChangeShelf={updateShelf}/>
          <Bookshelf title="Want to Read" books={wantToRead} onChangeShelf={updateShelf}/>
          <Bookshelf title="Read" books={read} onChangeShelf={updateShelf}/>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search"> Add a book </Link>
      </div>
    </div>
  )
}

export default ListBooks;