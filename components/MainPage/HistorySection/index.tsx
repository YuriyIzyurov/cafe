import {
    ArrowRight,
    ArrowRightSmall,
    HistoryBlock,
    HistoryContainer,
    HistoryContent,
    HistoryH1,
    HistoryH2,
    HistoryImgWrap, HistoryImgWrap2,
    HistoryImgWrap3, HistoryImgWrapper,
    HistoryLink,
    HistoryP,
    HistoryWrapper
} from "./HistorySectionStyles";
import history from '../../../public/images/history2.jpg'
import {useEffect, useLayoutEffect, useState} from "react";
import Image from 'next/image'
import {animation} from "../../../utility/parallax";
import {isMobileDevice, useWindowHeight} from "../../../utility/deviceChecker";
import {gsap} from "gsap";
import { OffsetBottom } from "../InfoSection/InfoSectionStyles";
import AnimatedLink from "../../AnimatedLink";




const HistorySection = ({timeline,sectionRef}) => {




    useLayoutEffect(() => {
        let ctx
        if(window.innerWidth > 768 && timeline) ctx = gsap.context(() => {
            const componentTimeline = animation('history')
            //добавляем анимацию компонента в мастер анимацию страницы
            timeline && timeline.add(componentTimeline)
        })
        return () => ctx && ctx.revert()
    }, [timeline])




    return (
        <HistoryContainer ref={sectionRef} id='history' name='history'>
            <HistoryWrapper>
                <HistoryBlock>
                    <HistoryImgWrap id='smoke'>
                        <Image src='/images/smoke.png' width={367} height={341} alt='smoke'/>
                    </HistoryImgWrap>
                    <HistoryImgWrap2 id='tea'>
                        <Image src='/images/tea-leaves.png' width={200} height={162} alt='leaves'/>
                    </HistoryImgWrap2>
                    <HistoryImgWrapper>
                        <Image src={history}  alt='history' fill style={{objectFit:"cover"}}/>
                    </HistoryImgWrapper>
                    <HistoryContent>
                        <HistoryH2>Погрузись</HistoryH2>
                        <HistoryH1>В нашу историю</HistoryH1>
                        <HistoryP>
                            Добро пожаловать в наше кафе на
                            набережной города Иваново.
                            Мы рады предложить вам настоящее кулинарное путешествие
                            и неповторимую атмосферу в историческом месте.
                        </HistoryP>
                        <AnimatedLink
                            route={'/reviews'}
                            text='Больше о нас'
                            icons={[<ArrowRight/>,<ArrowRightSmall/>]}
                        />
                    </HistoryContent>
                    <HistoryImgWrap3 id='branch'>
                        <Image src='/images/branch.png' width={173} height={350} alt='branch'/>
                    </HistoryImgWrap3>
                </HistoryBlock>
            </HistoryWrapper>
        </HistoryContainer>
    );
};

export default HistorySection