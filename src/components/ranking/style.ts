import styled from "styled-components";

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
    display: flex;
    gap: 14px;
    padding: 0 30px;
    transition: 0.2s;
    height: 80%;
    flex-direction: column;
    & > div{
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
    width: 15%;
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

export const Bar = styled.div<ExtendedProps>`
    width: ${(props) => props.length * 8}%;
    height: ${(props) => props.isRank ? "100" : "80"}%;
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