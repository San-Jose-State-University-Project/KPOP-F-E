import * as S from "./style.ts"
import {useEffect, useRef, useState} from "react";
import Up from "@/assets/up.svg";
import Down from "@/assets/down.svg";
import First from "@/assets/1st.svg";
import Second from "@/assets/2nd.svg";
import Third from "@/assets/3rd.svg";

export default function TopRanking({Rank} : any) {
    const [newData, setNewData] = useState<any>();
    const [data, setData] = useState();
    // const dataRef = useRef();
    const changeNewData = () => {
        setNewData(Rank);
    }
    useEffect(() => {
        changeNewData();
    }, [Rank]);

    useEffect(() => {
        if (newData) {
            setData(newData);
            checkArtist();
        }
    }, [newData]);

    const [prevRank, setPrevRank] = useState([
        0,0,0
    ])
    const checkArtist = () => {
        if(!data || !newData) return
        const newPrev = [...prevRank];
        data.forEach(item => {
            const newIndex = newData.findIndex(
                d2 => d2.track_name === item.track_name && d2.artist_names === item.artist_names
            );

            if (newIndex !== -1) {
                newPrev[newIndex] = data.indexOf(item) - newIndex;
            }
        });
        setPrevRank(newPrev);
    };
    console.log(prevRank)
    console.log(data, newData)
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
                                <img src={item.image_url} alt="" />
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