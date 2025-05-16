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


export default function ArtistInfo() {
    return (
        <S.Container>
            <h1>BTS</h1>
            <S.InfoBox>
                <div>
                    <h2>canadian pop</h2>
                    <p>GENRES</p>
                </div>
                <div>
                    <h2>45000000 + </h2>
                    <p>FOLLOWERS</p>
                </div>
                <div>
                    <h2>95/100</h2>
                    <p>POPULARITY</p>
                </div>
                <div>
                    <img src={Delight} alt={"delight"} />
                    <p>EMOTION</p>
                </div>
            </S.InfoBox>
            <S.Button>
                <img src={Comparison} alt={"comparison"} />
                <p>Go this compare artist moods</p>
            </S.Button>
        </S.Container>
    )
}