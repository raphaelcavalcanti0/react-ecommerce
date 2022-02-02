import CategoryItem from './CategoryItem';
import { Container } from './styles'
import { categories } from '../../data';

const Category = () => {
    return (
        <Container>
            {categories.map(item => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Category;
