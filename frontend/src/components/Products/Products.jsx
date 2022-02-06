import { products } from "../../data";
import ProductItem from "./ProductItem";
import { HeadTitle, Wrapper } from "./styles";

const Products = () => {
    return (
        <>
            <HeadTitle>Vinhos</HeadTitle>
            <Wrapper>
                {products.map(item => (
                    <ProductItem item={item} key={item.id} />
                ))}
            </Wrapper>
        </>
    );
};

export default Products;
