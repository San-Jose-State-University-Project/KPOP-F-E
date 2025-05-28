import * as React from "react";
import * as S from "./style.ts"
import KTrend from "@/assets/k-trend.webm"

export default function Animation({children}: React.PropsWithChildren) {
    return (
        <S.Container>
            <S.Close1 />
            <S.Close2 />
            <S.video src = {KTrend} autoPlay muted loop id="myVideo"></S.video>
            {children}
        </S.Container>
    )
}