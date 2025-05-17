import * as S from "./style.ts"
import Image1 from "@/assets/image2.png"

export default function RightArtist() {
    return (
        <S.Container>
            <S.Box>
                <S.ImgBox>
                    <img src={Image1} alt={"artist"} />
                </S.ImgBox>
                <S.ContentBox>
                </S.ContentBox>
            </S.Box>
        </S.Container>
    )
}