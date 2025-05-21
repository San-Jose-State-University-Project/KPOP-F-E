import Layout from "../../layout";
import styled from "styled-components";
import Ranking from "../../components/ranking";

export default function Trend() {
    return (
        <Layout>
            <Container>
                <h2>Week 2 of May 2025</h2>
                <Ranking />
            </Container>
        </Layout>
    )
}
const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`