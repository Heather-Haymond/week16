import React, { useState } from 'react'
import TopBar from './components/TopBar'
import { Route, Routes, Link } from 'react-router-dom'
import  Home  from "./components/Home"
//import { NotFound } from './components/NotFound'
//import { BookLayout } from './BookLayout'
// import {  } from './BookRoutes'
//import { NewBook } from './components/NewBook'
import { Magazines } from './components/Magazines'
// import SearchResultsPage from './components/SearchResultsPage'
import BookDetailPage from './components/BookDetailPage'
import BookCard from './components/BookCard'
import { Cart } from './components/Cart'
import { Book } from './components/Book'
import { Review } from './components/Review'
import { ReviewForm } from './components/ReviewForm'
import { ReviewList } from './components/ReviewList'
export default function App() {
// const [bookList] = useState(TEST_BOOKS)
  return (

    <>
    {/* <Routes location="/books">

      <Route path="/books" element={<h1>Extra Content</h1>} ></Route>
    </Routes> */}
    <h1>Book</h1>
    <nav>

      <ul>
        <li>
          <Link to="/Home">Home</Link>
          </li>
          <li>
          <Link to="/Books">Books</Link>
          </li>
          <li>
          <Link to="/Magazines">Magazines</Link>
          </li>
          <li>
          <Link to="/Cart">Cart </Link>
          </li>
          <li>
          <Link to="/Review">Reviews </Link>
          </li>
          <li>
          <Link to="/ReviewForm">Add Review</Link>
          </li>
          <li>
          <Link to="/ReviewList">Review List</Link>
          </li>
          
      </ul>
    </nav>
  
    <TopBar /> 
    {/* nav bar */}
      <Routes>
        {/* <Route path="/" element={ <Home bookList={bookList} />} /> */}
        <Route path="/Books/*" element={<Book />}  />
        <Route path="/Magazines/*" element={<Magazines />}  />
        <Route path="/Cart/*" element={<Cart />} />
        <Route path="/Review/*" element={<Cart />} />
        <Route path="/ReviewForm/*" element={<Cart />} />
        <Route path="/ReviewList/*" element={<Cart />} />
        {/* <Route path="/Search" element={<SearchResultsPage bookList={bookList} />} />
        <Route path="/search/:searchQuery" element={ <SearchResultsPage bookList={bookList}/> }/>
        <Route path="/book/:bookId" element={ <BookDetailsPage bookList={bookList}/> }/> */}
       </Routes>

    </>
  )
}


