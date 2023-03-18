import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {
    BlackPhone, BlackPhoneActive, ServiceFooter, ServicesBlockImgWrapper,
    ServicesBlockWrapper,
     ServicesContainer, ServicesContent,
    ServicesContentWrapper, ServicesImgWrapper, ServicesP, ServicesWrapper, SpreadTextIconDown, SpreadTextIconUp
} from "./ServicesStyles";
import {
    ArrowRight, ArrowRightSmall,
    HistoryBlock,
    HistoryContent,
    HistoryH1,
    HistoryLink,
} from "../HistorySection/HistorySectionStyles";
import banket from '../../../public/images/banket2.jpg'
import candles from '../../../public/images/candles2.jpg'
import waiter from '../../../public/images/waiter2.jpg'
import flour from '../../../public/images/flour.png'
import Image from 'next/image'
import { animation } from "../../../utility/parallax";
import {gsap} from "gsap";
import { useOutside } from '../../../hooks/useOutside';
import AnimatedLink from "../../../components/AnimatedLink";




const Services = ({timeline, sectionRef}) => {
    const [hover0, setHover] = useState(false)
    const [hover1, setHover2] = useState(false)
    const [hover2, setHover3] = useState(false)

    const [isExpanded0, setIsExpanded0] = useState(false)
    const [isExpanded1, setIsExpanded1] = useState(false)
    const [isExpanded2, setIsExpanded2] = useState(false)

    const ref0 = useRef(null)
    const ref1 = useRef(null)
    const ref2 = useRef(null)

    useEffect(() => {

        function handleClickOutside(event) {
            if(isExpanded0) {
                if(!ref0.current.contains(event.target)) {
                    //todo: проверить работу на тачпаде
                    setIsExpanded0(!isExpanded0)
                }
            }
            if(isExpanded1) {
                if(!ref1.current.contains(event.target)) {
                    setIsExpanded1(!isExpanded1)
                }
            }
            if(isExpanded2) {
                if(!ref2.current.contains(event.target)) {
                    setIsExpanded2(!isExpanded2)
                }
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isExpanded0,isExpanded1,isExpanded2]);


    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const componentTimeline = animation('services')

            //добавляем анимацию компонента в мастер анимацию страницы
            timeline && timeline.add(componentTimeline)
        })

        return () => ctx.revert()
    }, [timeline])


    const onHover = (index) => {
        switch(index) {
            case 0: setHover(!hover0)
                break
            case 1: setHover2(!hover1)
                break
            case 2: setHover3(!hover2)
                break
        }
    }
    const handleText = (index) => {
        switch(index) {
            case 0: setIsExpanded0(!isExpanded0)
                break
            case 1: setIsExpanded1(!isExpanded1)
                break
            case 2: setIsExpanded2(!isExpanded2)
                break
        }
    }


    const serviceContent = [{
        title: 'Банкеты на день рождения',
        text: 'В нашем кафе вы можете заказать банкет по любому важному для вас поводу.' +
            'Мы так же организуем Свадебные обеды и поминальные трапезы.' ,
        img: banket,
        link: 'tel:28‑55-07',
        buttonText: 'Позвонить',
    },{
        title: 'Проведение корпоративов',
        text: 'Для проведения корпоративов мы предлагаем банкетные залы,' +
            'которые вмещают до 40 и 25 человек и позволяют провести мероприятия любого формата' ,
        img: candles,
        link: '/rooms',
        buttonText: 'Фото залов',
    },{
        title: 'Приготовление заказных блюд',
        text: 'Банкетное меню составляется персонально под каждого гостя и включает' +
            ' также и блюда, не входящие в основное меню.' ,
        img: waiter,
        link: '/menu',
        buttonText: 'Меню',
    }]

    const showIconOnHover = (index):JSX.Element[] => {
        switch (index) {
            case 0: return [<BlackPhoneActive/>,<BlackPhone/>]
            case 1: return [<ArrowRight/>,<ArrowRightSmall/>]
            case 2: return [<ArrowRight/>,<ArrowRightSmall/>]
        }
    }

    return (
        <ServicesContainer ref={sectionRef} id='services'>
            <ServicesWrapper>
               <ServicesImgWrapper id='flour'>
                   <Image src={flour}  alt='flour'/>
               </ServicesImgWrapper>

                {serviceContent.map((e, index) => {
                    const isExpandedValue = index===0 ? isExpanded0 : index===1 ? isExpanded1 : isExpanded2
                    const ref = index===0 ? ref0 : index===1 ? ref1 : ref2

                    return (
                        <ServicesBlockWrapper
                            key={index}
                            ref={ref}
                            align={index === 1 ? 'flex-end' : 'flex-start'}
                            zIndex={index+1}>
                            <HistoryBlock mini reverse={index === 1}>
                                <ServicesBlockImgWrapper order={index===1 ? 2 : 1}>
                                    <Image src={e.img}  fill style={{objectFit:"cover"}} alt='services'/>
                                </ServicesBlockImgWrapper>
                                <ServicesContentWrapper order={index===1 ? 1 : 2}>
                                    <ServicesContent reverse={index === 1}
                                                     isExpanded={isExpandedValue}>
                                        <HistoryH1 fontSize='25px'>{e.title}</HistoryH1>
                                        <ServicesP isExpanded={isExpandedValue}>
                                            {e.text}
                                        </ServicesP>
                                        <ServiceFooter isExpanded={isExpandedValue}>
                                            <AnimatedLink
                                                key={index}
                                                route={e.link}
                                                text={e.buttonText}
                                                icons={showIconOnHover(index)}
                                            />
                                            {isExpandedValue
                                                ? <SpreadTextIconUp onClick={() => handleText(index)}/>
                                                : <SpreadTextIconDown onClick={() => handleText(index)}/>}
                                        </ServiceFooter>
                                    </ServicesContent>
                                </ServicesContentWrapper>
                            </HistoryBlock>
                        </ServicesBlockWrapper>
                    )}
                )}
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;