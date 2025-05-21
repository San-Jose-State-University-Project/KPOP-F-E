import styled, {keyframes} from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    height: 40%;
`
export const Card = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 2%;
    position: relative;
    border-radius: 10px;
    background-color: #1D1D37;
    align-items: center;
    gap: 2%;
    color: white;
    width: 100%;
    font-weight: 600;
    font-size: 1rem;
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
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.8rem;
    width: 40px;
`
export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    & > h4{
        font-size: 1rem;
    }
    & > p{
        color: #8c8c8c;
        font-size: 0.6rem;
    }
`
export const ImgBox = styled.div`
    width: 30%;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    overflow: hidden;
    & > img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`
export const BarColor = styled.div`
    width: 30%;
    overflow: hidden;
    height: 100%;
    background: linear-gradient(270deg, rgba(23, 22, 38, 0.00) 50.33%, #1D1D37 100%);
    position: absolute;
    right: 0;
    z-index: 10;
`
const progressAnimation = keyframes`
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
`;
export const UnBox = styled.div`
    width: 40px;
    height: 40px;
`