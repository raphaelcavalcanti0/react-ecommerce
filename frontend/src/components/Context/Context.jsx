import React from 'react';
import { LoginContext, UserContext } from "../../services/Context";
import { useState } from "react";
import { users } from "../../data";

const Context = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [usersList, setUsersList] = useState(users)
    const [getUser, setUser] = useState({})
    const [uuid, setUuid] = useState('')

    return (
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, getUser, setUser, uuid, setUuid }}>
            <UserContext.Provider value={{ usersList, setUsersList }}>
                {props.children}
            </UserContext.Provider>
        </LoginContext.Provider>
    );
};

export default Context;
