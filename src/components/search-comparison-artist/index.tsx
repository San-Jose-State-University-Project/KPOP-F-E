import * as S from "./style.ts"
import SearchIcon from "@/assets/searchIcon.svg";
import Result from "@/components/result";
import {InputBox} from "@/pages/search/search.tsx";
import {useParams} from "react-router-dom";

export default function SearchComparisonArtist() {
    const params = useParams()

    return (
        <S.Container>
            <h1>Search</h1>
            <InputBox>
                <input type="text" placeholder="Enter artist name" />
                <div>
                    <img src={SearchIcon} alt={"search"} />
                </div>
            </InputBox>
            <Result navi={`/comparison/${params.id}`} height={120} />
        </S.Container>
    )
}