import styled from "styled-components";

export  const Header = styled.header`
    width: 100%;
    padding: 20px 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;
export const Logo = styled.img`
    width: 130px;
    cursor: pointer;
`
export const SearchBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    border: none;
    color: white;
    font-size: 14px;
    gap: 10px;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
        transition: 0.2s;
    }
`
export const Nav = styled.nav`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    & > p:hover{
        cursor: pointer;
        opacity: 0.8;
        transition: 0.2s;
    }
`