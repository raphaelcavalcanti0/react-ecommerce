import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    flex-wrap: wrap;
`;

export const HeadTitle = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    font-family: 'Urbanist', sans-serif;
    font-weight: 600;
    font-size: 28px;
    weight: 100%;
    padding: 10px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    margin: 20px;
`;

export const Wrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    min-width: 220px;
    padding-top: 10px;
    padding-bottom: 10px;
`;


export const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

export const Info = styled.div`
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    transition: all 0.3s ease;
    &:hover {
        opacity: 1;
        cursor: pointer;
    }
`;

export const Image = styled.img`
    height: 250px;
    width: 65px;
    z-index: 2;
`;

export const Icon = styled.div`
    display: flex;
    margin: 15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;