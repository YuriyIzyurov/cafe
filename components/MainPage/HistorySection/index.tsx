import {
    ArrowRight,
    ArrowRightSmall,
    HistoryBlock,
    HistoryContainer,
    HistoryContent,
    HistoryH1,
    HistoryH2,
    HistoryImgWrap, HistoryImgWrap2,
    HistoryImgWrap3,
    HistoryLink,
    HistoryP,
    HistoryWrapper
} from "./HistorySectionStyles";
import {useEffect, useState} from "react";
import Image from 'next/image'
import {registerHistoryComponentAnim} from "../../../utility/parallax";




const HistorySection = () => {
    const [hover, setHover] = useState(false)

    useEffect(() => {
        registerHistoryComponentAnim()
    }, [])

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HistoryContainer id='history' name='history'>
            <HistoryWrapper>
                <HistoryBlock>
                    <HistoryImgWrap id='smoke'>
                        <Image src='/images/smoke.png' width={367} height={341} alt='smoke'/>
                    </HistoryImgWrap>
                    <HistoryImgWrap2 id='tea'>
                        <Image src='/images/tea-leaves.png' width={200} height={162} alt='leaves'/>
                    </HistoryImgWrap2>
                    <Image src='/images/history2.jpg' width={522} height={411} alt='history'/>
                    <HistoryContent padding='100px'>
                        <HistoryH2>Погрузись</HistoryH2>
                        <HistoryH1>В нашу историю</HistoryH1>
                        <HistoryP>
                            С другой стороны постоянный количественный
                            рост и сфера нашей активности обеспечивает
                            широкому кругу (специалистов) участие в формировании
                            направлений прогрессивного развития.
                        </HistoryP>
                        <HistoryLink href='/history'
                                     onMouseEnter={onHover}
                                     onMouseLeave={onHover}>
                            <span>Больше о нас</span>{hover ? <ArrowRight/> : <ArrowRightSmall/>}
                        </HistoryLink>
                    </HistoryContent>
                    <HistoryImgWrap3 id='branch'>
                        <Image src='/images/branch.png' width={173} height={350} alt='branch'/>
                    </HistoryImgWrap3>
                </HistoryBlock>
                <div style={{height: '110px'}}></div> {/*Для центрирования блока*/}
            </HistoryWrapper>
        </HistoryContainer>
    );
};

export default HistorySection