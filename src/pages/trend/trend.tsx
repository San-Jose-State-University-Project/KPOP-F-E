import Layout from "@/layout";
import styled from "styled-components";
import {useGetTrend} from "@/hooks/trend.ts";
import GraphTrend from "@/components/graph-trend";
import {useEffect, useState} from "react";


export default function Trend() {
    const {data, isLoading} = useGetTrend();
    const [percentage , setPercentage] = useState([]);

    const maxData = () =>{
        if (!data) return;
        const values = Object.values(data) as number[];
        if(values.length === 0) return
        const max = Math.max(...values);

        const percentages = Object.fromEntries(
            Object.entries(data).map(([key, value]) => [key, {per : parseInt((value / max * 100).toFixed(0)), value : value}])
        );

        setPercentage(percentages);
    }
    useEffect(() => {
        if (data) maxData()
    }, [data]);

    return (
        <Layout>
            <Container>
                <h2>Genre Distribution</h2>
                <GraphTrend isLoading = {isLoading} percentages ={percentage} />
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