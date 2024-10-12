import React from 'react';
import SearchBar from './Searchbar';
import Cards from '../components/Cards';
import "./styles.css"
import { useContext } from "react";
import SearchResultContext from '../SearchResultContext';

function LoggedUser() {
  const { username } = useContext(SearchResultContext);

  

  return (
    <>
    <header>
    <div className='header-content2'>
        <h2 className='header-title'>Hey, {username}!</h2><br /><br />
          <p className='header-text'>Are you ready to embark on your reading adventure? Explore our library, save your favorite books, or ones you'd like to read. Dive in and discover your next literary obsession!</p>
        <SearchBar  />
    </div>        
    <Cards />
    </header>
    </>
  )
}

export default LoggedUser;