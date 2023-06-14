import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

      useEffect(() => {
        const storeUserLoggedIn = localStorage.getItem('isLoggedIn'); // get from local storage which is global variable
        if (storeUserLoggedIn === '1') {
            setIsLoggedIn(true);
        }
    }, []);


    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn'); // remove from local storage which is global variable
        setIsLoggedIn(false);
    };

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1'); // store in local storage which is global variable
        setIsLoggedIn(true);
    }
    return (
    <AuthContext.Provider
    value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
    }}>
        { props.children }
        </AuthContext.Provider >
    )}

export default AuthContext;

