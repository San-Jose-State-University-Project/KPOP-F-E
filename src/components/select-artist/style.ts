import styled from "styled-components";

export const Container = styled.section`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-direction: column;
`

export const ArtistBox = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius:20px;
    padding:40px 10px;
    background: #1D1D37;
    & > div{
        width: 150px;
        height: 150px;
        border-radius: 100%;
        overflow: hidden;
        & > img{
            height: 100%;
            object-fit: cover;
            width: 100%;
        }
    }
`

export const LoadingBox = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
export const Loading = styled.div<{ delay: number }>`
    width: 15px;
    height: 15px;
    border-radius: 100px;
    background: #333366;

    animation: bounce 2s ease-in-out infinite;
    animation-delay: ${(props) => props.delay}s;

    @keyframes bounce {
        0% { transform: translateY(-10px); }
        10% { transform: translateY(10px); }
        20% { transform: translateY(-10px); }
        100% { transform: translateY(-10px); }
    }
`;