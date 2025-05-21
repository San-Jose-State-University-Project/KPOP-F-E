import * as S from "./style.ts"
import {useState} from "react";
import Loading from "@/components/loading";

export default function GraphTrend({percentages, isLoading} : {percentages : number[], isLoading : boolean}) {
    const genreKeys = [
        "k-pop",
        "art pop",
        "pop",
        "hip hop",
        "west coast hip hop",
        "k-rap",
        "k-rock",
        "k-ballad",
        "bubblegum pop",
        "j-pop",
        "japanese indie",
        "j-rock",
        "r&b",
        "anime",
        "rap",
        "britpop",
        "madchester",
        "rock"
    ];
    const [isHover, setIsHover] = useState(
        Array.from({length : 18}).map(()=>false)
    );
    const handleMouseEnter = (idx : number) => {
        const newIsHover = [...isHover];
        newIsHover[idx] = true;
        setIsHover(newIsHover);
    }
    return (
        <S.Container>
            {isLoading && <Loading />}
            <S.BarBox length = {percentages?.length ?? 18}>
                {genreKeys.map((item, idx)=>{
                    console.log(percentages[item] ?? 0)
                    return(
                            <S.Bar
                                isLoading={isLoading}
                                length={percentages[item]?.per ?? 0}
                                key={idx}
                                onMouseEnter={()=>handleMouseEnter(idx)}
                                onMouseLeave={() => setIsHover(prev => prev.map(() => false))}
                            >
                                {isHover[idx] &&
                                    <S.InfoBox>
                                        <S.Info>{genreKeys[idx]}</S.Info>
                                        <S.Info>Total : {percentages[item].value}</S.Info>
                                    </S.InfoBox>
                                }
                            </S.Bar>
                        )

                })}
            </S.BarBox>
            <S.TextBox>
                {genreKeys.map((item)=>{
                    return <S.Text>{item}</S.Text>
                })}
            </S.TextBox>
        </S.Container>
    )
}