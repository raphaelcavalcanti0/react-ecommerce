import { Navibar, Left, SearchWrapper, SearchInput, Center, Right, LoginBtn, SignUpBtn } from "./styles"
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { LoginContext } from "../../services/Context";

const Navbar = () => {

    const { isLoggedIn } = useContext(LoginContext)

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
