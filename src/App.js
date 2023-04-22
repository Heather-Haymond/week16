import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/TopBar'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Route, Routes, Link } from 'react-router-dom'
import  Home  from "./components/Home"
//import { NewBook } from './components/NewBook'
import { Magazines } from './components/Magazines'
// import SearchResultsPage from './components/SearchResultsPage'
import BookCard from './components/BookCard'
// import { Cart } from './components/Cart'
import { Book } from './components/Book'
// import SearchResults from './components/SearchResults';

export default function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Reading can shape who you are, so check this out</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/Books">
                Books
              </Link>
              <Link className="nav-link" to="/Magazines">
                Magazines
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books/*" element={<Book />} />
        <Route path="/Magazines/*" element={<Magazines />} />
        {/* <Route path="/search/:searchQuery" element={<SearchResults />} /> */}
      </Routes>
    </>
  );
}