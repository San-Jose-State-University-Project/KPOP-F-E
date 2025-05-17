import Layout from "@/layout";
import styled from "styled-components";
import Center from "@/components/comparison-center"
import LeftArtist from "@/components/left-artist";
import RightArtist from "@/components/right-artist";

export default function Comparison() {
    return (
        <Layout>
            <Container>
                <Center />
                <LeftArtist />
                <RightArtist />
            </Container>
        </Layout>
    )
}

const Container = styled.div`
    width: 100%;
    height: 90vh;
    position: relative;
`