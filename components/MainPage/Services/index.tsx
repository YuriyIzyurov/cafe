import React, {useState} from 'react';
import {
    BlackPhone, BlackPhoneActive,
    ServicesBlockWrapper1, ServicesBlockWrapper2,
    ServicesBlockWrapper3, ServicesContainer, ServicesImgWrapper, ServicesWrapper
} from "./ServicesStyles";
import {
    ArrowRight, ArrowRightSmall,
    HistoryBlock,
    HistoryContent,
    HistoryH1,
    HistoryH2,
    HistoryLink,
    HistoryP
} from "../HistorySection/HistorySectionStyles";
import {Element} from 'react-scroll'

const Services = ({id}) => {
    const [hover, setHover] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)

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
                   <img src='images/flour.png' alt='flour'/>
               </ServicesImgWrapper>
               <ServicesBlockWrapper1>
                <HistoryBlock mini>
                    <img src='images/banket2.png'/>
                    <HistoryContent padding='50px'>
                        <HistoryH1 fontSize='28px'>Банкеты на день рождения</HistoryH1>
                        <HistoryP>
                            В нашем кафе вы можете заказать банкет
                            по любому важному для вас поводу.
                            Мы так же организуем Свадебные обеды и поминальные трапезы.
                        </HistoryP>
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
                     <HistoryContent padding='50px'>
                           <HistoryH1 fontSize='28px'>Проведение корпоративов</HistoryH1>
                           <HistoryP>
                               Для проведения корпоративов мы предлагаем наши банкетные залы,
                               которые вмещают до 45 человек и до 25 человек и позволяют провести мероприятия
                               любого формата и сложности.
                           </HistoryP>
                           <HistoryLink href='/rooms'
                                        onMouseEnter={onHover2}
                                        onMouseLeave={onHover2}>
                               <span>Фото залов</span>{hover2 ? <ArrowRight/> : <ArrowRightSmall/>}
                           </HistoryLink>
                       </HistoryContent>
                     <img src='images/candles2.png'/>
                   </HistoryBlock>
               </ServicesBlockWrapper2>
               <ServicesBlockWrapper3>
                 <HistoryBlock mini>
                       <img src='images/waiter2.png'/>
                       <HistoryContent padding='50px'>
                           <HistoryH1 fontSize='28px'>Приготовление заказных блюд</HistoryH1>
                           <HistoryP>
                               Банкетное меню составляется персонально под каждого гостя и насчитывает
                               множество вариантов, в состав которых входят в том числе и некоторые
                               блюда, не включенные в основное меню.
                           </HistoryP>
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