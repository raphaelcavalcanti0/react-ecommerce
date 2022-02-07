import { Circle, Container, Image, Info, Icon, Wrapper2 } from "./styles";
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const ProductItem = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Wrapper2>
                <Image src={item.img} />
                <Info>
                    <Icon>
                        <ShoppingCartOutlined />
                    </Icon>
                    <Icon>
                        <Link to="/product" style={{ color: 'black' }}>
                            <SearchOutlined />
                        </Link>
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined />
                    </Icon>
                </Info>
            </Wrapper2>
        </Container>
    );
};

export default ProductItem;
