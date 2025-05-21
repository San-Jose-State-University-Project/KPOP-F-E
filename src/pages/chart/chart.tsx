import Layout from "../../layout";
import styled from "styled-components";
import TopRanking from "@/components/TopRanking";
import LowRanking from "@/components/LowRanking";
import LeftArrow from "@/assets/left-arrow.svg";
import RightArrow from "@/assets/right-arrow.svg";
import * as S from "@/components/ranking/style.ts";
import {useGetKPOPChart} from "@/hooks/trend.ts";


export default function Chart() {
    const date = new Date().toISOString().slice(0, 10);
    const {data} = useGetKPOPChart("2025-05-15");
    return (
        <Layout>
            <Container>
                <h2>Week 2 of May 2025</h2>
                <ChartBox>
                    <Button>
                        <img src={LeftArrow} alt={"arrow"} />
                    </Button>
                    <RankingBox>
                        <TopRanking newData = {data?.slice(0, 3)} />
                        <LowRanking newData = {data?.slice(3, data.top_50_tracks.length)} />
                    </RankingBox>
                    <S.Button>
                        <img src={RightArrow} alt={"arrow"} />
                    </S.Button>
                </ChartBox>
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
    overflow: hidden;
`
const ChartBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3% 120px;
`
const Button = styled.button`
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background-color: #1D1D37;
    border-radius: 100px;
    border: none;
    color: white;
    font-size: 14px;
    transition: 0.2s;
    &:hover{
        opacity: 0.7;
    }
`
const RankingBox = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 40px;
    gap: 10px;
    overflow: auto;
`