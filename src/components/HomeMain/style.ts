import styled from "styled-components";
import {theme} from "../../styles/theme.ts";

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
    h1{
        font-size: 6rem;
    }
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
export const Line = styled.div`
    width: 50%;
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