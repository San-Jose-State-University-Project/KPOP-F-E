import styled, {keyframes} from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10%;
    padding-top: 50px;
    height: 70%;
`
export const ImgBox = styled.div`
    width: 100%;
    border-radius: 20px;
    height: 80%;
    overflow: hidden;
    & > img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`
export const Card = styled.div<{margin : string}>`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    align-items: center;
    gap: 10px;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    position: relative;
    margin: ${(props) => props.margin};
    transform: translateZ(30px);
    transform-style: preserve-3d;
`
export const TextBox = styled.div`
    width: 100%;
    height: 20%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    & > h3{
        width: 55%;
        overflow-wrap: break-word;
        word-break: break-word;
        white-space: normal;
        text-align: center;
    }
    & > p{
        color: #8c8c8c;
        font-size: 0.8rem;
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
export const Trans = styled.div<{duration : number}>`
    animation: ${move} ${(props) => props.duration}s ease-in-out forwards;
    position: absolute;
    left: 0;
    top: 30%;
    transform: translate(-50%, 50%);
    font-size: 0.9rem;
    z-index: 5;
    display: flex;
    align-items: center;
    gap: 5px;
`
export const Crown = styled.img`
    position: absolute;
    width: 35%;
    top: -15%;
`