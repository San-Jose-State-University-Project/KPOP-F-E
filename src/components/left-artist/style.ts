import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const Box = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

export const ImgBox = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left:-50%;
    height: 100%;
    overflow: hidden;
    & > img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    z-index: 1;
`
export const ContentBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 20px;
    background: linear-gradient(
            90deg,
            rgba(0,0,0, 0.00) -107.33%,
            #171621 40.81%
    );
    z-index: 2;
    position: relative;
    padding: 60px 15%;
`
export const ComBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 80px 0;
    align-items: center;
    gap: 20px;
    color: white;
    height: 100%;
    font-weight: 600;
    font-size: 1.5rem;
`