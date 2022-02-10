import CategoryItem from './CategoryItem';
import { Container, HeadTitle } from './styles'
import { useEffect } from 'react';
import { useState } from 'react';
import { BaseURL } from "../../services/BaseURL";

const Category = () => {

    const [categories, setCategories] = useState([])

    const fetchData = async () => {
        const response = await fetch(`${BaseURL}/categories`, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            }
        })
        const data = await response.json()
        setCategories(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <HeadTitle>Variedades</HeadTitle>
            <Container>
                {categories.map(item => (
                    <CategoryItem item={item} key={item.uuid} />
                ))}
            </Container>
        </>
    );
};

export default Category;
