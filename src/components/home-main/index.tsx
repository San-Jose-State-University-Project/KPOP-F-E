import * as S from "./style.ts"
import Graph from '@/assets/graph.svg'

export default function HomeMain() {
    const isAnimation  = !localStorage.getItem("appeared")
    return (
        <S.HomeMain>
            <img width={'10%'} src={Graph} alt={"graph"} />
            <S.moveH duration={0.5} delay ={isAnimation ? 3.6 : 0} style={{fontSize: '6rem', background:"none"}}>Providing</S.moveH>
            <S.Title>
                <div>
                    <S.moveH1 delay ={isAnimation ? 3.6 : 0} duration={0.8}>K-POP Trends</S.moveH1>
                </div>
            </S.Title>
            <S.Line delay ={isAnimation ? 3.8 : 0} duration={0.9} />
            <S.Desc>
                <S.moveP delay ={isAnimation ? 3.8 : 0} duration={1}>Provides</S.moveP>
                <S.moveP delay ={isAnimation ? 3.8 : 0} duration={1.1}> K-POP </S.moveP>
                <S.moveP delay ={isAnimation ? 3.8 : 0} duration={1.2}>trends </S.moveP>
                <S.moveP delay ={isAnimation ? 3.8 : 0} duration={1.3}>and </S.moveP>
                <S.moveP delay ={isAnimation ? 3.8 : 0} duration={1.4}>artist</S.moveP>
                <S.moveP delay ={isAnimation ? 3.8 : 0} duration={1.5}>information</S.moveP>
            </S.Desc>
        </S.HomeMain>
    )
}