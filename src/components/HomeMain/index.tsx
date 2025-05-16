import * as S from "./style.ts"
import Graph from '@/assets/graph.svg'

export default function HomeMain() {
    return (
        <S.HomeMain>
            <img width={'10%'} src={Graph} alt={"graph"} />
            <h1 style={{fontSize: '6rem'}}>Providing</h1>
            <S.Title>
                <div>
                    <h1>K-POP</h1>
                    <h1>Trands</h1>
                </div>
            </S.Title>
            <S.Line />
            <S.Desc>
                <p>Provides</p>
                <p> K-POP </p>
                <p>trends </p>
                <p>and </p>
                <p>artist</p>
                <p>information</p>
            </S.Desc>
        </S.HomeMain>
    )
}