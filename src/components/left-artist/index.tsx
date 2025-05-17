import * as S from "./style.ts"
import Image1 from "@/assets/image2.png"

export default function LeftArtist() {
    return (
        <S.Container>
            <S.Box>
                <S.ImgBox>
                    <img src={Image1} alt={"artist"} />
                </S.ImgBox>
                <S.ContentBox>
                    <h1></h1>
                    <S.ComBox>

                    </S.ComBox>
                    <h1></h1>
                </S.ContentBox>
            </S.Box>
        </S.Container>
    )
}