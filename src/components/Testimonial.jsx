import React, { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      author: 'John Doe',
      quote: 'Testimonial 1',
    },
    {
      author: 'Jane Doe',
      quote: 'Testimonial 2',
    },
    {
      author: 'Jim Doe',
      quote: 'Testimonial 3',
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="testimonial-slider">
      <div className="testimonial-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonial-author">
        {testimonials[currentIndex].author}
      </div>
      <div className="pagination-buttons">
        <button
          disabled={currentIndex === 0}
          onClick={handlePrevClick}
        >
          Prev
        </button>
        <button
         disabled={currentIndex === testimonials.length - 1}
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
      <div className="pagination-scroll">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? 'active' : ''}
          >
            &mdash;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
