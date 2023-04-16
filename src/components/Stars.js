

import React, { useState } from 'react';
import './stars.css'; // import CSS file

const Stars = ({ rating, setRating }) =>  {
  const [checked, setChecked] = useState(Array(5).fill(false)); // initialize state with an array of 5 false values

  const handleCheckboxChange = (index) => {
    const newChecked = checked.map((value, i) => i <= index ? !value : value);
    const ratingT = newChecked.filter((value) => value).length;
    setChecked(newChecked);
    setRating(ratingT);
  };

  return (
    <div className="star-checkboxes">
      {[...Array(5)].map((_, index) => (
        <label key={`star${index}`} className={checked[index] ? 'star-checked' : 'star-unchecked'}>
          <input
            type="checkbox"
            checked={checked[index]}
            onChange={() => handleCheckboxChange(index)}
          />
          ★
        </label>
      ))}
    </div>
  );
}

export default Stars;
