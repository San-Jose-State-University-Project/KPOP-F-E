import {styled} from "styled-components";
import WhiteArrow from "@/assets/arrow-skeleton.svg";
import Heart from "@/assets/skeleton-heart.svg";
import People from "@/assets/skeleton-people.svg";

export default function Skeleton({height = 100}  : {height : number}) {
    return (
        <Artist height={height}>
            <ImgBox>
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
    )
}


const Info = styled.div`
    display: flex;
    align-items: center;
    background: #3A3A64;
    border-radius: 10px;
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
    overflow: hidden;
    background: #3A3A64;
`
const Artist = styled.article<{height : number}>`
    color: #3A3A64;
    background-color: #1D1D37;
    border-radius: 20px;
    padding: 15px 20px;
    display: grid;
    max-width: 100%;
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
        background: #3A3A64;
        width: max-content;
        border-radius: 10px;
        margin-top: 10px;
        color: #3A3A64;
    }
`
const TitleBox = styled.div`
    background: #3A3A64;
    width: 100%;
    color: #3A3A64;
    border-radius:10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > img{
        width: 24px;
    }
`