import React, { useEffect, useState } from 'react';
import {GiSpiralArrow} from 'react-icons/gi';
import './style.css';

function Scroll() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false);
      }
    })
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className="scrollToTop">
      {backToTopButton && (
          <div className="scrollButton" onClick={scrollUp}><i><GiSpiralArrow /></i></div>
        )}
    </div>
  )
}

export default Scroll;