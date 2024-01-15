import "./App.css";
import { Route, Routes } from "react-router-dom";
import ListBooks from "./ListBooks.js";
import Search from "./Search.js";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={
          <ListBooks />
        }/>
        <Route path="/search" element={
          <Search />
        }/>
      </Routes>
    </div>
  );
}

export default App;
