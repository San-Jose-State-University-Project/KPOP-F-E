import * as S from "./style.ts"
import Up from "@/assets/up.svg";
import Down from "@/assets/down.svg";
import Img1 from "@/assets/img1.png";
import {useEffect, useState} from "react";

export default function LowRanking() {
    const data = [
        { h3: "취중고백", p: "김민석", thumbnail: Img1 },
        { h3: "인연", p: "이선희", thumbnail: Img1 },
        { h3: "안녕", p: "폴킴", thumbnail: Img1 },
        { h3: "하루 끝", p: "아이유", thumbnail: Img1 },
        { h3: "너의 모든 순간", p: "성시경", thumbnail: Img1 },
        { h3: "봄날", p: "방탄소년단", thumbnail: Img1 },
        { h3: "헤어지자 말해요", p: "박재정", thumbnail: Img1 }
    ];
    const newData = [
        { h3: "별 보러 가자", p: "적재", thumbnail: Img1 },
        { h3: "헤어지자 말해요", p: "박재정", thumbnail: Img1 },
        { h3: "사건의 지평선", p: "윤하", thumbnail: Img1 },
        { h3: "너를 만나", p: "폴킴", thumbnail: Img1 },
        { h3: "All of My Life", p: "박원", thumbnail: Img1 },
        { h3: "밤이 무서워요", p: "10CM", thumbnail: Img1 },
        { h3: "봄 사랑 벚꽃 말고", p: "하이포 & 아이유", thumbnail: Img1 }
    ];
    const [prevRank, setPrevRank] = useState([
        0,0,0,0,0,0,0
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
            {newData.map((item, idx)=>{
                return(
                    <S.Card>
                        {
                            prevRank[idx] !== 0 ?
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
                            </S.Trans> : <S.UnBox/>
                        }
                        <h3>{idx+4}</h3>
                        <S.TextBox>
                            <h4>{item.h3}</h4>
                            <p>{item.p}</p>
                        </S.TextBox>
                        <S.ImgBox>
                            <img src={item.thumbnail} alt={"artist"} />
                        </S.ImgBox>
                        <S.BarColor />
                    </S.Card>
                )
            })}
        </S.Container>
    )
}