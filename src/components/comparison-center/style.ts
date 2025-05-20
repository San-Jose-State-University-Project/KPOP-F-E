import styled, {keyframes} from "styled-components";

export const TextBox = styled.section`
    position: absolute;
    top: 50%;
    z-index: 100;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
    height: 100%;
    flex-direction: column;
    align-items: center;
    padding: 60px 0;
    & > h1{
        font-size: 2.2rem;
    }
`
export const ComBox = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    padding: 60px 0 10px 0;
    align-items: center;
    gap: 20px;
    color: #8c8c8c;
    height: 100%;
`
export const Comparison = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    width: 80%;
    gap: 3%;
    justify-content: center;
    & > p:nth-child(2){
        width: max-content;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    & > p:nth-child(1){
        right: 60%;
        transform: translateX(-100%);
    }
    & > p:nth-child(3){
        left: 60%;
    }
    & > p:nth-child(1),
    & > p:nth-child(3) {
        position: absolute;
        white-space: nowrap;
        color: white;
        font-weight: 600;
        font-size: 1.5rem;
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
interface Props {
    duration : number
}
export const moveP = styled.p<Props>`
    animation: ${move} ${(props) => props.duration}s ease-in-out forwards;
    opacity: 0;
`
export const EmotionBox = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
`
export const Emotion= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
    width: 30%;
    font-weight: 600;
    font-size: 1rem;
    & > img{
        width: 100%;
    }
`
export const GraphBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
    width: 80%;
    & > img{
        width: 100%;
    }
`
export const length = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 80%;
    gap: 10px;
    color: white;
    font-weight: 520;
    font-size: 0.8rem;
    & > div{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`
export const Graph = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    & > div{
        display: flex;
        align-items: center;
        width: 80%;
        gap: 10px;
    }
`
export const Label = styled.p`
    color: white;
    font-size: 1rem;
    font-weight: 500;
    width: 80px;
`
export const Bar = styled.div`
    width: 100%;
    height: 10px;
    background-color: #403E50;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
interface BarContentProps {
    width : number
    color : string
}
const progressAnimation = keyframes`
    from {
        width: 0;
    }
    to {
        width: ${props => props.width}%;
    }
`;

export const BarContent = styled.div<BarContentProps>`
    height: 100%;
    background-color: ${(props) => props.color};
    border-radius: 10px;
    transition: width 0.3s ease-in-out;
    width: ${(props)=> props.width}%;
    animation: ${progressAnimation} 1.5s cubic-bezier(0.1, 0, 0.05, 1) forwards;

`