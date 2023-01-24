import React from 'react';
import { ServicesBlockWrapper1, ServicesBlockWrapper2,
    ServicesBlockWrapper3, ServicesContainer, ServicesWrapper} from "./ServicesStyles";
import {
    HistoryBlock,
    HistoryContent,
    HistoryH1,
    HistoryH2,
    HistoryLink,
    HistoryP
} from "../HistorySection/HistorySectionStyles";

const Services = ({id}) => {
    return (
        <ServicesContainer id={id}>
            <ServicesWrapper>
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
                        <HistoryLink href='/history'>
                            <span>Свяжитесь с нами!</span><span>-----</span>
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
                           <HistoryLink href='/history'>
                               <span>Посмотреть фото залов</span><span>-----</span>
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
                           <HistoryLink href='/history'>
                               <span>Посмотреть доп.? меню</span><span>-----</span>
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