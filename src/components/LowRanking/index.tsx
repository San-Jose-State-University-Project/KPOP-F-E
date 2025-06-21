import * as S from "./style.ts"
import Up from "@/assets/up.svg";
import Down from "@/assets/down.svg";
import {useEffect, useState} from "react";
interface Props {
    track_name: string;
    artist_name: string;
    rank: number;
    image_url: string;
}

export default function LowRanking({Rank}) {
    const [newData, setNewData] = useState<Props[]>();
    const [data, setData] = useState<Props[]>();
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
        0,0,0,0,0
    ])
    const checkArtist = () => {
        if(!data || !newData) return
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
    console.log(prevRank)
    console.log(data, newData)
    return (
        <S.Container>
            {newData && newData.map((item, idx)=>{
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
                            <h4>{item.track_name}</h4>
                            <p>{item.artist_name}</p>
                        </S.TextBox>
                        <S.ImgBox>
                            <img src={item.image_url} alt={"artist"} />
                        </S.ImgBox>
                        <S.BarColor />
                    </S.Card>
                )
            })}
        </S.Container>
    )
}