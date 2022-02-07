import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 82vh;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    height: 90%;
    width: 85%;
    border-radius: 10px;
    box-shadow: 1px 0px 5px 0px grey;
`;

export const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const Image = styled.img`
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: center;
    flex: 1;
    margin-right: 30px;
`;

export const Title = styled.h1`
    font-size: 26px;
`;

export const Desc = styled.p`
    margin-top: 30px;
    font-weight: 600;
    font-size: 14px;
`;

export const Price = styled.span`
    margin-top: 30px;
    font-weight: 600;
    font-size: 20px;
`;

export const AddCardBtn = styled.button`
    margin-top: 30px;
    height: 40px;
    background-color: teal;
    color: white;
    border: 0;
    box-shadow: 1px 0px 5px 0px grey;
    transition: 0.8s ease;
    &:hover {
        opacity: 0.8;
    }
`;

export const AddContainer = styled.div`
    margin-top: 20px;
`;

export const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    
`;

export const Amount = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    padding: 5px 15px;
    border: 1px solid;
    border-radius: 25%;
    border-color: grey;
    font-size: 20px;
    font-weight: 600;
    color: black;
    width: 20px;
    height: 25px;
`;