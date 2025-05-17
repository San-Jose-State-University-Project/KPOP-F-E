import Layout from "@/layout";
import SelectArtist from "@/components/select-artist";
import styled from "styled-components";
import SearchComparisonArtist from "@/components/search-comparison-artist";

export default function SearchComparison() {
    return (
        <Layout>
            <Container>
                <SelectArtist />
                <SearchComparisonArtist />
            </Container>
        </Layout>
    )
}

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`