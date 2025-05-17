import * as S from "./style.ts"
import Music1 from '@/assets/music1.svg'
import Music2 from '@/assets/music2.svg'
import Music3 from '@/assets/music3.svg'
import Music4 from '@/assets/music4.svg'
import Music5 from '@/assets/music5.svg'
import Music6 from '@/assets/music6.svg'

export default function MusicIcons() {
    const leftMusic = [
        {id : 1,src : Music1, width : 30, top : 0, left : 5, duration : 3},
        {id : 2,src : Music2, width : 50, top : 22, left : 12, duration : 5},
        {id : 3, src : Music3, width : 55, top : 34, left : 0, duration : 4},
        {id : 4, src : Music4, width : 90, top : 45, left : 8, duration : 6},
    ]
    const rightMusic = [
        {id : 5,src : Music5, width : 83, top : 0, right : 4, duration : 6},
        {id : 6,src : Music6, width : 70, top : 42, right : 10, duration : 3},
    ]
    return (
        <S.MusicIcons>
            <S.Section>
                <S.IconBox>
                    {leftMusic.map(item=>{
                        return(
                            <S.Icon
                                key={item.id}
                                src={item.src}
                                width={item.width}
                                top={item.top}
                                left={item.left}
                                duration={item.duration}
                            />
                        )
                    })}
                </S.IconBox>
            </S.Section>
            <S.Section2>
                {rightMusic.map(item=>{
                    return(
                        <S.Icon
                            key={item.id}
                            src={item.src}
                            width={item.width}
                            top={item.top}
                            right={item.right}
                            duration={item.duration}
                        />
                    )
                })}
            </S.Section2>
        </S.MusicIcons>
    )
}