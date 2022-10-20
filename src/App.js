import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import SearchPage from "./components/SearchPage";
import Home from "./components/Home";
import * as BooksAPI from './BooksAPI'
import { InfinitySpin } from "react-loader-spinner";


function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const moveBook = () => {
    console.log("moved")
  }

  const getBooks = async () => {
    setBooks(await BooksAPI.getAll())
    setLoading(false)
  }

  useEffect(() => {
    getBooks()
  }, []);

  return (
    <div className="app">
      {loading ? <InfinitySpin /> :
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
      }
    </div>
  );
}

export default App;
