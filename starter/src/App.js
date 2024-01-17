import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import * as BooksAPI from './BooksAPI.js';
import ListBooks from "./ListBooks.js";
import Search from "./Search.js";

function App() {
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);

  const updateBook = async (book, newShelf) => {
    return await BooksAPI.update(book, newShelf)
  }

  useEffect(() => {
    const fetchBooks = async () => {
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
    if (!shelfStr) {
      return;
    }
    const filteredShelf = getShelf(shelfStr).filter((b) => b.id !== book.id)
    if (shelfStr === "currentlyReading") {
      setCurrentlyReading(filteredShelf)
    } else if (shelfStr === "wantToRead") {
      setWantToRead(filteredShelf)
    } else if (shelfStr === "read") {
      setRead(filteredShelf)
    }
  }

  const onChangeShelf = async (book, newShelf) => {
    await updateBook(book, newShelf);
    removeBookFromShelf(book);
    setBookToShelf(book, newShelf);
  }

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={
          <ListBooks onChangeShelf={onChangeShelf} currentlyReading={currentlyReading} wantToRead={wantToRead} read={read}/>
        }/>
        <Route path="/search" element={
          <Search onChangeShelf={onChangeShelf} currentlyReading={currentlyReading} wantToRead={wantToRead} read={read}/>
        }/>
      </Routes>
    </div>
  );
}

export default App;
