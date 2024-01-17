import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';

const ListBooks = ({ onChangeShelf, currentlyReading, wantToRead, read }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf title="Currently Reading" books={currentlyReading} onChangeShelf={onChangeShelf}/>
          <Bookshelf title="Want to Read" books={wantToRead} onChangeShelf={onChangeShelf}/>
          <Bookshelf title="Read" books={read} onChangeShelf={onChangeShelf}/>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search"> Add a book </Link>
      </div>
    </div>
  )
}

export default ListBooks;