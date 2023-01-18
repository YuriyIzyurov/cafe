import React from 'react';
import {ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper} from "./ServicesStyles";

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Наши услуги</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src='images/svg-1.svg'/>
                    <ServicesH2>Хороший опыт</ServicesH2>
                    <ServicesP>
                        Вы супер проведедете время и не пожалете
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src='images/svg-2.svg'/>
                    <ServicesH2>Свадьбы</ServicesH2>
                    <ServicesP>
                        Отметь лучший день в вашей жизни
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src='images/svg-3.svg'/>
                    <ServicesH2>Корпоративы</ServicesH2>
                    <ServicesP>
                        Затуси с коллегами, которых ты ненавидишьпш!
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;