import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Container, Form, Input, Button } from "./styles";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../services/Context";

const Signup = () => {

    const navigate = useNavigate()

    const { usersList } = useContext(UserContext)
    const { setUsers } = useState(usersList);

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = () => {

        if (email.length !== 0 &&
            firstName.length !== 0 &&
            lastName.length !== 0 &&
            password !== 0) {

            setUsers(old => [...old, {
                id: 0,
                email: email,
                firstName: firstName,
                lastName: lastName,
                password: password
            }])
            navigate("/login")

        } else {

        }

    }

    return (
        <>
            <Navbar />
            <Container>
                <Form action="#" onSubmit={(event) => event.preventDefault()}>
                    <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <Input placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                    <Input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                    <Input placeholder="Password" type={'password'} onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={handleClick}>Sign Up</Button>
                </Form>
            </Container>
            <Footer />
        </>
    );
};

export default Signup;
