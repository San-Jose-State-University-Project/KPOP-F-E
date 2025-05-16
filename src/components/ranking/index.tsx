import * as S from "./style.ts"
import LeftArrow from '@/assets/left-arrow.svg'
import RightArrow from '@/assets/right-arrow.svg'
import Img1 from '@/assets/img1.png'
import First from '@/assets/first.svg'
import Second from '@/assets/second.svg'
import Third from '@/assets/third.svg'

export default function Ranking() {
    const data = [
        {h3 : "너에게 닿기를", p : "10cm", thumbnail: Img1, length : 10},
        {h3 : "너에게 닿기를", p : "10cm", thumbnail: Img1, length : 9 },
        {h3 : "너에게 닿기를", p : "10cm", thumbnail: Img1, length : 8 },
        {h3 : "너에게 닿기를", p : "10cm", thumbnail: Img1, length : 7 },
        {h3 : "너에게 닿기를", p : "10cm", thumbnail: Img1, length : 6 },
        {h3 : "너에게 닿기를", p : "10cm", thumbnail: Img1, length : 5 },
        {h3 : "너에게 닿기를", p : "10cm", thumbnail: Img1, length : 4 },
        {h3 : "너에게 닿기를", p : "10cm", thumbnail: Img1, length : 3 },
        {h3 : "너에게 닿기를", p : "10cm", thumbnail: Img1, length : 2 },
        {h3 : "너에게 닿기를", p : "10cm", thumbnail: Img1, length : 1 },

    ]
    return (
        <S.Container>
            <S.Button>
                <img src={LeftArrow} alt={"arrow"} />
            </S.Button>
            <S.Main>
                {data.map((item, idx)=>{
                    const isRank = idx < 3
                    const isLast = idx < data.length - 2
                    return(
                        <div>
                            <S.RankIcon>
                                {isRank && <img src={idx === 0 ? First : idx === 1 ? Second : Third} alt={'list'} />}
                            </S.RankIcon>
                            <S.Info isRank = {isRank}>
                                <div>
                                    <h3>{item.h3}</h3>
                                    <p>{item.p}</p>
                                </div>
                            </S.Info>
                            <S.Bar length={item.length} isRank = {isRank}>
                                {
                                    isLast &&
                                    <section>
                                        <img src={item.thumbnail} alt={'thumbnail'} />
                                    </section>
                                }
                                <S.BarColor />
                            </S.Bar>
                        </div>
                    )
                })}

            </S.Main>
            <S.Button>
                <img src={RightArrow} alt={"arrow"} />
            </S.Button>
        </S.Container>
    )
}