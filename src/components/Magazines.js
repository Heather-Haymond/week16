import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
export function Magazines() {
    const [magazines, setMagazines] = useState([]);
    // const [cart, setCart] = useState([]);
    const [magazineName, setMagazineName] = useState ('')
    
    // useEffect to fetch books from an external API and set them to the state
    useEffect(() => {
      fetch('https://642725c4161067a83bf6687e.mockapi.io/Magazines')
        .then(response => response.json())
        .then(data => setMagazines(data))
        .catch(error => alert(error));
    }, []);
  
    // function to add a book to the cart
    // const handleAddToCart = magazine => {
    //   setCart(prevCart => [...prevCart, magazine]);
    // };
  // function to delete 
  const handleDelete = id => {
    fetch ("https://642725c4161067a83bf6687e.mockapi.io/Magazines/"+id,{method:"DELETE"})
    setMagazines(prevMagazines => prevMagazines.filter(p => p.id !== id));
  };
  //function that adds btn
  const handleSubmit = async e => {
    e.preventDefault();
    const newMagazines = {
        title: magazineName

    };
    const response = await fetch ("https://642725c4161067a83bf6687e.mockapi.io/Magazines",{
        method:"POST", 
        headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMagazines),
    })
    const createdMagazine = await response.json()
    //spread operater to st values of books
    setMagazines(prevMagazines => [...prevMagazines, createdMagazine]);
    setMagazineName('');
  };

    // function to remove a book from the cart
    // const handleRemoveFromCart = magazine => {
    //   setCart(prevCart => prevCart.filter(b => b.id !== magazine.id));
    // };
    // const { id } = useParams()
    // const obj = useOutletContext()
    return (
        <div>
        <h1>Magazine</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Add a new Magazine:
            <input type="text" value={magazineName} onChange={e => setMagazineName(e.target.value)} />
          </label>
          <button type="submit">Add</button>
        </form>
        <ul>
          {magazines.map((magazine) => ( //iterates
            <li key={magazine.id}>
            <img src={magazine.coverImage} alt={magazine.title} />
            <h2>{magazine.title}</h2>
            <p>by {magazine.author}</p>
            <p>Publisher: {magazine.publisher}</p>
            <button onClick={() => handleDelete(magazine.id)}>Delete</button>
          </li>
          ))}
        </ul>
      </div>
    )
}