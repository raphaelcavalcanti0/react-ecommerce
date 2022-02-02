import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    background-color: coral;
    position: relative;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: space-between;
    font-family: 'Urbanist', sans-serif;
    overflow: hidden;
`;

export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    opacity: 0.5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    z-index: 1;
`;

export const Wrapper = styled.div`
    display: flex;
    height: 100%;
    margin: 0;
    padding: 0;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slidePosition * -100}vw)
`;

export const Slide = styled.div`
    display: flex;
    width: 100vw;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
`;

export const ImgContainer = styled.div`
    padding: 0;
    margin: 0;
`;

export const Image = styled.img`
    padding: 0;
    margin: 0;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0 20px;
    max-width: 300px;
    text-align: justify;
`;

export const Title = styled.h1`
    font-size: 30px;
    font-weight: 600;
    padding: 0;
    margin: 0;
`;

export const Description = styled.p`
    font-weight: 600;
    padding: 0;
`;
