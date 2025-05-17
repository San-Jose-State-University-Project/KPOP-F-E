import * as S from "./style.ts"
import Comparison from '@/assets/comparison.svg'
import Delight from '@/assets/delight.svg'
import Sorrow from '@/assets/sorrow.svg'
import Anger from '@/assets/anger.svg'
import Discusting from '@/assets/disgusting.svg'
import Amazing from '@/assets/amazing.svg'
import Emotionless from '@/assets/emotionless.svg'
import Afraid from '@/assets/afraid.svg'
import {useNavigate} from "react-router-dom";
import {moveDiv, moveH} from "./style.ts";


export default function ArtistInfo() {
    const navigate = useNavigate();
    const handleClick = (path : string)=>{
        navigate(path)

    }
    return (
        <S.Container>
            <S.moveH duration={0.8}>BTS</S.moveH>
            <S.InfoBox>
                <S.moveDiv duration={1}>
                    <h2>canadian pop</h2>
                    <p>GENRES</p>
                </S.moveDiv>
                <S.moveDiv  duration={1.2}>
                    <h2>45000000 + </h2>
                    <p>FOLLOWERS</p>
                </S.moveDiv>
                <S.moveDiv  duration={1.4}>
                    <h2>95/100</h2>
                    <p>POPULARITY</p>
                </S.moveDiv>
                <S.moveDiv  duration={1.6}>
                    <p>delight</p>
                    <img src={Delight} alt={"delight"} />
                    <p>EMOTION</p>
                </S.moveDiv>
            </S.InfoBox>
            <S.Button onClick={()=>handleClick(`/comparison/${1}`)}>
                <img src={Comparison} alt={"comparison"} />
                <p>Go this compare artist moods</p>
            </S.Button>
        </S.Container>
    )
}