import { Navibar, Left, SearchWrapper, SearchInput, Center, Right, LoginBtn, SignUpBtn, User, UserName } from "./styles"
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom'
import { useContext, useEffect } from "react";
import { LoginContext } from "../../services/Context";
import AccountCircle from '@material-ui/icons/AccountCircle';

const Navbar = () => {

    const { isLoggedIn, getUser, setUser, uuid } = useContext(LoginContext)

    const fetchData = async () => {
        const response = await fetch(`http://localhost:8000/api/v1/users/${uuid}`)
        const data = await response.json()
        setUser(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (isLoggedIn) {
        return (
            <Navibar>
                <Left>
                    <SearchWrapper>
                        <SearchInput placeholder="Buscar"></SearchInput>
                        <SearchIcon style={{ color: 'crimson' }} />
                    </SearchWrapper>
                </Left>
                <Center>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        Madame Vinhos
                    </Link>
                </Center>
                <Right>
                    <Link to="/logout" style={{ textDecoration: 'none' }}>
                        <LoginBtn>
                            Logout
                        </LoginBtn>
                    </Link>
                    <ShoppingCartOutlinedIcon style={{ marginRight: '20px', color: 'white' }} />
                    <User>
                        <UserName>{getUser.user.firstname}</UserName>
                        <AccountCircle style={{ color: 'white' }} />
                    </User>
                </Right>
            </Navibar>
        );
    } else {
        return (
            <Navibar>
                <Left>
                    <SearchWrapper>
                        <SearchInput placeholder="Buscar"></SearchInput>
                        <SearchIcon style={{ color: 'crimson' }} />
                    </SearchWrapper>
                </Left>
                <Center>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        Madame Vinhos
                    </Link>
                </Center>
                <Right>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <LoginBtn>
                            Login
                        </LoginBtn>
                    </Link>
                    <Link to="/signup" style={{ textDecoration: 'none' }}>
                        <SignUpBtn>
                            Sigh Up
                        </SignUpBtn>
                    </Link>
                    <ShoppingCartOutlinedIcon style={{ marginRight: '20px', color: 'white' }} />
                </Right>
            </Navibar>
        );
    }

};

export default Navbar;
