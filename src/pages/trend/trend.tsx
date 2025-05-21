import Layout from "@/layout";
import styled from "styled-components";
import {useGetTrend} from "@/hooks/trend.ts";
import GraphTrend from "@/components/graph-trend";


export default function Trend() {
    const {data} = useGetTrend();
    console.log(data)
    return (
        <Layout>
            <Container>
                <h2>Genre Distribution</h2>
                <GraphTrend />
            </Container>
        </Layout>
    )
}

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`