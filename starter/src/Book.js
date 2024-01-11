import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import BookShelfChanger from "./BookShelfChanger";


const Book = ({ book, onChangeShelf }) => {
  const updateShelf = (newShelf) => {
    async function updateBook(newShelf) {
      await BooksAPI.update(book, newShelf);
    }

    onChangeShelf(book, newShelf);
    updateBook(newShelf);
  }

  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
          <BookShelfChanger shelf={book.shelf} onUpdateBook={updateShelf}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}</div>
      </div>
    </li>
  )
}

export default Book;