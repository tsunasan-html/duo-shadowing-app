import React from 'react'
import './WordList.css';
import './Completed.css';
import { Link, useLocation } from 'react-router-dom';

const Completed = () => {
  const location = useLocation();
  const bgImage = location.state?.bgImage;

  return (
    <div className="completed-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="card completed">
        <h2>You've completed today's 10 questions!</h2>
        <p>Great job! Come back tomorrow and keep it up.</p>
        <div className='completed-button'>
          <Link to="/" style={{
            marginTop: '1.5rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#4f46e5',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '0.25rem'
          }}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Completed;
