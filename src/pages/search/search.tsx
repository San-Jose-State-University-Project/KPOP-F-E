import Layout from "../../layout";
import styled from "styled-components";
import SearchIcon from "@/assets/searchIcon.svg"
import Result from "../../components/result";
import {useState} from "react";
import {getSearch} from "@/api/artist.ts";
import type {SearchArtist} from "@/types/artist.ts";

export function Search() {
    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState<SearchArtist[] | [] | string>([]);
    const fetchData = async () => {
        setSearchData([])
        setIsLoading(true)
        try{
            const data = await getSearch(search);
            setSearchData(data.results)
        }catch (err){
            setSearchData('X')
            console.log(err)
        }finally {
            setIsLoading(false)
        }
    };
    const handleSearch = () => {
        if (search === "") return
        fetchData()
    }
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Layout>
            <Container>
                <h1>Search</h1>
                <InputBox>
                    <input
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                        type="text"
                        placeholder="Enter artist name"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                    />
                    <div onClick={() => handleSearch()}>
                        <img src={SearchIcon} alt={"search"}/>
                    </div>
                </InputBox>
                <Result searchData={searchData} navi={"search"} height={100} isLoading={isLoading}/>
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