import Layout from "../../layout";
import Slide from "../../components/slide";
import MusicIcons from "../../components/music-icons";
import HomeMain from "../../components/HomeMain";
import Animation from "../../components/appeared";


export default function Home(){
    return (
        <Layout>
            <Animation />
            <HomeMain />
            <MusicIcons />
            <Slide />
        </Layout>
    )
}