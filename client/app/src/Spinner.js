import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Spinner = () => {
  const [count, setCount] = useState(1); // Set the initial countdown to 5 seconds
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => prevValue - 1); // Decrement the countdown by 1 second
    }, 1000);

    // When count reaches 0, navigate to the "/login" route
    if (count === 0) {
      navigate('/');
    }

    return () => clearInterval(interval);
  }, [navigate, count]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1 style={{ marginTop: '1rem' }}>redirecting to Home in {count} seconds...</h1>
      <div className="spinner-border" role="status" style={{ marginTop: '1rem' }}>
        <span className="sr-only" />
      </div>
    </div>
  );
};

export default Spinner;
