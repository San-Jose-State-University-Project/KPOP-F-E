import * as S from "./header.ts"
import Search from "@/assets/search.svg"
import Logo from "@/assets/logo.svg"

export default function Header(){
    return(
        <S.Header>
            <S.Logo src={Logo} alt={"logo"}/>
            <S.Nav>
                <p>Home</p>
                <p>Trand</p>
            </S.Nav>
            <S.SearchBtn>
                <img src={Search} alt={"search"} />
                <p>Artist Search</p>
            </S.SearchBtn>
        </S.Header>
    )
}