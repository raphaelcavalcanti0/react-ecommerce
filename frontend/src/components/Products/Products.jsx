import { products } from "../../data";
import ProductItem from "./ProductItem";
import { Wrapper } from "./styles";

const Products = () => {
    return (
        <Wrapper>
            {products.map(item => (
                <ProductItem item={item} key={item.id} />
            ))}
        </Wrapper>
    );
};

export default Products;
