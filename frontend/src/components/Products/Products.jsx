import ProductItem from "./ProductItem";
import { HeadTitle, Wrapper } from "./styles";
import ProductBtn from "../Buttons/ProductBtn";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Products = () => {

    const [products, setProducts] = useState([])

    const fetchData = async () => {
        const response = await fetch('http://localhost:8000/api/v1/products')
        const data = await response.json()
        setProducts(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <HeadTitle>Vinhos</HeadTitle>
            <Wrapper>
                {products.map(item => (
                    <ProductItem item={item} key={item.uuid} />
                ))}
                <Link to="/product">
                    <ProductBtn />
                </Link>
            </Wrapper>
        </>
    );
};

export default Products;
