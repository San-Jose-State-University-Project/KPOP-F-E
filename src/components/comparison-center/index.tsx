import * as S from "./style.ts"
import joy from '@/assets/joy.svg'
import sadness from '@/assets/sadness.svg'
import anger from '@/assets/anger.svg'
import disgust from '@/assets/disgust.svg'
import surprise from '@/assets/surprise.svg'
import neutral from '@/assets/neutral.svg'
import fear from '@/assets/fear.svg'
import {useParams} from "react-router-dom";
import type {Artist, KpopEmotionData} from "@/types/artist.ts";

export default function ComparisonCenter({Left, Right, LeftEmotion, RightEmotion} : {Left: Artist, Right: Artist, LeftEmotion: KpopEmotionData, RightEmotion: KpopEmotionData}) {
    const params = useParams()
    const img = [joy, sadness, anger, disgust, surprise, neutral, fear]

    const maxLeftEmotion = Object.entries(LeftEmotion.emotion_count).reduce((max, entry) => {
        const [emotion, count] = entry;
        return count > max[1] ? [emotion, count] : max;
    }, ["", -Infinity]);

    const maxRightEmotion = Object.entries(RightEmotion.emotion_count).reduce((max, entry) => {
        const [emotion, count] = entry;
        return count > max[1] ? [emotion, count] : max;
    }, ["", -Infinity]);

    const leftEmotionPersent = Object.fromEntries(
        Object.entries(LeftEmotion.emotion_count).map(([key, value]) => [key, {per : parseInt((value / maxLeftEmotion[1] * 100).toFixed(0)), value : value}])
    );
    const rightEmotionPersent = Object.fromEntries(
        Object.entries(RightEmotion.emotion_count).map(([key, value]) => [key, {per : parseInt((value / maxRightEmotion[1] * 100).toFixed(0)), value : value}])
    );
    console.log(img.find(item=>item.includes(maxLeftEmotion[0])))
    return (
        <S.TextBox>
            <h1>Comparison</h1>
            <S.ComBox>
                <S.Comparison>
                    <S.moveP duration={0.8}>{params.leftArtist}</S.moveP>
                    <p>NAME</p>
                    <S.moveP duration={1}>{params.rightArtist}</S.moveP>
                </S.Comparison>
                <S.Comparison>
                    <S.moveP duration={1.2}>{Left.followers}</S.moveP>
                    <p>FOLLOWERS</p>
                    <S.moveP duration={1.4}>{Right.followers}</S.moveP>
                </S.Comparison>
                <S.Comparison>
                    <S.moveP duration={1.6}>{Left.popularity}</S.moveP>
                    <p>POPULARITY</p>
                    <S.moveP duration={1.8}>{Right.popularity}</S.moveP>
                </S.Comparison>
                <S.Comparison>
                    <S.EmotionBox>
                         <S.GraphBox>
                             <S.length>
                                 <div>
                                     <p>100</p>
                                     <p>80</p>
                                     <p>60</p>
                                     <p>40</p>
                                     <p>20</p>
                                     <p>0</p>
                                 </div>
                             </S.length>
                             <S.Graph>
                                 <div>
                                     <S.Bar>
                                         <S.BarContent color={"#F1D162"} width={leftEmotionPersent["joy"].per} />
                                     </S.Bar>
                                     <S.Label>joy</S.Label>
                                 </div>
                                 <div>
                                     <S.Bar>
                                         <S.BarContent color={"#76D0F3"} width={leftEmotionPersent["sadness"].per} />
                                     </S.Bar>
                                     <S.Label>sadness</S.Label>
                                 </div>
                                 <div>
                                     <S.Bar>
                                         <S.BarContent color={"#8248E4"} width={leftEmotionPersent["surprise"].per} />
                                     </S.Bar>
                                     <S.Label>surprise</S.Label>
                                 </div>
                                 <div>
                                     <S.Bar>
                                         <S.BarContent color={"#EF7477"} width={leftEmotionPersent["anger"].per} />
                                     </S.Bar>
                                     <S.Label>anger</S.Label>
                                 </div>
                                 <div>
                                     <S.Bar>
                                         <S.BarContent color={"#28A335"} width={leftEmotionPersent["disgust"].per} />
                                     </S.Bar>
                                     <S.Label>disgust</S.Label>
                                 </div>
                                 <div>
                                     <S.Bar>
                                         <S.BarContent color={"white"} width={leftEmotionPersent["neutral"].per} />
                                     </S.Bar>
                                     <S.Label>neutral</S.Label>
                                 </div>
                                 <div>
                                     <S.Bar>
                                         <S.BarContent color={"#4C5EE5"} width={leftEmotionPersent["fear"].per} />
                                     </S.Bar>
                                     <S.Label>fear</S.Label>
                                 </div>
                             </S.Graph>
                         </S.GraphBox>
                         <S.Emotion>
                             <p>{maxLeftEmotion[0]}</p>
                             <img src={img.find(item=>item.includes(maxLeftEmotion[0]))} alt={"emotion"} />
                         </S.Emotion>
                     </S.EmotionBox>
                    <p>EMOTION</p>
                    <S.EmotionBox>
                        <S.Emotion>
                            <p>{maxRightEmotion[0]}</p>
                            <img src={img.find(item=>item.includes(maxRightEmotion[0]))} alt={"emotion"} />
                        </S.Emotion>
                        <S.GraphBox>
                            <S.length style={{justifyContent : "flex-end"}}>
                                <div >
                                    <p>0</p>
                                    <p>20</p>
                                    <p>40</p>
                                    <p>60</p>
                                    <p>80</p>
                                    <p>100</p>
                                </div>
                            </S.length>
                            <S.Graph>
                                <div>
                                    <S.Label>joy</S.Label>
                                    <S.Bar style={{justifyContent : "flex-start"}}>
                                        <S.BarContent color={"#F1D162"} width={rightEmotionPersent["joy"].per} />
                                    </S.Bar>
                                </div>
                                <div>
                                    <S.Label>sadness</S.Label>
                                    <S.Bar style={{justifyContent : "flex-start"}}>
                                        <S.BarContent color={"#76D0F3"} width={rightEmotionPersent["sadness"].per} />
                                    </S.Bar>
                                </div>
                                <div>
                                    <S.Label>surprise</S.Label>
                                    <S.Bar style={{justifyContent : "flex-start"}}>
                                        <S.BarContent color={"#8248E4"} width={rightEmotionPersent["surprise"].per} />
                                    </S.Bar>

                                </div>
                                <div>
                                    <S.Label >anger</S.Label>
                                    <S.Bar style={{justifyContent : "flex-start"}}>
                                        <S.BarContent color={"#EF7477"} width={rightEmotionPersent["anger"].per} />
                                    </S.Bar>
                                </div>
                                <div>
                                    <S.Label>disgust</S.Label>
                                    <S.Bar style={{justifyContent : "flex-start"}}>
                                        <S.BarContent color={"#28A335"} width={rightEmotionPersent["disgust"].per} />
                                    </S.Bar>

                                </div>
                                <div>
                                    <S.Label>neutral</S.Label>
                                    <S.Bar style={{justifyContent : "flex-start"}}>
                                        <S.BarContent color={"white"}  width={rightEmotionPersent["neutral"].per} />
                                    </S.Bar>
                                </div>
                                <div>
                                    <S.Label>fear</S.Label>
                                    <S.Bar style={{justifyContent : "flex-start"}}>
                                        <S.BarContent color={"#4C5EE5"} width={rightEmotionPersent["fear"].per} />
                                    </S.Bar>

                                </div>
                            </S.Graph>
                        </S.GraphBox>

                    </S.EmotionBox>
                </S.Comparison>
            </S.ComBox>
            <h1></h1>
        </S.TextBox>
    )
}
