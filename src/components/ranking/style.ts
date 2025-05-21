import styled, {keyframes} from "styled-components";

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
    margin-right: 100px;
    display: flex;
    gap: 14px;
    padding: 0 30px;
    transition: 0.2s;
    height: 80%;
    flex-direction: column;
    & > div{
        position: relative;
        display: flex;
        align-items: center;
    }
`
export const RankIcon = styled.div`
    width: 5%;
    & > img{
        width: 40px;
    }
`
interface Props {
    isRank : boolean
}
export const Info = styled.div<Props>`
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    width: 30%;
    font-size: ${(props) => props.isRank ? "1.2rem" : "0.84rem"};
    & > div{
        text-align: center;
    }
    & > div > p{
        color: ${({ theme }) => theme.colors.gray};
    }
`
type ExtendedProps = Props & {
    length: number;
};


const progressAnimation = (width: number) => keyframes`
    from {
        width: 0;
    }
    to {
        width: ${width}%;
    }
`;
export const Bar = styled.div<ExtendedProps>`
    width: ${(props) => props.length * 10}%;
    height: ${(props) => props.isRank ? "100" : "80"}%;
    animation: ${({ length }) => progressAnimation(length * 10)} 1.5s cubic-bezier(0.1, 0, 0.05, 1) forwards;
    max-height: 60px;
    position: relative;
    overflow: hidden;
    background-color: #1D1D37;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    & > section{
        max-width: 200px;
        overflow: hidden;
        height: 100%;
        position: absolute;
        right: 0;
        z-index: 4;
    }
    & > section > img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`
export const BarColor = styled.div`
    width: 200px;
    overflow: hidden;
    height: 100%;
    background: linear-gradient(270deg, rgba(23, 22, 38, 0.00) 50.33%, #1D1D37 100%);
    position: absolute;
    right: 0;
    z-index: 10;
`
export const BarBox = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 5;
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
    right: -50px;
    top: 50%;
    transform: translate(0%, 50%);
    width: 10px;
    height: 10px;
    z-index: 5;
    display: flex;
    align-items: center;
    gap: 5px;
`