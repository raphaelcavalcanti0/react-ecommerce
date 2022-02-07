import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    margin: 30px 0px 30px 0px;
    background: teal;
    border-style: solid;
    border-color: white;
    border: 0.5px;
    font-family: 'Urbanist', sans-serif;
    font-weight: 600;
    font-size: 25px;
    padding: 5px 20px;
    height: 50px;
    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
`;

const ProductBtn = () => {
    return (
        <Button>
            Mais produtos
        </Button>
    );
};

export default ProductBtn;
