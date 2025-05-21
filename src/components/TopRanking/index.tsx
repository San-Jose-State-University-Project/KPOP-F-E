import * as S from "./style.ts"
import Img1 from "@/assets/img1.png"
import {useEffect, useState} from "react";
import Up from "@/assets/up.svg";
import Down from "@/assets/down.svg";
import First from "@/assets/1st.svg";
import Second from "@/assets/2nd.svg";
import Third from "@/assets/3rd.svg";

export default function TopRanking() {
    const data = [
        { h3: "사랑은 늘 도망가", p: "임영웅", thumbnail: Img1 },
        { h3: "첫눈처럼 너에게 가겠다", p: "에일리", thumbnail: Img1 },
        { h3: "아이와 나의 바다", p: "아이유", thumbnail: Img1 },
    ];
    const newData = [
        { h3: "너의 모든 순간", p: "성시경", thumbnail: Img1 },
        { h3: "첫사랑", p: "백예린", thumbnail: Img1 },
        { h3: "사랑은 늘 도망가", p: "임영웅", thumbnail: Img1 },
    ];
    const [prevRank, setPrevRank] = useState([
        0,0,0
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
            {
                newData.map((item, idx)=>{
                    let margin;
                    if (idx%2){
                        margin = "0 0 50px 0";
                    }
                    else{
                        margin = "50px 0 0 0";
                    }
                    return(
                        <S.Card margin = {margin}>
                            <S.Crown src={idx === 0 ? Second : idx === 1 ? First : Third} alt="crown"/>
                            <S.ImgBox>
                                <img src={item.thumbnail} alt="" />
                            </S.ImgBox>
                            <S.TextBox>
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
                                            <p style={{color : "#F38383"}}>{prevRank[idx] * -1}</p>
                                        }
                                    </S.Trans>
                                }
                                <h3 style={{fontSize : idx % 2 ? "1.4rem" : "1.2rem"}}>{item.h3}</h3>
                                <p style={{fontStyle : idx % 2 ? "1rem" : "0.8rem"}}>{item.p}</p>
                            </S.TextBox>
                        </S.Card>
                    )
                })
            }
        </S.Container>
    )
}