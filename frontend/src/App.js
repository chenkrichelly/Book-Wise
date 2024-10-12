import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchResultProvider } from './SearchResultContext';
import './index.css';
import Home from "./pages/Home"
import BookPage from './pages/BookPage';
import RegistrationForm from './pages/RegistrationForm';
import LoginForm from './pages/LoginForm';
import SavedBooks from "./pages/SavedBooks";

const App= () => {
  
  return (
    <BrowserRouter>
      <SearchResultProvider>
        <Routes>
          <Route
            path="/"
            element={<Home />}/>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookPage  />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/savedbooks/:id" element={<SavedBooks />} />          
        </Routes>
      </SearchResultProvider>
    </BrowserRouter>
  );
}
export default App;
