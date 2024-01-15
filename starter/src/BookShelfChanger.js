import { useState, useEffect } from "react";

const BookShelfChanger = ({ shelf, onUpdateBook }) => {
  const [value, setValue] = useState(shelf);

  // const handleChange = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.value)
  //   console.log(value)
  //   setValue(event.target.value);
  //   console.log(value)
  //   onUpdateBook(event.target.value);
  // }

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    onUpdateBook(newValue);
  }

  // useEffect(() => {
  //   console.log(value)
  // }, [value])

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

export default BookShelfChanger;