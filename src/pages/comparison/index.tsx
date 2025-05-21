import Layout from "@/layout";
import styled from "styled-components";
import Center from "@/components/comparison-center"
import LeftArtist from "@/components/left-artist";
import RightArtist from "@/components/right-artist";
import {useParams} from "react-router-dom";
import {useGetArtistEmotion, useGetArtistInfo} from "@/hooks/artist.ts";
import Loading from "@/components/loading";

export default function Comparison() {
    const params = useParams()
    const leftArtist = params.leftArtist
    const rightArtist = params.rightArtist

    const {data : left, isLoading : leftLoading} = useGetArtistInfo(leftArtist ?? '');
    const {data : right, isLoading : rightLoading} = useGetArtistInfo(rightArtist ?? '');

    // const {data : leftEmotion, isLoading : leftEmotionLoading} = useGetArtistEmotion(leftArtist ?? '');
    // const {data : rightEmotion, isLoading : rightEmotionLoading} = useGetArtistEmotion(rightArtist ?? '');

    const leftEmotion = {
        "artist_name": "BOL4",
        "emotion_list": [
            {
                "title": "여행",
                "emotion": "joy"
            },
            {
                "title": "여행",
                "emotion": "joy"
            }
        ],
        "emotion_count": {
            "joy": 1,
            "sadness": 1,
            "surprise": 1,
            "anger": 1,
            "disgust": 1,
            "neutral": 2,
            "fear": 3
        }
    }

    const rightEmotion = {
        "artist_name": "BOL4",
        "emotion_list": [
            {
                "title": "여행",
                "emotion": "joy"
            },
            {
                "title": "여행",
                "emotion": "joy"
            }
        ],
        "emotion_count": {
            "joy": 1,
            "sadness": 1,
            "surprise": 1,
            "anger": 1,
            "disgust": 1,
            "neutral": 2,
            "fear": 3
        }
    }
    return (
        <Layout>
            {leftLoading || rightLoading && <Loading />}
            <Container>
                <Center Left={left} Right={right} LeftEmotion={ leftEmotion} RightEmotion={rightEmotion} />
                <LeftArtist artist={left} />
                <RightArtist artist={right} />
            </Container>
        </Layout>
    )
}

const Container = styled.div`
    width: 100%;
    height: 90vh;
    position: relative;
`