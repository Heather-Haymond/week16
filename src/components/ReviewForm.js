import React, { useState } from "react";
import Stars from "./Stars";
 // Define ReviewForm component as a function that takes onReviewSubmit prop
export function ReviewForm({ addReview }) {
  // Use useState hook to declare reviewText state variable and setReviewText function
  const [reviewText, setReviewText] = useState("");
  // Define handleSubmit function that takes an event as a parameter
  const [rating, setRating] = useState(0); 
  // Add a rating state variable with initial value 0
  const handleSubmit = (event) => {
    // Prevent the default behavior of the form submit event
    event.preventDefault();
    // Call the addReview prop function and pass the reviewText state variable as an argument
    addReview({ text: reviewText, rating: rating });
    // Clears the review text state variable
    setReviewText("");
    setRating(0); // Reset the rating state variable after submission
  };
  // Render a form with a textarea and submit button
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={reviewText}
        onChange={(event) => setReviewText(event.target.value)} // Update the review text state as the user types
        placeholder="Write your book review here..."
        required // Make the textarea a required field
      />
      <Stars rating={rating} setRating={setRating} /> {/* Add the Stars component with the rating and setRating props */}
      <button type="submit">Submit</button>
    </form>
  );
}
