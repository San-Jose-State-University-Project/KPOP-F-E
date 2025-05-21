import Layout from "../../layout";
import styled from "styled-components";
import Bg from "../../components/bg";
import ArtistInfo from "../../components/artist-info";
import {useParams} from "react-router-dom";
import {useGetArtistInfo} from "@/hooks/artist.ts";


export default function Artist() {
    const { name } = useParams<{ name: string }>();
    const {data : artist} = useGetArtistInfo(name ?? '');
    // const {data : emotion} = useGetArtistEmotion(name ?? '');

    return (
        <Layout>
            <Container>
                <Bg img = {artist.image_url}  />
               <ArtistInfo artist={artist} />
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