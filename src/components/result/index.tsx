import styled from "styled-components";
import WhiteArrow from "@/assets/whiteArrow.svg"
import {useNavigate} from "react-router-dom";
import Heart from "@/assets/heart.svg"
import People from "@/assets/people.svg"
import Skeleton from "@/components/skeleton/indes.tsx";
import type {SearchArtist} from "@/types/artist.ts";
import Logo from "@/assets/onlylogo.svg"

export default function Result({height, navi, isLoading, searchData}  : {height : number, navi : string, isLoading : boolean, searchData : SearchArtist[] | null| string}) {
    const navigate = useNavigate()
    const handleClick = (path : string, name : string) =>{
        if(navi === "search"){
            navigate(path + "/" + name)
        }
        else{
            navigate(navi + "/1")
        }
    }
    const num = 8 - (searchData?.length ?? 0)
    return(
        <ResultBox isLoading = {isLoading}>
            {isLoading &&
                Array.from({ length: 8 }).map(()=>{
                    return(
                        <Skeleton height={150} />
                    )
                })
            }
            {searchData && typeof searchData === "string" ? <h3>No search results</h3> : null}
            {searchData && typeof searchData!== "string" ? searchData.map(item=>{
                return(
                    <Artist height={height} onClick={()=>handleClick('/artist', item.artist_name)}>
                        {item.image_url ?
                            <ImgBox>
                                <img src={item.image_url} alt={"artist"} />
                            </ImgBox>
                            :
                            <ImgBox>
                                <img src={Logo} alt={"artist"} />
                            </ImgBox>
                        }

                        <div>
                            <div>
                                <TitleBox>
                                    <h3>{item.artist_name}</h3>
                                    <img src={WhiteArrow} alt={"arrow"} />
                                </TitleBox>
                            </div>
                            <Info>
                                <div>
                                    <img src={Heart} alt={"heart"} />
                                    <p>{item.popularity}</p>
                                </div>
                                <div>
                                    <img src={People} alt={"people"} />
                                    <p>{item.followers}</p>
                                </div>
                            </Info>
                        </div>
                    </Artist>
                )
            }) : null}
            {
                num > 0 &&
                Array.from({ length: num }).map(()=>{
                    return(
                        <UnBox />
                    )
                })
            }
        </ResultBox>
    )
}
const UnBox = styled.div`
    padding: 15px 20px;
    width: 100%;
    height: 180px;
`
const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    & > div{
        display: flex;
        align-items: center;
        gap: 5px;
        
    }
`
const ImgBox = styled.div`
    border-radius: 20px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    & > img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`
const ResultBox = styled.section<{isLoading : boolean}>`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4% 10px;
`
const Artist = styled.article<{height : number}>`
    background-color: #1D1D37;
    border-radius: 20px;
    padding: 15px 20px;
    display: grid;
    width: 100%;
    height: 180px;
    
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    & > div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    & > div > div > p{
        color : ${({ theme }) => theme.colors.gray};
    }
    transition: 0.4s;
    &:hover{
        transform: translateY(-10px);
        box-shadow: 0px 4px 10px 0px ${({ theme }) => theme.colors.primary};
        cursor: pointer;
    }
    &:active{
        transform: translateY(0px);
        box-shadow: none;
    }
`
const TitleBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > img{
        width: 24px;
    }
`