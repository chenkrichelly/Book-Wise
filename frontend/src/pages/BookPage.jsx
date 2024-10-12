import React, { useEffect } from 'react';
import AppNavbar from '../components/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import '../components/styles.css';
import { useContext } from "react";
import SearchResultContext from '../SearchResultContext';

const BookPage = () => {
  const { searchResults, isLoggedIn, fetchUserID } = useContext(SearchResultContext);

  const { id } = useParams();
  const book = searchResults.find((item) => item.id === id);
  const navigate = useNavigate();
  const handleGoBackClick = () => {
    navigate(-1);
  };
  
  useEffect(() => {
    fetchUserID();
  }, []); 

  if (!book) {
    return <h1>Book not found.</h1>;
  }


  return (
    <>
      {isLoggedIn ? (
        <>
            <header>
              <AppNavbar />
              <div className='header-content3'>
                <h3 className='header-title'>{book.volumeInfo.title}</h3><br /><br />
              </div>
            </header>            
            <section className='book-details'>
              <div className='container'>
                <button type='button' className='back-btn' onClick={handleGoBackClick}>
                  <FaArrowLeft size={22} />
                <span className='go-back-text'>Go Back</span>
                </button>
                <div className='book-details-content'>
                  <div className='book-details-img'>
                    <img alt="book-img" src={book.volumeInfo.imageLinks?.thumbnail || 'placeholder-image-url'} />
                  </div>
                  <div className='book-details-info'>
                    <div className='book-details-item title'>
                    <span className='book-title'>{book.volumeInfo.title}</span>
                    </div>
                    <div className='book-details-item description'>
                      <span>{book.volumeInfo.description}</span>
                    </div>
                    <div className='book-details-item'>
                      <span className='fw-6'>Authors: </span>
                      <span className='text-italic'>{book.volumeInfo.authors?.join(', ') || 'Unknown'}</span>
                    </div>
                    <div className='book-details-item'>
                      <span className='fw-6'>Category: </span>
                      <span className='text-italic'>{book.volumeInfo.categories?.join(', ') || 'Unknown'} </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
      ) : (
      <h1>User is not logged in, can't show book details.</h1>        
      )}
    </>
  )
}

export default BookPage
