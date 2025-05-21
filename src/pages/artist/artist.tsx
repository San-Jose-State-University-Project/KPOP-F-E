import Layout from "../../layout";
import styled from "styled-components";
import Bg from "../../components/bg";
import ArtistInfo from "../../components/artist-info";
import {useParams} from "react-router-dom";
import {useGetArtistEmotion, useGetArtistInfo} from "@/hooks/artist.ts";


export default function Artist() {
    const { name } = useParams<{ name: string }>();
    const {data : artist} = useGetArtistInfo(name ?? '');
    // const {data : emotion} = useGetArtistEmotion(name ?? '');
    const emotion = {
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
            <Container>
                <Bg img = {artist?.image_url}  />
               <ArtistInfo emotion = {emotion} artist={artist} />
            </Container>
        </Layout>
    )
}

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`