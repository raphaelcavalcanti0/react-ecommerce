import React from 'react';
import { LoginContext } from "../../services/Context";
import { UserContext } from "../../services/Context";
import { useState } from "react";
import { users } from "../../data";

const Context = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [usersList, setUsersList] = useState(users)

    return (
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            <UserContext.Provider value={{ usersList, setUsersList }}>
                {props.children}
            </UserContext.Provider>
        </LoginContext.Provider>
    );
};

export default Context;
