import styled, {keyframes} from "styled-components";
import {theme} from "../../styles/theme.ts";

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
interface Props {
    duration : number
    delay? : number
}
export const moveH = styled.h1<Props>`
    animation: ${move} ${(props) => props.duration}s ${(props) => (props.delay)}s ease-in-out forwards;
    font-size: 6rem;
    opacity: 0;
`

export const moveH1 = styled.h1<Props>`
    animation: ${move} ${(props) => props.duration}s ${(props) => (props.delay)}s ease-in-out forwards;
    font-size: 6rem;
    font-style: italic;
    opacity: 0;

    background: linear-gradient(
            90deg,
            ${theme.colors.primary} -20.68%,
            #8248E4,
            ${theme.colors.graph} 100%,
            #76F383 118.4%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
export const moveP = styled.p<Props>`
    animation: ${move} ${(props) => props.duration}s ${(props) => (props.delay)}s ease-in-out forwards;
    opacity: 0;
`
export const HomeMain = styled.main`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-style: italic;
    justify-content: center;
    align-items: center;
    & > div{
        display: flex;
        gap:20px;
        align-items: center;
    }
    margin-bottom: 4%;
    background: linear-gradient(
            90deg,
            ${theme.colors.primary} -20.68%,
            #8248E4,
            ${theme.colors.graph} 100%,
            #76F383 118.4%
    );   
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
`
export const Line = styled.div<Props>`
    width: 50%;
    opacity: 0;
    animation: ${move} ${(props) => props.duration}s ${(props) => (props.delay)}s ease-in-out forwards;
    height: 4px;
    background: linear-gradient(
            90deg,
            ${theme.colors.primary} -20.68%,
            #8248E4,
            ${theme.colors.graph} 100%,
            #76F383 118.4%
    );
    margin-bottom: 2%;
`
export const Desc = styled.div`
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 10px;
`