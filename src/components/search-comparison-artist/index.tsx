import * as S from "./style.ts"
import SearchIcon from "@/assets/searchIcon.svg";
import Result from "@/components/result";
import {InputBox} from "@/pages/search/search.tsx";
import {useParams} from "react-router-dom";
import {useState} from "react";
import type {SearchArtist} from "@/types/artist.ts";
import {getSearch} from "@/api/artist.ts";

export default function SearchComparisonArtist() {
    const params = useParams()
    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState<SearchArtist[] | [] | string>([])
    const [isLoading, setIsLoading] = useState(false);
    const fetchData = async () => {
        setSearchData([])
        setIsLoading(true)
        try{
            const data = await getSearch(search);
            setSearchData(data.results)
        }catch (err){
            setSearchData("X")
            console.log(err)
        }finally {
            setIsLoading(false)
        }
    }
    const handleSearch = ()=>{
        if (search === "") return
        fetchData();
    }
    return (
        <S.Container>
            <h1>Search</h1>
            <InputBox>
                <input
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)}
                    type="text"
                    placeholder="Enter artist name"
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <div>
                    <img src={SearchIcon} alt={"search"} />
                </div>
            </InputBox>
            <Result isLoading={isLoading} searchData={searchData} navi={`/comparison/${params.name}`} height={100} />
        </S.Container>
    )
}