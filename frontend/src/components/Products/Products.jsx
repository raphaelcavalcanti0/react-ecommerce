import ProductItem from "./ProductItem";
import { HeadTitle, Wrapper } from "./styles";
import ProductBtn from "../Buttons/ProductBtn";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BaseURL } from "../../services/BaseURL";

const Products = () => {

    const [products, setProducts] = useState([])

    const fetchData = async () => {
        const response = await fetch(`${BaseURL}/products`, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            }
        })
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
