import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ currentIndex, setCurrentIndex, total }) => {

  const nextItem = () => {
    // ✅ 「total - 1」ではなく、「total」未満で制限しない → 1つ先へ進める
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
        onClick={prevItem}
        disabled={currentIndex === 0}
      >
        <FontAwesomeIcon icon={faLeftLong} style={{ marginRight: '0.5rem' }} />
        Prev
      </button>

      <button
        className="button-base nav-button"
        onClick={nextItem}
        // ✅ ここを「currentIndex === total - 1」ではなく「currentIndex >= total」で無効に
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
