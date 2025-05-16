import styled from "styled-components";

export const MusicIcons = styled.div`
`;

export const Section = styled.section`
    width: 20vw;
    height: 80vh;
    position: fixed;
    left: 0;
    top: 10%;
`
export const IconBox = styled.div`
    width: 100%;
    position: relative;
    height: 100%;
`
export const Section2 = styled.section`
    width: 20vw;
    height: 80vh;
    position: fixed;
    right: 0;
    top: 10%;
`
interface IconProps {
    width: number
    top : number
    left? : number
    right? : number
}
export const Icon = styled.img<IconProps>`
    width: ${(props) => props.width}%;
    position: absolute;
    top: ${(props) => props.top}%;
    left: ${(props) => props.left}rem;
    right: ${(props) => props.right}rem;
`
