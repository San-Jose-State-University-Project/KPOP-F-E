import * as S from "./style.ts"
import Comparison from '@/assets/comparison.svg'
import Delight from '@/assets/delight.svg'
// import Sorrow from '@/assets/sorrow.svg'
// import Anger from '@/assets/anger.svg'
// import Discusting from '@/assets/disgusting.svg'
// import Amazing from '@/assets/amazing.svg'
// import Emotionless from '@/assets/emotionless.svg'
// import Afraid from '@/assets/afraid.svg'
import {useNavigate, useParams} from "react-router-dom";
import {useGetArtistEmotion, useGetArtistInfo} from "@/hooks/artist.ts";


export default function ArtistInfo() {
    const navigate = useNavigate();
    const { name } = useParams<{ name: string }>();
    const handleClick = (path : string)=>{
        navigate(path)
    }
    const {data : artist} = useGetArtistInfo(name ?? '');
    // const {data : emotion} = useGetArtistEmotion(name ?? '');
    return (
        <S.Container>
            {artist &&
                <>
                    <S.moveH duration={0.8}>{artist.artist_name}</S.moveH>
                    <S.InfoBox>
                        <S.moveDiv duration={1}>
                            <h2>{
                                artist.genres.length === 0 ?
                                    "X"
                                    : artist.genres.map(item=><p>{item}</p>)}</h2>
                            <p>GENRES</p>
                        </S.moveDiv>
                        <S.moveDiv  duration={1.2}>
                            <h2>{artist.followers}</h2>
                            <p>FOLLOWERS</p>
                        </S.moveDiv>
                        <S.moveDiv  duration={1.4}>
                            <h2>{artist.popularity}</h2>
                            <p>POPULARITY</p>
                        </S.moveDiv>
                        <S.moveDiv  duration={1.6}>
                            <p>delight</p>
                            <img src={Delight} alt={"delight"} />
                            <p>EMOTION</p>
                        </S.moveDiv>
                    </S.InfoBox>
                    <S.Button onClick={()=>handleClick(`/comparison/${artist.artist_name}`)}>
                        <img src={Comparison} alt={"comparison"} />
                        <p>Go this compare artist moods</p>
                    </S.Button>
                </>
            }
        </S.Container>
    )
}