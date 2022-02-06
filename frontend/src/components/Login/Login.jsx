import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Form, Container, Input, Button } from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { LoginContext, UserContext } from "../../services/Context";


const Login = () => {

    const navigate = useNavigate()

    const { setIsLoggedIn, getUser, setUser } = useContext(LoginContext)
    const { usersList } = useContext(UserContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = () => {
        usersList.forEach(user => {
            if (email.trim() !== '' && password.trim() !== '') {
                if (user.email === email.trim() && user.password === password.trim()) {
                    setUser({ ...getUser, user })
                    setIsLoggedIn(true)
                    navigate('/')
                }
            }
        })
    }

    return (
        <>
            <Navbar />
            <Container>
                <Form action="#" onSubmit={(event) => event.preventDefault()}>
                    <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <Input placeholder="Password" type={'password'} onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={handleClick}>Login</Button>
                </Form>
            </Container>
            <Footer />
        </>
    );
};

export default Login;
