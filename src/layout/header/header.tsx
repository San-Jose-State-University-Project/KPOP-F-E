import * as S from "./header.ts"
import Search from "@/assets/search.svg"
import Logo from "@/assets/logo.svg"
import {useNavigate} from "react-router-dom";

export default function Header(){
    const data = [
        {name : "Home", path : "/"},
        {name : "Trand", path: "/trand"},
    ]
    const navigate = useNavigate()
    const handleClick = (path) =>{
        navigate(path)
    }
    return(
        <S.Header>
            <S.Logo onClick={()=> handleClick("/")} src={Logo} alt={"logo"}/>
            <S.Nav>
                {data.map((item, idx) => {
                    const isActive = window.location.pathname === item.path;
                    return (
                        <p onClick={()=> handleClick(item.path)} style={{ fontWeight : isActive ? "bold" : "normal", color: isActive ? "#8248E4" : "white" }} key={idx}>
                            {item.name}
                        </p>
                    );
                })}
            </S.Nav>
            <S.SearchBtn onClick={()=>handleClick('/search')}>
                <img src={Search} alt={"search"} />
                <p>Artist Search</p>
            </S.SearchBtn>
        </S.Header>
    )
}