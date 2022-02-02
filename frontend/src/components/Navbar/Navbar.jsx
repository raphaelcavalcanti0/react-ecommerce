import * as S from "./styles"
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <S.Navbar>
            <S.Left>
                <S.SearchWrapper>
                    <S.SearchInput placeholder="Buscar"></S.SearchInput>
                    <SearchIcon style={{ color: 'crimson' }} />
                </S.SearchWrapper>
            </S.Left>
            <S.Center>
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    Madame Vinhos
                </Link>
            </S.Center>
            <S.Right>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <S.LoginBtn>
                        Login
                    </S.LoginBtn>
                </Link>
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                    <S.SignUpBtn>
                        Sigh Up
                    </S.SignUpBtn>
                </Link>
                <ShoppingCartOutlinedIcon style={{ marginRight: '20px', color: 'white' }} />
            </S.Right>
        </S.Navbar>
    );
};

export default Navbar;
