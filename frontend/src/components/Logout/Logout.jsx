import React from 'react';
import { useContext } from 'react';
import { LoginContext } from '../../services/Context';
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate()
    const { setIsLoggedIn } = useContext(LoginContext)

    return (
        <>
            {setIsLoggedIn(false)}
            {navigate("/login")}
        </>
    );
};

export default Logout;
