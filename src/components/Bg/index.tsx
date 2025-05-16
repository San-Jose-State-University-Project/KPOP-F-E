import styled from "styled-components";
import BgImg from "@/assets/image2.png"
import ProfileImg from "@/assets/image2.png"

export default function Bg () {
    return (
        <BgBox>
            <img src={BgImg} alt={"bg"} />
            <Blur />
            <Profile>
                <img src={ProfileImg} alt={"profile"} />
            </Profile>
        </BgBox>
    )
}

const BgBox = styled.div`
    width: 100%;
    height: 45%;
    position: relative;
    & > img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`
const Blur = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.00) 0%,
            rgba(23, 22, 38, 0.95) 99.99%
    );
`
const Profile = styled.div`
    width: 180px;
    border-radius: 20px;
    background-color: red;
    overflow: hidden;
    height: 180px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 10%);
    & > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`