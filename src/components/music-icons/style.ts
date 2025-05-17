import styled, {keyframes} from "styled-components";

export const MusicIcons = styled.div`
`;

const floating = keyframes`
  0% {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, -0px);
  }
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
    duration : number
}
export const Icon = styled.img<IconProps>`
    width: ${(props) => props.width}%;
    position: absolute;
    top: ${(props) => props.top}%;
    left: ${(props) => props.left}rem;
    right: ${(props) => props.right}rem;
    animation: ${floating} ${(props) => props.duration}s ease-in-out infinite;
`
