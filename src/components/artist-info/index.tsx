import * as S from "./style.ts"
import Comparison from '@/assets/comparison.svg'
import joy from '@/assets/delight.svg'
import sadness from '@/assets/sorrow.svg'
import anger from '@/assets/anger.svg'
import disgust from '@/assets/disgusting.svg'
import surprise from '@/assets/amazing.svg'
import neutral from '@/assets/emotionless.svg'
import fear from '@/assets/afraid.svg'
import {useNavigate} from "react-router-dom";

export default function ArtistInfo({artist, emotion}) {
    const img = [joy, sadness, anger, disgust, surprise, neutral, fear]
    const navigate = useNavigate();
    const maxEmotion = Object.entries(emotion.emotion_count).reduce((max, entry) => {
        const [emotion, count] = entry;
        return count > max[1] ? [emotion, count] : max;
    }, ["", -Infinity]);
    const handleClick = (path : string)=>{
        navigate(path)
    }
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
                            <p>{maxEmotion[0]}</p>
                            <img src={img.find(item=>item.includes(maxEmotion[0]))} alt={"emotion"} />
                            <p>EMOTION</p>
                        </S.moveDiv>
                    </S.InfoBox>
                    <S.Button onClick={()=>handleClick(`/comparison/${artist.artist_name}?img=${artist.image_url}`)}>
                        <img src={Comparison} alt={"comparison"} />
                        <p>Go this compare artist moods</p>
                    </S.Button>
                </>
            }
        </S.Container>
    )
}