import * as S from "./style.ts"
import {useEffect, useState} from "react";
import LeftArrow from '@/assets/left-arrow.svg'
import RightArrow from '@/assets/right-arrow.svg'
import Img1 from '@/assets/img1.png'
import First from '@/assets/first.svg'
import Second from '@/assets/second.svg'
import Third from '@/assets/third.svg'
import Up from '@/assets/up.svg'
import Down from '@/assets/down.svg'

export default function Ranking() {
    const data = [
        { h3: "사랑은 늘 도망가", p: "임영웅", thumbnail: Img1 },
        { h3: "첫눈처럼 너에게 가겠다", p: "에일리", thumbnail: Img1 },
        { h3: "아이와 나의 바다", p: "아이유", thumbnail: Img1 },
        { h3: "취중고백", p: "김민석", thumbnail: Img1 },
        { h3: "인연", p: "이선희", thumbnail: Img1 },
        { h3: "안녕", p: "폴킴", thumbnail: Img1 },
        { h3: "하루 끝", p: "아이유", thumbnail: Img1 },
        { h3: "너의 모든 순간", p: "성시경", thumbnail: Img1 },
        { h3: "봄날", p: "방탄소년단", thumbnail: Img1 },
        { h3: "헤어지자 말해요", p: "박재정", thumbnail: Img1 }
    ];
    const newData = [
        { h3: "너의 모든 순간", p: "성시경", thumbnail: Img1 },
        { h3: "첫사랑", p: "백예린", thumbnail: Img1 },
        { h3: "아이와 나의 바다", p: "아이유", thumbnail: Img1 },
        { h3: "별 보러 가자", p: "적재", thumbnail: Img1 },
        { h3: "헤어지자 말해요", p: "박재정", thumbnail: Img1 },
        { h3: "사건의 지평선", p: "윤하", thumbnail: Img1 },
        { h3: "너를 만나", p: "폴킴", thumbnail: Img1 },
        { h3: "All of My Life", p: "박원", thumbnail: Img1 },
        { h3: "밤이 무서워요", p: "10CM", thumbnail: Img1 },
        { h3: "봄 사랑 벚꽃 말고", p: "하이포 & 아이유", thumbnail: Img1 }
    ];
    const [prevRank, setPrevRank] = useState([
        0,0,0,0,0,0,0,0,0,0
    ])
    const checkArtist = () => {
        const newPrev = [...prevRank];

        data.forEach(item => {
            const newIndex = newData.findIndex(
                d2 => d2.h3 === item.h3 && d2.p === item.p
            );

            if (newIndex !== -1) {
                newPrev[newIndex] = data.indexOf(item) - newIndex;
            }
        });
        setPrevRank(newPrev);
    };
    useEffect(() => {
        checkArtist()
    }, [])
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
                                    <h4>{item.h3}</h4>
                                    <p>{item.p}</p>
                                </div>
                            </S.Info>
                            <S.BarBox>
                                <S.Bar length={10 - idx} isRank = {isRank}>
                                    {
                                        isLast &&
                                        <section>
                                            <img src={item.thumbnail} alt={'thumbnail'} />
                                        </section>
                                    }
                                    <S.BarColor />
                                </S.Bar>
                                {
                                    prevRank[idx] !== 0 &&
                                    <S.Trans duration={0.8}>
                                        {prevRank[idx] > 0 &&
                                            <img src={Up} alt={'up'} />
                                        }
                                        {prevRank[idx]  > 0 &&
                                            <p style={{color : "#76F383"}}>{prevRank[idx]}</p>
                                        }
                                        {prevRank[idx] < 0 &&
                                            <img src={Down} alt={'down'} />
                                        }
                                        {prevRank[idx] < 0 &&
                                            <p style={{color : "#F38383"}}>{prevRank[idx]}</p>
                                        }
                                    </S.Trans>
                                }
                            </S.BarBox>
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