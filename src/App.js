import { Route, Routes, Link } from 'react-router-dom'
import { Home } from "./components/Home"
import { NotFound } from './components/NotFound'
import { BookLayout } from './BookLayout'
import { BookRoutes } from './BookRoutes'
import { NewBook } from './components/NewBook'
import { Magazines } from './components/Magazines'

function App() {
  return (
    
    <>
    {/* <Routes location="/books">
    
      <Route path="/books" element={<h1>Extra Content</h1>} ></Route>
    </Routes> */}
    <h1>Things for sale</h1>
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
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Books/*" element={<BookRoutes />}  />
      <Route path="/Magazines/*" element={<Magazines />}  />
   
    </Routes> 

    </>
  )
}

export default App;
