import styled from "styled-components";

export const Container = styled.div`
    height: 82vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: teal;
    padding: 100px;
    border-radius: 5%;
    box-shadow: 5px 5px 5px #888888;
`;

export const Input = styled.input`
    margin: 10px;
    padding: 10px;
    width: 300px;
    border: 0;
    &:focus {
        outline: 0;
    }
`;

export const Button = styled.button`
    margin: 10px;
    padding: 10px;
    width: 200px;
`;