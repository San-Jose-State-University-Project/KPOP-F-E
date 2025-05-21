import * as S from "./style.ts"
import {useEffect, useRef, useState} from "react";
import Up from "@/assets/up.svg";
import Down from "@/assets/down.svg";
import First from "@/assets/1st.svg";
import Second from "@/assets/2nd.svg";
import Third from "@/assets/3rd.svg";

export default function TopRanking({Rank} : any) {
    const [newData, setNewData] = useState<any>(Rank);
    const [data, setData] = useState([]);
    const countRef = useRef(0);
    useEffect(() => {
        countRef.current += 1;
        setData(newData);
        setNewData(Rank);
        checkArtist()
    }, [Rank]);
    // const newData = [
    //     { h3: "너의 모든 순간", p: "성시경", thumbnail: Img1 },
    //     { h3: "첫사랑", p: "백예린", thumbnail: Img1 },
    //     { h3: "사랑은 늘 도망가", p: "임영웅", thumbnail: Img1 },
    // ];
    const [prevRank, setPrevRank] = useState([
        0,0,0
    ])

    const checkArtist = () => {
        const newPrev = [...prevRank];

        data.forEach(item => {
            const newIndex = newData.findIndex(
                d2 => d2.track_name === item.track_name && d2.artist_name === item.artist_name
            );

            if (newIndex !== -1) {
                newPrev[newIndex] = data.indexOf(item) - newIndex;
            }
        });
        setPrevRank(newPrev);
    };
    return (
        <S.Container>
            {
                newData && newData.map((item, idx)=>{
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
                                <img src={item.image_uri} alt="" />
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
                                <h3 style={{fontSize : idx % 2 ? "1.4rem" : "1.2rem"}}>{item.track_name.length > 20 ? item.track_name.slice(0, 20) + "..." : item.track_name}</h3>
                                <p style={{fontStyle : idx % 2 ? "1rem" : "0.8rem"}}>{item.artist_names}</p>
                            </S.TextBox>
                        </S.Card>
                    )
                })
            }
        </S.Container>
    )
}