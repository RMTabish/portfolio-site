import React, { useState, useEffect } from 'react';
import './Review.css'; // Import CSS for styling

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalReviews = 6;

  // Function to move to the next review
  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalReviews);
  };

  // Function to move to the previous review
  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalReviews) % totalReviews);
  };

  // Automatic scrolling every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextReview, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="review-container">
      <button className="arrow left-arrow" onClick={prevReview}>
        &lt;
      </button>
      <div className="review">
        <img
          src={`${process.env.PUBLIC_URL}/review (${currentIndex + 1}).png`}
          alt={`Review ${currentIndex + 1}`}
          className="review-image"
        />
      </div>
      <button className="arrow right-arrow" onClick={nextReview}>
        &gt;
      </button>
    </div>
  );
};

export default Review;
