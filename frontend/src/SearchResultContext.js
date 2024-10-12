import { createContext, useState } from 'react';

const SearchResultContext = createContext();

export const SearchResultProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const handleLoginSuccess = () => {
        setLoggedIn(true);
    };

    const handleLogout = () => {
        setLoggedIn(false);
    };

    const [searchResults, setSearchResults] = useState([]);
    const setResults = (results) => {
        setSearchResults(results);
    };

    const [userId, setUserId] = useState(null);
    const [username, setUsername] = useState(null);
    const fetchUserID = async () => {
        const accessToken = localStorage.getItem('accessToken');
        try {
            const userResponse = await fetch('http://localhost:8080/current-user', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!userResponse.ok) {
                throw new Error('Failed to get current user');
            }

            const userData = await userResponse.json();
            setUserId(userData.id);
            setUsername(userData.username);

        } catch (error) {
            console.error('Error fetching current user:', error);
        }
    };

    const handleLogoutSuccess = () => {
        localStorage.removeItem('accessToken');
        setUserId(null);
        setUsername(null);
    };

    return (
        <SearchResultContext.Provider 
        value={{ 
            searchResults, 
            setResults,
                isLoggedIn, handleLoginSuccess, fetchUserID, handleLogoutSuccess, userId, username, handleLogout
        }}>
            {children}
        </SearchResultContext.Provider>
    );
};
export default SearchResultContext;