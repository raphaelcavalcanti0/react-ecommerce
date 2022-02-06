import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Form, Container, Input, Button } from "./styles";
import { useNavigate } from "react-router-dom";
import { users } from "../../data";
import { useState } from "react";
import { LoginContext } from "../../services/Context";


const Login = () => {

    const navigate = useNavigate()

    const [userList, setUser] = useState({})

    const handleClick = () => {
        users.map(user => {
            if (users.length !== 0) {
                setUser(user)
            }
        })
        console.log(users)
        console.log(userList)
        //navigate('/')
    }

    return (
        <>
            <Navbar />
            <Container>
                <Form action="#">
                    <Input placeholder="Email" />
                    <Input placeholder="Password" type={'password'} />
                    <Button onClick={handleClick}>Login</Button>
                </Form>
            </Container>
            <Footer />
        </>
    );
};

export default Login;
