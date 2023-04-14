import React from "react";
import Review from "./Review";

const ReviewList = ({ reviews }) => {
  console.log("reviews:", reviews);
  return (
    <div>
      {reviews.map(
        (
          review,
          index //map can take index as a second parameter, this is useful for the key property on the Review component below
        ) => (
          <Review key={index} review={review} />
        )
      )}
    </div>
  );
};

export default ReviewList;