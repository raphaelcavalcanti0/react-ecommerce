import CategoryItem from './CategoryItem';
import { Container, HeadTitle } from './styles'
import { useEffect } from 'react';
import { useState } from 'react';

const Category = () => {

    const [categories, setCategories] = useState([])

    const fetchData = async () => {
        const response = await fetch(`http://localhost:8000/api/v1/categories`)
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
