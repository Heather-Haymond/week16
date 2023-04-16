import React, { useState, useEffect } from 'react';
export function Magazines() {
    const [magazine, setMagazines] = useState([]);
    const [cart, setCart] = useState([]);
    
    // useEffect to fetch books from an external API and set them to the state
    useEffect(() => {
      fetch('https://642725c4161067a83bf6687e.mockapi.io/Magazines')
        .then(response => response.json())
        .then(data => setMagazines(data))
        .catch(error => alert(error));
    }, []);
  
    // function to add a book to the cart
    const handleAddToCart = magazine => {
      setCart(prevCart => [...prevCart, magazine]);
    };
  // function to delete 
  const handleDelete = id => {
    setMagazines(prevMagazines => prevMagazines.filter(p => p.id !== id));
  };
  //function that adds btn
  const handleSubmit = e => {
    e.preventDefault();
    const newMagazines = {
        name: e.value
    };
    //spread operater to st values of books
    setMagazines(prevMagazines => [...prevMagazines, newMagazines]);
    setCart('');
  };

    // function to remove a book from the cart
    const handleRemoveFromCart = magazine => {
      setCart(prevCart => prevCart.filter(b => b.id !== magazine.id));
    };
    const { id } = useParams()
    // const obj = useOutletContext()
    return (
        <div>
        <h1>Magazine</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Add a new Magazine:
            <input type="text" value={magazine} onChange={e => setCart(e.target.value)} />
          </label>
          <button type="submit">Add</button>
        </form>
        <ul>
          {magazines.map((magazine) => ( //iterates
            <li key={magazine.id}>
            <img src={magazine.CoverImage} alt={magazine.Title} />
            <h2>{magazine.Title}</h2>
            <p>by {magazine.Author}</p>
            <p>Publisher: {magazine.Publisher}</p>
          </li>
          ))}
        </ul>
      </div>
    )
}