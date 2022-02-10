import React from 'react';
import { useContext, useEffect } from 'react';
import { LoginContext } from '../../services/Context';
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate()
    const { setIsLoggedIn } = useContext(LoginContext)

    localStorage.removeItem('token')
    setIsLoggedIn(false)

    useEffect(() => {
        navigate("/")
    })

    return (
        <>
        </>
    );
};

export default Logout;
