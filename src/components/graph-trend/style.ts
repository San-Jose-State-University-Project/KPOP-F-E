import styled, {keyframes, css} from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 120px;
    height: 100%;
`
const barAnimation = () => {
    return keyframes`
        0%{
            height: 0;
        }
        100%{
            height: ${({length}) =>length }%;
        }
    `
}

interface BarContentProps {
    length : number
    isLoading? : boolean
}
export const BarBox = styled.div<BarContentProps>`
    width: 100%;
    align-items: end;
    height: 80%;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(${({length}) =>length }, 1fr);
    gap: 20px;
    border-bottom: 1px solid white;
`
export const Bar = styled.div<BarContentProps>`
    width: 100%;
    height: ${({length}) =>length }%;
    position: relative;
    ${({ isLoading }) =>
            !isLoading &&
            css`
      animation: ${barAnimation} 0.8s ease-in-out forwards;
    `}    background-color: #1D1D37;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transition: 0.4s;
    &:hover{
        background: #3C3C6B;
    }
`

export const TextBox = styled.div`
    width: 100%;
    height: 3%;
    display: grid;
    padding: 0 20px;
    grid-template-columns: repeat(18, 1fr);
    gap: 20px;
`
export const Text = styled.p`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    font-weight: 600;
    font-size: 0.6rem;
    transition: 0.2s;
`
export const InfoBox = styled.div`
    width: max-content;
    border-radius: 10px;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    color: white;
    font-weight: 600;
    font-size: 0.8rem;
    padding: 15px 20px;
    background: #2B2B2B;
`
export const Info = styled.p`
`