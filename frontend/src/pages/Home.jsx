import React, { useEffect } from 'react';
import AppNavbar from '../components/Navbar'; 
import LoggedUser from '../components/LoggedUser';
import Guest from '../components/Guest';
import { useContext } from "react";
import SearchResultContext from '../SearchResultContext';


const Home = () => {
  const { isLoggedIn, fetchUserID } = useContext(SearchResultContext);

  useEffect(() => {
    if (isLoggedIn) {
      fetchUserID();
    }
  }, [isLoggedIn]);


  return (
    <>
      <AppNavbar />
      {isLoggedIn ? (
        <LoggedUser/>
      ) : (
        <Guest /> 
      )}
    </>
  );
};

export default Home;


