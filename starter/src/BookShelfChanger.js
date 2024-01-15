import { useState } from "react";
import PropTypes from "prop-types";

const BookShelfChanger = ({ shelf, onUpdateBook }) => {
  const [value, setValue] = useState(shelf);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    onUpdateBook(newValue);
  }

  return (
    <div className="book-shelf-changer">
      <select value={value} onChange={handleChange}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

BookShelfChanger.propTypes = {
  shelf: PropTypes.string.isRequired,
  onUpdateBook: PropTypes.func.isRequired
}

export default BookShelfChanger;