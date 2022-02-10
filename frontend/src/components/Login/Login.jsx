import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Form, Container, Input, Button } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { LoginContext } from "../../services/Context";
import { BaseURL } from "../../services/BaseURL";

const Login = () => {

    const navigate = useNavigate()

    const { setUuid, setIsLoggedIn, setToken } = useContext(LoginContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = async () => {
        if (email.toLowerCase().trim() !== '' && password.trim() !== '') {

            const response = await fetch(`${BaseURL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            })
            if (response.status === 200) {
                const data = await response.json()
                setUuid(data.uuid)
                setToken(data.token)
                setIsLoggedIn(true)
                localStorage.setItem('token', data.token)
                navigate('/')
            }
        }
    }

    return (
        <>
            <Navbar />
            <Container>
                <Form action="/login" onSubmit={(event) => event.preventDefault()}>
                    <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <Input placeholder="Password"
                        type={'password'}
                        autoComplete="off"
                        onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={handleClick}>Login</Button>
                </Form>
            </Container>
            <Footer />
        </>
    );
};

export default Login;
