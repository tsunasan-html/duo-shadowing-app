import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ currentIndex, total, onNavigate }) => {

  const nextItem = () => {
    if (currentIndex < total) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevItem = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="nav">
      <button
        className="button-base nav-button"
  onClick={() => onNavigate('prev')}
        disabled={currentIndex === 0}
      >
        <FontAwesomeIcon icon={faLeftLong} style={{ marginRight: '0.5rem' }} />
        Prev
      </button>

      <button
        className="button-base nav-button"
        onClick={() => onNavigate('next')}
        disabled={currentIndex >= total}
        style={{ marginLeft: '1rem' }}
      >
        Next
        <FontAwesomeIcon icon={faRightLong} style={{ marginLeft: '0.5rem' }} />
      </button>
    </div>
  );
};

export default Nav;
