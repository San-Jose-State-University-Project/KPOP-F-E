import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    display: flex;
    padding:  0 120px;
    justify-content: center;
    align-items: center;
`
export const Button = styled.button`
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background-color: #1D1D37;
    border-radius: 100px;
    border: none;
    color: white;
    font-size: 14px;
    transition: 0.2s;
    &:hover{
        opacity: 0.7;
    }
`

export const Main = styled.main`
    width: 100%;
    display: flex;
    gap: 30px;
    padding: 0 30px;
    transition: 0.2s;
`
export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 20%;
`
export const Bar = styled.div`
    width: 80%;
`