import styled, {keyframes} from "styled-components";

export const Container = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 3% 120px;
    height: 100%;
`
export const Button = styled.button`
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    background-color: #8248E4;
    border-radius: 100px;
    border: none;
    color: white;
    font-size: 14px;
    transition: 0.2s;
    &:hover{
        opacity: 0.7;
    }
`
const move = keyframes`
    0% {
        opacity: 0;
        transform: translateY(15px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`
export const moveH = styled.h1<Props>`
    animation: ${move} ${(props) => props.duration}s ease-in-out forwards;
`
export const moveDiv = styled.div<Props>`
    animation: ${move} ${(props) => props.duration}s ease-in-out forwards;
    text-align: center;
`
interface Props {
    duration : number
}
export const InfoBox = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    & > div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        height: 100%;
        padding: 5% 0;
        border-left: 1px solid #7F7FC5;
        & > img{
            width: 60px;
        }
    }
    & > div:nth-child(1){
        border: none;
    }
`