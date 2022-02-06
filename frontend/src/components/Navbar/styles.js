import styled from 'styled-components'

export const Navibar = styled.div`
    margin: 0px;
    height: 7vh;
    width: 100%;
    background-color: rgba(237, 15, 83, 1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Urbanist', sans-serif;
`;

export const Left = styled.div`
    flex: 1;
    display: flex;
    align-content: center;
`;

export const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;
    align-items: center;
    border: 0.5px solid darkgray;
    border-radius: 10px;
    cursor: pointer;
    background-color: white;
    width: 80%;
`;

export const SearchInput = styled.input`
    height: 26px;
    width: 100%;
    border: none;
    border-radius: 10px;
    margin-right: 5px;
    outline: none;
    font-family: 'Urbanist', sans-serif;
    font-weight: 600;
    letter-spacing: 1.5px;
`;


export const Center = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    font-family: 'Parisienne', cursive;
    font-weight: 500;
    font-size: 40px;
    color: white;
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    
`;

export const LoginBtn = styled.button`
    font-weight: 600;
    font-size: 18px;
    margin-right: 16px;
    color: white;
    background-color: transparent;
    border: 0;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`;

export const SignUpBtn = styled.button`
    font-weight: 600;
    font-size: 18px;
    margin-right: 16px;
    color: white;
    background-color: transparent;
    border: 0;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`;

export const User = styled.div`
    display: flex;
    margin-right: 20px;
    font-weight: 600;
    font-size: 18px;
    color: white;
    justify-content: center;
    align-items: center;
`;

export const UserName = styled.div`
    display: flex;
    margin-right: 20px;
    font-weight: 600;
    font-size: 18px;
    color: white;
`;