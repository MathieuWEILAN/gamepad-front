import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Games from "./pages/Games";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faPlusCircle,
  faCaretDown,
  faCaretUp,
  faSortDown,
  faSortUp,
  faGamepad,
  faStar,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faSearch,
  faPlusCircle,
  faCaretDown,
  faCaretUp,
  faSortDown,
  faSortUp,
  faGamepad,
  faStar,
  faSort
);

require("dotenv").config();

const apikey = "3d0967870fc44ddd8927c371f864b54f";

function App() {
  const [search, setSearch] = useState("");
  const [genres, setGenres] = useState("");

  const handleSearch = (event) => {
    let value = event.target.value;
    setSearch(value);
  };

  return (
    <Router>
      <Header handleSearch={handleSearch} />
      <Menu setGenres={setGenres} />
      <Routes>
        <Route path="/" element={<Home search={search} genres={genres} />} />
        <Route path="/games/:id" element={<Games apikey={apikey} />} />
      </Routes>
    </Router>
  );
}

export default App;
