import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    overflow: hidden;
`;

export const Wrapper = styled.div`
    flex: 1;
    flex-direction: column;
    text-align: center;
    border: 0.5px solid lightgray;
    margin: 10px;
    padding-top: 16px;
    cursor: pointer;
    transition: all 0.7s ease;
    &:hover {
        opacity: 0.7;
    }
`;

export const Image = styled.img`
    height: 75%;
`;

export const Info = styled.div`
`;

export const Title = styled.h1`
    font-family: 'Urbanist', sans-serif;
    font-weight: 600;
    font-size: 20px;
`;
