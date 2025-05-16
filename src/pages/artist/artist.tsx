import Layout from "../../layout";
import styled from "styled-components";
import Bg from "../../components/Bg";
import ArtistInfo from "../../components/artist-info";


export default function Artist() {
    return (
        <Layout>
            <Container>
                <Bg />
               <ArtistInfo />
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