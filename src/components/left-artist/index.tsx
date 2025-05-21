import * as S from "./style.ts"
import type {Artist} from "@/types/artist.ts";

export default function LeftArtist({artist} : {artist : Artist}) {
    return (
        <S.Container>
            <S.Box>
                <S.ImgBox>
                    <img src={artist?.image_url} alt={"artist"} />
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