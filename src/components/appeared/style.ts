import styled, {keyframes} from "styled-components";
const bye = keyframes`
    0% {
        display: block;
    }
    100% {
        display: none;
    }
`
export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${bye} 0.5s ease-in-out 3.5s forwards;
`

const close = keyframes`
    0% {
        width: 50%;
    }
    100% {
        width: 0;
    }
`;
export const video = styled.video`
    position: fixed;
    top: 55%;
    width: 500px;
    left: 50%;
    z-index: 10;
    transform: translate(-50%, -50%); 
    animation: ${close} 0.1s ease-in-out 3.4s forwards;
`
export const Close1 = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 50%;
    height: 100%;
    background: #171626;

    animation: ${close} 0.5s ease-in-out 3.5s forwards;
`;
const close2 = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(100%);
    }
`;

export const Close2 = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
    width: 50%;
    height: 100%;
    background: #171626;

    animation: ${close2} 0.5s ease-in-out 3.5s forwards;
`;