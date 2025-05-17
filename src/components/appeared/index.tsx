import {useEffect, useState} from "react";
import * as React from "react";
import * as S from "./style.ts"
import KTrand from "@/assets/k-trand.webm"

export default function Animation({children}: React.PropsWithChildren) {
    const [isAnimation, setIsAnimation] = useState(true);
    useEffect(()=> {
        if(!localStorage.getItem("appeared")){
            setIsAnimation(false)
            localStorage.setItem("appeared", "true")
        }
    }, [])
    if(isAnimation){
        return (
           <>
               {children}
           </>
        )
    }
    return (
        <S.Container>
            <S.Close1 />
            <S.Close2 />
            <S.video src = {KTrand} autoPlay muted loop id="myVideo"></S.video>
            {children}
        </S.Container>
    )
}