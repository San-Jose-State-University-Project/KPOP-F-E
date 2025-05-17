import Layout from "../../layout";
import styled from "styled-components";
import SearchIcon from "@/assets/searchIcon.svg"
import Result from "../../components/result";

export default function Search(){
    return(
        <Layout>
            <Container>
                <h1>Search</h1>
                <InputBox>
                    <input type="text" placeholder="Enter artist name" />
                    <div>
                        <img src={SearchIcon} alt={"search"} />
                    </div>
                </InputBox>
                <Result navi={"search"} height={140} />
            </Container>
        </Layout>
    )
}

export const Container = styled.main`
    width: 100%;
    height: 80vh;
    display: flex;
    padding: 0 20.44rem;
    flex-direction: column;
    gap: 20px;
`
export const InputBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 0.5rem 2rem;
    border-radius: 1.25rem;
    & > input{
        width: 90%;
        border: none;
        font-size: 18px;
        outline: none;
    }
    & > div{
        width: 10%;
        text-align: right;
        cursor: pointer;
        & > img{
            width: 30px;
        }
    }
`