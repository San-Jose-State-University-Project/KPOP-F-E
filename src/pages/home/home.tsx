import Layout from "../../layout";
import Slide from "../../components/slide";
import MusicIcons from "../../components/music-icons";
import HomeMain from "../../components/HomeMain";


export default function Home(){
    return (
        <Layout>
            <HomeMain />
            <MusicIcons />
            <Slide />
        </Layout>
    )
}