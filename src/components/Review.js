

import React from 'react';

const Review = ({ review }) => {
  console.log("review.text",review)
  return (
    <div>
      <p>review: {review.text}</p>
      <p>rating: {review.rating}</p>
    </div>
  );
};

export default Review;