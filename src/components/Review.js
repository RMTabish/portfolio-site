// Review.js
import React, { useState, useEffect, useRef } from 'react';
import './Review.css';

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalReviews = 6;

  // Automatic scrolling every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextReview, 3000);
    return () => clearInterval(interval);
  }, []);

  // Function to move to the next review
  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalReviews);
  };

  // Function to move to the previous review
  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalReviews) % totalReviews);
  };

  return (
    <div className="review-container">
      <button className="arrow left-arrow" onClick={prevReview}>
        &lt;
      </button>
      <div className="review" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {[...Array(totalReviews)].map((_, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}/review (${index + 1}).png`}
            alt={`Review ${index + 1}`}
            className="review-image"
          />
        ))}
      </div>
      <button className="arrow right-arrow" onClick={nextReview}>
        &gt;
      </button>
    </div>
  );
};

export default Review;
