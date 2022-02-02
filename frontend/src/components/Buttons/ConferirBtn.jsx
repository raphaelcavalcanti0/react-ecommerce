import styled from "styled-components";

const Button = styled.button`
    margin-top: 10px 0px 0px 0px;
    background: teal;
    border-style: solid;
    border-color: white;
    border: 0.5px;
    font-family: 'Urbanist', sans-serif;
    font-weight: 600;
    font-size: 25px;
    padding: 5px 20px;
    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
`;

const ConferirBtn = () => {
    return <Button>Conferir</Button>;
};

export default ConferirBtn;
