import React from 'react';

const BookReview = ({ review }) => {
  return (
    <div>
      <p>Review: {review.text}</p>
      <p>Rating: {review.rating}</p>
    </div>
  );
};

export default BookReview;