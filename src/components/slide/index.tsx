import {styled} from "styled-components";
import {useEffect, useRef} from "react";

export default function Slide(){
    const track = useRef<HTMLDivElement>(null)
    const slide = [
        "/images/slide1.svg",
        "/images/slide2.svg",
        "/images/slide3.svg",
        "/images/slide5.svg",
        "/images/slide6.svg"
    ]


    useEffect(() => {
        if (track.current) {
            const width = track.current.offsetWidth;
            console.log("너비:", width);
        }
    }, []);
    return (
        <SlideBox>
            <SlideTrack ref={track}>
                {[...slide, ...slide].map((item, idx) => {
                    return (
                        <img key={idx} src={item} alt={"slide"} />
                    )
                })}
            </SlideTrack>
        </SlideBox>
    )
}

const SlideBox = styled.section`
    width: 100vw;
    position: fixed;
    bottom: 5%;
    left: 0;
    background-color: #282743;
`
const SlideTrack = styled.div`
    padding: 10px 0;
    display: flex;
    width: 100vw;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
    animation: scroll 20s linear infinite;
    @keyframes scroll {
        0% { transform: translateX(40%); }
        100% { transform: translateX(-50%); }
    }
`