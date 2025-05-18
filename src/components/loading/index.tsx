import styled from "styled-components";
import KTrand from "@/assets/k-trand-loading.webm";

export default function Loading(){
    return(
        <VideoBox>
            <Video src = {KTrand} autoPlay muted loop id="myVideo"></Video>
        </VideoBox>
    )
}

const VideoBox = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
`
export const Video = styled.video`
    position: fixed;
    top: 55%;
    width: 500px;
    left: 49%;
    z-index: 10;
    transform: translate(-50%, -50%);
`