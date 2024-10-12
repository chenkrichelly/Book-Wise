import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo1 from '../images/logo1.png'
import './styles.css';
import { useContext } from "react";
import SearchResultContext from '../SearchResultContext';

const AppNavbar = ({  }) => {
    const { isLoggedIn, userId, handleLogoutSuccess } = useContext(SearchResultContext);

    const navigate = useNavigate();     
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        handleLogoutSuccess(); 
        navigate('/');
        window.location.reload();
    };

    const handleGoHomeClick = () => {
        navigate('/');
    };

    return (
        <nav className='navbar' id="navbar">
            <ul>
                <li>
                    <Link to="/" className='navbar-brand' onClick={handleGoHomeClick}>
                        <img src={logo1} alt="logo" />
                        <span>BOOKWISE</span>
                    </Link>
                </li>
                {isLoggedIn ? (
                    <>
                        <li>
                            <Link to={`/savedbooks/${userId}`}>My List</Link>
                        </li>
                        <li>
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/login">Sign In</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default AppNavbar;