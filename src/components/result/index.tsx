import styled from "styled-components";
import WhiteArrow from "@/assets/whiteArrow.svg"
import Img1 from "@/assets/img1.png"
import {useNavigate} from "react-router-dom";
import Heart from "@/assets/heart.svg"
import People from "@/assets/people.svg"

export default function Result({height = 140, navi}  : {height : number, navi : string}) {
    const navigate = useNavigate()
    const handleClick = (path) =>{
        if(navi === "search"){
            navigate("/artist/1")
        }
        else{
            navigate(navi + "/1")
        }
    }
    return(
        <ResultBox>
            <Artist height={height} onClick={()=>handleClick('/artist/1')}>
                <ImgBox>
                    <img src={Img1} alt={"artist"} />
                </ImgBox>
                <div>
                    <div>
                        <TitleBox>
                            <h2>artist name</h2>
                            <img src={WhiteArrow} alt={"arrow"} />
                        </TitleBox>
                        <p>k-pop</p>
                    </div>
                    <Info>
                        <div>
                            <img src={Heart} alt={"heart"} />
                            <p>3</p>
                        </div>
                        <div>
                            <img src={People} alt={"people"} />
                            <p>3</p>
                        </div>
                    </Info>
                </div>
            </Artist>
        </ResultBox>
    )
}
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
const ResultBox = styled.section`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 20px;
`
const Artist = styled.article<{height : number}>`
    background-color: #1D1D37;
    border-radius: 20px;
    padding: 15px 20px;
    display: grid;
    max-width: 50%;
    height: ${(props) => (props.height)}%;
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