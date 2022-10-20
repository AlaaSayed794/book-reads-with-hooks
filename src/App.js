import "./App.css";
import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import SearchPage from "./components/SearchPage";
import Home from "./components/Home";

function App() {
  const [books, setBooks] = useState([]);

  const moveBook = () => {
    console.log("moved")
  }
  return (
    <div className="app">
      <div>
        <Routes>
          <Route path='/search' element={
            <SearchPage moveBook={moveBook} books={books} />
          } />
          <Route exact path='/' element={
            <Home moveBook={moveBook} books={books} />
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
