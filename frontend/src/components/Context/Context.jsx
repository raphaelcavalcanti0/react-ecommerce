import React from 'react';
import { LoginContext } from "../../services/Context";
import { useState } from "react";

const Context = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [getUser, setUser] = useState({})
    const [uuid, setUuid] = useState('')
    const [token, setToken] = useState('')

    return (
        <LoginContext.Provider value={{
            isLoggedIn, setIsLoggedIn,
            getUser, setUser,
            uuid, setUuid,
            token, setToken
        }}>
            {props.children}
        </LoginContext.Provider>
    );
};

export default Context;
