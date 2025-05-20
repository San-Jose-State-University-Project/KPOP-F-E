import * as S from './style.ts'
import Image2 from '@/assets/image2.png'
import {useParams} from "react-router-dom";

export default function SelectArtist() {
    const params = useParams()
    return (
        <S.Container>
            <S.ArtistBox>
                <div>
                    <img src={Image2} alt={"artist"} />
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