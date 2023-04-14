import React, { useState } from 'react'
import TopBar from './components/TopBar'
import { Route, Routes, Link } from 'react-router-dom'
import  Home  from "./components/Home"
//import { NotFound } from './components/NotFound'
//import { BookLayout } from './BookLayout'
import { BookRoutes } from './BookRoutes'
//import { NewBook } from './components/NewBook'
import { Magazines } from './components/Magazines'
// import SearchResultsPage from './components/SearchResultsPage'
import { TEST_BOOKS } from './FAKE_DATA'
import BookDetailsPage from './components/BookDetailPage'
import BookCard from './components/BookCard'

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
      </ul>
    </nav>
  
    <TopBar />
      <Routes>
        {/* <Route path="/" element={ <Home bookList={bookList} />} /> */}
        <Route path="/Books/*" element={<BookRoutes />}  />
        <Route path="/Magazines/*" element={<Magazines />}  />
        
        {/* <Route path="/Search" element={<SearchResultsPage bookList={bookList} />} />
        <Route path="/search/:searchQuery" element={ <SearchResultsPage bookList={bookList}/> }/>
        <Route path="/book/:bookId" element={ <BookDetailsPage bookList={bookList}/> }/> */}
       </Routes>

    </>
  )
}


