import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Container, Form, Input, Button } from "./styles";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../services/Context";
import { BaseURL } from "../../services/BaseURL";

const Signup = () => {

    const navigate = useNavigate()

    const { setUuid, setIsLoggedIn, setToken } = useContext(LoginContext)

    const [email, setEmail] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')

    const handleClick = async () => {

        if (email.length !== 0 &&
            firstname.length !== 0 &&
            lastname.length !== 0 &&
            password.length !== 0 &&
            confPassword === password) {

            const response = await fetch(`${BaseURL}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: password,
                    profile: ""
                })
            })

            if (response.status === 201 || response.status === 200) {
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
        } else {

        }
    }

    return (
        <>
            <Navbar />
            <Container>
                <Form action="/signup" onSubmit={(event) => event.preventDefault()}>
                    <Input placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} />
                    <Input placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)} />
                    <Input placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)} />
                    <Input placeholder="Password"
                        autoComplete="off"
                        type={'password'}
                        onChange={(e) => setPassword(e.target.value)} />
                    <Input placeholder="Confirm Password"
                        autoComplete="off"
                        type={'password'}
                        onChange={(e) => setConfPassword(e.target.value)} />
                    <Button onClick={handleClick}>Sign Up</Button>
                </Form>
            </Container>
            <Footer />
        </>
    );
};

export default Signup;
