import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";

const Book = ({ book, onChangeShelf }) => {
  const updateShelf = (newShelf) => {
    onChangeShelf(book, newShelf);
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
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  )
}

Book.propTypes = {
  book: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func
}

export default Book;