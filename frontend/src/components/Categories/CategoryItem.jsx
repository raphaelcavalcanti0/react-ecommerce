import { Wrapper, Info, Image, Title } from "./styles";

const CategoryItem = ({ item }) => {
    return (
        <Wrapper>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
            </Info>
        </Wrapper>
    );
};

export default CategoryItem;
