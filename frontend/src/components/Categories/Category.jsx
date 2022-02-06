import CategoryItem from './CategoryItem';
import { Container, HeadTitle } from './styles'
import { categories } from '../../data';

const Category = () => {
    return (
        <>
            <HeadTitle>Variedades</HeadTitle>
            <Container>
                {categories.map(item => (
                    <CategoryItem item={item} key={item.id} />
                ))}
            </Container>
            
        </>
    );
};

export default Category;
