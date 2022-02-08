import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Container, Form, Input, Button } from "./styles";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../services/Context";

const Signup = () => {

    const navigate = useNavigate()

    const { setUuid, setIsLoggedIn } = useContext(LoginContext)

    const [email, setEmail] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = async () => {

        if (email.length !== 0 &&
            firstname.length !== 0 &&
            lastname.length !== 0 &&
            password.length !== 0) {

            const response = await fetch('http://localhost:8000/api/v1/users', {
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
            const data = await response.json()
            setUuid(data.uuid)
            console.log(data.uuid)
            setIsLoggedIn(true)
            navigate('/products')
        } else {

        }
    }

    return (
        <>
            <Navbar />
            <Container>
                <Form action="#" onSubmit={(event) => event.preventDefault()}>
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
                    <Button onClick={handleClick}>Sign Up</Button>
                </Form>
            </Container>
            <Footer />
        </>
    );
};

export default Signup;
