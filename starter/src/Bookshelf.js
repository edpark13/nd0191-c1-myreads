import PropTypes from "prop-types";
import Book from "./Book";

const Bookshelf = ({ title, books, onChangeShelf }) => {

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books" key={title}>
        <ol className="books-grid">
          {books.map((book) => (<Book book={book} onChangeShelf={onChangeShelf}/>))}
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default Bookshelf;