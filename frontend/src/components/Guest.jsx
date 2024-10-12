import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles.css"

function Guest() {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate('/register');
  };
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <header>
        <div className='header-content'>
          <h2 className='header-title'>Hey, reader!</h2><br /><br />
          <p className='header-text'>Welcome to our library. Start exploring our vast collection of books today. Whether you're into mysteries, romance, or science fiction, there's something here for everyone. Join our community today and start your literary journey!</p>
          <div className="header-horizontal-buttons">
            <button className="button-51" onClick={handleRegister}>Register</button>
            <button className="button-51" onClick={handleLogin}>Login</button>   
          </div>
        </div>
      </header>
    </>
  )
}

export default Guest;