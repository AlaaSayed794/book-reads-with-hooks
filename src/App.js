import "./App.css";
import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import SearchPage from "./components/SearchPage";
import Home from "./components/Home";

function App() {
  //const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      <div>
        <Routes>
          <Route path='/search' element={
            <SearchPage />
          } />
          <Route exact path='/' element={
            <Home />
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
