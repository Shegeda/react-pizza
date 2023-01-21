import React, {useState} from "react";
import {Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import NotFoundBlock from "./components/NotFoundBlock";
import Home from "./pages/Home";
import Cart from "./pages/Cart";



// import pizzas from "./assets/pizzas.json";

import "./scss/app.scss";

function App() {
  const [searchValue, setSearchValue] = useState('');

  console.log(searchValue, "input Changed!")

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue}/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="*" element={<NotFoundBlock/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
