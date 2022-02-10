import React, { useState, useEffect } from 'react';
import { AddCardBtn, AddContainer, Amount, AmountContainer, Container, Desc, Image, ImgContainer, InfoContainer, Price, Title, Wrapper } from './styles';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Add, Remove } from '@material-ui/icons';
import { useParams } from 'react-router-dom';
import { BaseURL } from "../../services/BaseURL";

const SingleProduct = () => {
    const [number, setNumber] = useState(1)
    const { uuid } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        (async (uuid, setProduct) => {
            const response = await fetch(`${BaseURL}/products/${uuid}`, {
                headers: {
                    'Authorization': localStorage.getItem('token'),
                }
            })
            const data = await response.json()
            setProduct(data)
        })(uuid, setProduct)
    }, [])

    const handleRemove = () => {
        if (number > 1) {
            setNumber(number - 1)
        }
    }

    const handleAdd = () => {
        if (number >= 1) {
            setNumber(number + 1)
        }
    }

    return (
        <>
            <Navbar />
            <Container>
                <Wrapper>
                    <ImgContainer>
                        <Image src={product.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{product.title}</Title>
                        <Desc>
                            Mauris malesuada nunc vel lectus ornare,
                            posuere tincidunt lectus consectetur.
                            Maecenas condimentum consequat orci.
                            Donec nec iaculis nisl, quis commodo ipsum.
                            Pellentesque faucibus luctus enim, eleifend
                            mollis nulla commodo sit amet. Duis ipsum
                            metus, sodales a nunc et, congue dapibus
                            mauris. Ut quis finibus eros. Phasellus
                            sollicitudin tempus ex id fermentum.
                            Curabitur congue vehicula felis nec
                            condimentum. Praesent ac imperdiet nunc.
                            Fusce dignissim lorem quis eros varius,
                            venenatis accumsan diam tincidunt. Morbi
                            ultricies a nulla imperdiet semper.
                            Morbi sagittis, quam sit amet faucibus
                            mollis, lacus neque accumsan quam, in
                            bibendum urna leo nec enim. Fusce vestibulum
                            ultricies nulla, et blandit ligula tincidunt
                            vel.
                        </Desc>
                        <Price>${product.price}</Price>
                        <AddContainer>
                            <AmountContainer>
                                <Remove style={{ color: 'red' }} onClick={handleRemove} />
                                <Amount>{number}</Amount>
                                <Add style={{ color: 'blue' }} onClick={handleAdd} />
                            </AmountContainer>
                        </AddContainer>
                        <AddCardBtn>Add to Cart</AddCardBtn>
                    </InfoContainer>
                </Wrapper>
            </Container>
            <Footer />
        </>

    );
};

export default SingleProduct;
