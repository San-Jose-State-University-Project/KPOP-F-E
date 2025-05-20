import * as S from "./style.ts"
import Delight from '@/assets/delight.svg'
import Sorrow from '@/assets/sorrow.svg'
import Anger from '@/assets/anger.svg'
import Discusting from '@/assets/disgusting.svg'
import Amazing from '@/assets/amazing.svg'
import Emotionless from '@/assets/emotionless.svg'
import Afraid from '@/assets/afraid.svg'
import {useParams} from "react-router-dom";


export default function ComparisonCenter() {
    const params = useParams()

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
                    <S.moveP duration={1.2}>45000000 +</S.moveP>
                    <p>FOLLOWERS</p>
                    <S.moveP duration={1.4}>45000000 +</S.moveP>
                </S.Comparison>
                <S.Comparison>
                    <S.moveP duration={1.6}>95/100</S.moveP>
                    <p>POPULARITY</p>
                    <S.moveP duration={1.8}>95/100</S.moveP>
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
                                         <S.BarContent color={"#EF7477"} width={30} />
                                     </S.Bar>
                                     <S.Label>anger</S.Label>
                                 </div>
                                 <div>
                                     <S.Bar>
                                         <S.BarContent color={"white"} width={30} />
                                     </S.Bar>
                                     <S.Label>neutral</S.Label>
                                 </div>
                                 <div>
                                     <S.Bar>
                                         <S.BarContent color={"#76D0F3"} width={30} />
                                     </S.Bar>
                                     <S.Label>sadness</S.Label>
                                 </div>
                                 <div>
                                     <S.Bar>
                                         <S.BarContent color={"#8248E4"} width={30} />
                                     </S.Bar>
                                     <S.Label>surprise</S.Label>
                                 </div>
                                 <div>
                                     <S.Bar>
                                         <S.BarContent color={"#F1D162"} width={30} />
                                     </S.Bar>
                                     <S.Label>joy</S.Label>
                                 </div>
                                 <div>
                                     <S.Bar>
                                         <S.BarContent color={"#28A335"} width={30} />
                                     </S.Bar>
                                     <S.Label>disgust</S.Label>
                                 </div>
                                 <div>
                                     <S.Bar>
                                         <S.BarContent color={"#4C5EE5"} width={30} />
                                     </S.Bar>
                                     <S.Label>fear</S.Label>
                                 </div>
                             </S.Graph>
                         </S.GraphBox>
                         <S.Emotion>
                             <p>delight</p>
                             <img src={Delight} alt={"delight"} />
                         </S.Emotion>
                     </S.EmotionBox>
                    <p>EMOTION</p>
                    <S.EmotionBox>
                        <S.Emotion>
                            <p>delight</p>
                            <img src={Sorrow} alt={"Sorrow"} />
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
                                    <S.Label >anger</S.Label>
                                    <S.Bar style={{justifyContent : "flex-start"}}>
                                        <S.BarContent color={"#EF7477"} width={90} />
                                    </S.Bar>
                                </div>
                                <div>
                                    <S.Label>neutral</S.Label>
                                    <S.Bar style={{justifyContent : "flex-start"}}>
                                        <S.BarContent color={"white"}  width={90} />
                                    </S.Bar>
                                </div>
                                <div>
                                    <S.Label>sadness</S.Label>
                                    <S.Bar style={{justifyContent : "flex-start"}}>
                                        <S.BarContent color={"#76D0F3"} width={90} />
                                    </S.Bar>
                                </div>
                                <div>
                                    <S.Label>surprise</S.Label>
                                    <S.Bar style={{justifyContent : "flex-start"}}>
                                        <S.BarContent color={"#8248E4"} width={90} />
                                    </S.Bar>

                                </div>
                                <div>
                                    <S.Label>joy</S.Label>
                                    <S.Bar style={{justifyContent : "flex-start"}}>
                                        <S.BarContent color={"#F1D162"} width={90} />
                                    </S.Bar>
                                </div>
                                <div>
                                    <S.Label>disgust</S.Label>
                                    <S.Bar style={{justifyContent : "flex-start"}}>
                                        <S.BarContent color={"#28A335"} width={90} />
                                    </S.Bar>

                                </div>
                                <div>
                                    <S.Label>fear</S.Label>
                                    <S.Bar style={{justifyContent : "flex-start"}}>
                                        <S.BarContent color={"#4C5EE5"} width={90} />
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
