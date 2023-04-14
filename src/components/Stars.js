

import React, { useState } from 'react';
import './stars.css'; // import CSS file
//import { rating } from './Movie';
const Stars = ({ rating, setRating }) =>  {
  const [checked, setChecked] = useState(Array(5).fill(false)); // initialize state with an array of 5 false values
//alert(props.rating);
  const handleCheckboxChange = (index) => {
    const newChecked = [...checked]; // create a copy of the checked array
    var newVal = !newChecked[index];
    if (newVal === false) {
      for (let i = 0; i <= 5; i++) {
        newChecked[i] = newVal; // toggle the checkbox at the specified index
      }
    }
    else {
      for (let i = 0; i <= index; i++) {
      //console.log(i);
       newChecked[i] = newVal; // toggle the checkbox at the specified index
      }
    }
    var ratingT = 0;
    for (let i = 0; i <= index; i++) {
      if (newChecked[i] === true)
        ratingT = ratingT + 1; 
    }
    
    setRating(ratingT); // update the rating state variable
    setChecked(newChecked); // update the state
  };

  return (
    <div className="star-checkboxes">
     <label key= 'star1' className={checked[0] ? 'star-checked' : 'star-unchecked'}>
          <input
            type="checkbox"
            checked={checked[0]}
            onChange={() => handleCheckboxChange(0)}
          />
          ★
        </label>
        <label key={'star2'} className={checked[1] ? 'star-checked' : 'star-unchecked'}>
          <input
            type="checkbox"
            checked={checked[1]}
            onChange={() => handleCheckboxChange(1)}
          />
          ★
        </label>
        <label key={'star3'} className={checked[2] ? 'star-checked' : 'star-unchecked'}>
          <input
            type="checkbox"
            checked={checked[2]}
            onChange={() => handleCheckboxChange(2)}
          />
          ★
        </label>
        <label key={'star4'} className={checked[3] ? 'star-checked' : 'star-unchecked'}>
          <input
            type="checkbox"
            checked={checked[3]}
            onChange={() => handleCheckboxChange(3)}
          />
          ★
        </label>
        <label key={'star5'} className={checked[4] ? 'star-checked' : 'star-unchecked'}>
          <input
            type="checkbox"
            checked={checked[4]}
            onChange={() => handleCheckboxChange(4)}
          />
          ★
        </label>
    </div>
  );
}

export default Stars;