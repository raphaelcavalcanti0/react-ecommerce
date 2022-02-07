import { products } from "../../data";
import ProductItem from "./ProductItem";
import { HeadTitle, Wrapper } from "./styles";
import ProductBtn from "../Buttons/ProductBtn";
import { Link } from "react-router-dom";

const Products = () => {
    return (
        <>
            <HeadTitle>Vinhos</HeadTitle>
            <Wrapper>
                {products.map(item => (
                    <ProductItem item={item} key={item.id} />
                ))}
                <Link to="/product">
                    <ProductBtn />
                </Link>
            </Wrapper>
        </>
    );
};

export default Products;
