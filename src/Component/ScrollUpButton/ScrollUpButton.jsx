import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa"
const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the scroll-up button when the user scrolls down
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button className="scroll-up-btn btn rounded-circle bg-dark text-white " onClick={scrollToTop}>
          <FaArrowUp></FaArrowUp>
        </button>
      )}
    </div>
  );
};

export default ScrollUpButton;
