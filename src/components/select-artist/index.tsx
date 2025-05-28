import * as S from './style.ts'
import {useLocation, useParams} from "react-router-dom";

export default function SelectArtist() {
    const params = useParams()
    console.log(params)
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const imgUrl = queryParams.get('img');
    return (
        <S.Container>
            <S.ArtistBox>
                <div>
                    <img src={imgUrl} />
                </div>
                <h1>{params.name}</h1>
            </S.ArtistBox>
            <S.LoadingBox>
                <S.Loading delay={0}/>
                <S.Loading delay={0.1}/>
                <S.Loading delay={0.2}/>
            </S.LoadingBox>
        </S.Container>
    )
}