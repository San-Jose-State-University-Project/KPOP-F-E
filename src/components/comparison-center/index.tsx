import * as S from "./style.ts"
import Delight from '@/assets/delight.svg'
import Sorrow from '@/assets/sorrow.svg'
import Anger from '@/assets/anger.svg'
import Discusting from '@/assets/disgusting.svg'
import Amazing from '@/assets/amazing.svg'
import Emotionless from '@/assets/emotionless.svg'
import Afraid from '@/assets/afraid.svg'


export default function ComparisonCenter() {
    return (
        <S.TextBox>
            <h1>Comparison</h1>
            <S.ComBox>
                <S.Comparison>
                    <p>BTS</p>
                    <p>NAME</p>
                    <p>BTS</p>
                </S.Comparison>
                <S.Comparison>
                    <p>45000000 +</p>
                    <p>FOLLOWERS</p>
                    <p>45000000 +</p>
                </S.Comparison>
                <S.Comparison>
                    <p>95/100</p>
                    <p>POPULARITY</p>
                    <p>95/100</p>
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
                                         <S.BarContent />
                                     </S.Bar>
                                     <S.Label>anger</S.Label>
                                 </div>
                                 <div>
                                     <S.Bar>
                                         <S.BarContent />
                                     </S.Bar>
                                     <S.Label>neutral</S.Label>
                                 </div>
                                 <div>
                                     <S.Bar>
                                         <S.BarContent />
                                     </S.Bar>
                                     <S.Label>sadness</S.Label>
                                 </div>
                                 <div>
                                     <S.Bar>
                                         <S.BarContent />
                                     </S.Bar>
                                     <S.Label>surprise</S.Label>
                                 </div>
                                 <div>
                                     <S.Bar>
                                         <S.BarContent />
                                     </S.Bar>
                                     <S.Label>joy</S.Label>
                                 </div>
                                 <div>
                                     <S.Bar>
                                         <S.BarContent />
                                     </S.Bar>
                                     <S.Label>disgust</S.Label>
                                 </div>
                                 <div>
                                     <S.Bar>
                                         <S.BarContent />
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
                            <img src={Delight} alt={"delight"} />
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
                                    <S.Bar>
                                        <S.BarContent />
                                    </S.Bar>
                                </div>
                                <div>
                                    <S.Label>neutral</S.Label>
                                    <S.Bar>
                                        <S.BarContent />
                                    </S.Bar>
                                </div>
                                <div>
                                    <S.Label>sadness</S.Label>
                                    <S.Bar>
                                        <S.BarContent />
                                    </S.Bar>
                                </div>
                                <div>
                                    <S.Label>surprise</S.Label>
                                    <S.Bar>
                                        <S.BarContent />
                                    </S.Bar>

                                </div>
                                <div>
                                    <S.Label>joy</S.Label>
                                    <S.Bar>
                                        <S.BarContent />
                                    </S.Bar>
                                </div>
                                <div>
                                    <S.Label>disgust</S.Label>
                                    <S.Bar>
                                        <S.BarContent />
                                    </S.Bar>

                                </div>
                                <div>
                                    <S.Label>fear</S.Label>
                                    <S.Bar>
                                        <S.BarContent />
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
