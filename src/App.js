import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/auth-context';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storeUserLoggedIn = localStorage.getItem('isLoggedIn'); // get from local storage which is global variable
        if (storeUserLoggedIn === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('isLoggedIn', '1'); // store in local storage which is global variable
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn'); // remove from local storage which is global variable
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider
        value={{
            isLoggedIn: isLoggedIn,
        }}
        >
            <MainHeader onLogout={logoutHandler} />
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler} />}
                {isLoggedIn && <Home onLogout={logoutHandler} />}
            </main>
        </AuthContext.Provider>
    );
}

export default App;
