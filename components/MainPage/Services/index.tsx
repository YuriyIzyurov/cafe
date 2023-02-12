import React, {useEffect, useState} from 'react';
import {
    BlackPhone, BlackPhoneActive, ServicesBlockImgWrapper,
    ServicesBlockWrapper1, ServicesBlockWrapper2,
    ServicesBlockWrapper3, ServicesContainer, ServicesImgWrapper, ServicesP, ServicesWrapper
} from "./ServicesStyles";
import {
    ArrowRight, ArrowRightSmall,
    HistoryBlock,
    HistoryContent,
    HistoryH1,
    HistoryH2,
    HistoryImgWrapper,
    HistoryLink,
    HistoryP
} from "../HistorySection/HistorySectionStyles";
import banket from '../../../public/images/banket2.jpg'
import candles from '../../../public/images/candles2.jpg'
import waiter from '../../../public/images/waiter2.jpg'
import flour from '../../../public/images/flour.png'
import {Element} from 'react-scroll'
import Image from 'next/image'
import {registerHistoryComponentAnim, registerServicesComponentAnim} from "../../../utility/parallax";
import {isMobileDevice} from "../../../utility/deviceChecker";

const Services = ({id}) => {
    const [hover, setHover] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)

    useEffect(() => {
        if(!isMobileDevice()) registerServicesComponentAnim()
    }, [])


    const onHover = () => {
        setHover(!hover)
    }
    const onHover2 = () => {
        setHover2(!hover2)
    }
    const onHover3 = () => {
        setHover3(!hover3)
    }

    return (
        <ServicesContainer id={id}>
            <ServicesWrapper>
               <ServicesImgWrapper id='flour'>
                   <Image src={flour}  alt='flour'/>
               </ServicesImgWrapper>

               <ServicesBlockWrapper1>
                <HistoryBlock mini>
                    <ServicesBlockImgWrapper>
                        <Image src={banket}  fill style={{objectFit:"cover"}} alt='banket'/>
                    </ServicesBlockImgWrapper>
                    <HistoryContent padding={[30, 50]} mini>
                        <HistoryH1 fontSize='28px'>Банкеты на день рождения</HistoryH1>
                        <ServicesP>
                            В нашем кафе вы можете заказать банкет
                            по любому важному для вас поводу.
                            Мы так же организуем Свадебные обеды и поминальные трапезы.
                        </ServicesP>
                        <HistoryLink href='tel:28‑55-07'
                                     onMouseEnter={onHover}
                                     onMouseLeave={onHover}>
                            <span>Позвонить</span>{hover ? <BlackPhoneActive/> : <BlackPhone/>}
                        </HistoryLink>
                    </HistoryContent>
                </HistoryBlock>
               </ServicesBlockWrapper1>

               <ServicesBlockWrapper2>
                 <HistoryBlock reverse mini>
                     <HistoryContent padding={[30, 50]} mini>
                           <HistoryH1 fontSize='28px'>Проведение корпоративов</HistoryH1>
                           <ServicesP>
                               Для проведения корпоративов мы предлагаем наши банкетные залы,
                               которые вмещают до 45 человек и до 25 человек и позволяют провести мероприятия
                               любого формата и сложности.
                           </ServicesP>
                           <HistoryLink href='/rooms'
                                        onMouseEnter={onHover2}
                                        onMouseLeave={onHover2}>
                               <span>Фото залов</span>{hover2 ? <ArrowRight/> : <ArrowRightSmall/>}
                           </HistoryLink>
                       </HistoryContent>
                     <ServicesBlockImgWrapper>
                         <Image src={candles}  fill style={{objectFit:"cover"}} alt='candles'/>
                     </ServicesBlockImgWrapper>
                   </HistoryBlock>
               </ServicesBlockWrapper2>

               <ServicesBlockWrapper3>
                 <HistoryBlock mini>

                       <ServicesBlockImgWrapper>
                           <Image src={waiter}  fill style={{objectFit:"cover"}} alt='waiter'/>
                       </ServicesBlockImgWrapper>
                       <HistoryContent padding={[30, 50]} mini>
                           <HistoryH1 fontSize='28px'>Приготовление заказных блюд</HistoryH1>
                           <ServicesP>
                               Банкетное меню составляется персонально под каждого гостя и насчитывает
                               множество вариантов, в состав которых входят в том числе и некоторые
                               блюда, не включенные в основное меню.
                           </ServicesP>
                           <HistoryLink href='/menu'
                                        onMouseEnter={onHover3}
                                        onMouseLeave={onHover3}>
                               <span style={{alignSelf: 'stretch', lineHeight: '20px'}}>Меню</span>
                               {hover3 ? <ArrowRight/> : <ArrowRightSmall/>}
                           </HistoryLink>
                       </HistoryContent>
                   </HistoryBlock>
               </ServicesBlockWrapper3>

            </ServicesWrapper>
            <div style={{height: '110px'}}></div> {/*Для центрирования блока*/}
        </ServicesContainer>
    );
};

export default Services;