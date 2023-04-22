import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/TopBar'
import { Route, Routes, Link } from 'react-router-dom'
import  Home  from "./components/Home"
//import { NewBook } from './components/NewBook'
import { Magazines } from './components/Magazines'
// import SearchResultsPage from './components/SearchResultsPage'
import BookCard from './components/BookCard'
// import { Cart } from './components/Cart'
import { Book } from './components/Book'
import SearchResults from './components/SearchResults';

export default function App() {
  return (

    <>
    {/* <Routes location="/books">

      <Route path="/books" element={<h1>Extra Content</h1>} ></Route>
    </Routes> */}
    <h1>Book</h1>
    <nav>

      <ul>
        <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/Books">Books</Link>
          </li>
          <li>
          <Link to="/Magazines">Magazines</Link>
          </li>
          {/* <li>
          <Link to="/Cart">Cart </Link>
          </li>
         */}
          
      </ul>
    </nav>
  
    <TopBar /> 
    {/* nav bar */}
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/Books/*" element={<Book />}  />
        <Route path="/Magazines/*" element={<Magazines />}  />
        <Route path="/search/:searchQuery" element={<SearchResults />} />
       </Routes>

    </>
  )
}


