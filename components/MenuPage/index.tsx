import {
    ImgMask2,
    ImgMask4,
    ImgMask6,
    MenuBranchWrapper,
    MenuContainer,
    MenuHeader,
    MenuImgWrapper,
    MenuSection,
    MenuSectionReversed,
    MenuSideImg2,
    MenuSideImg3,
    MenuSideImg4,
    MenuSideImg5,
    MenuSideImg6,
    MenuSideImgWrapper,
    MenuSideImgWrapper2,
    MenuToggle,
    MenuWrapper
} from "./MenuPageStyles";
import MenuCard from "./MenuCard";
import React, {useEffect, useRef, useState} from "react";
import {activateMenuAnimation} from "../../utility/parallax";
import { useInView } from 'react-intersection-observer';
import BarCard from "./BarCard";
import {BarSection} from "./BarCard/BarCardStyles";
import {Button, ButtonSmoothScroll} from "../ButtonElement";
import MenuNavigation from "./MenuNavigation";
import Image from 'next/image'


type ToggleStateType = {
    main: boolean
    drinks: boolean
    additional: boolean
}
const MenuPage = ({dishes, drinks}) => {


    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: .14,
    })
    const imgRef = useRef(null)
    const [sectionIsActive, changeSectionActivity] = useState<ToggleStateType>({main: true, drinks: false, additional: false})


    const section1 = dishes.slice(0,4)
    const section2 = dishes.slice(4,8)
    const section3 = dishes.slice(8,13)
    const sections = [section1,section2,section3]

    const sortedDrinks = [
        drinks[0], drinks[4], drinks[5],
        drinks[1], drinks[2], drinks[3],
        drinks[9], drinks[10],
        drinks[8], drinks[7], drinks[6],
        drinks[11]
    ]

    useEffect(() => {
        activateMenuAnimation()
    }, [])



    return (
        <MenuContainer id='menu'>
            {/*-----Основное меню----*/}
            <MenuNavigation id='mainMenu' position='top'/>
            <MenuHeader padding='20px 0 0 0'>
                Основное меню
            </MenuHeader>
            <MenuWrapper>
                {sections.map((section, index) =>
                    index === 1 ?
                        <MenuSectionReversed key={index} id={'section'+index}>
                            <MenuImgWrapper>
                                <MenuSideImgWrapper id='soup'>
                                    <Image src='/images/menu-soup.png' width={432} height={425} alt='salad'/>
                                </MenuSideImgWrapper>
                                <ImgMask4 id='flour2wrap'>
                                    <Image id='flour2' src='/images/flour2.png' width={406} height={549} alt='flour2'/>
                                </ImgMask4>
                                <MenuBranchWrapper id='branch'>
                                    <Image src='/images/branch.png' width={173} height={350} alt='branch'/>
                                </MenuBranchWrapper>
                                <ImgMask6  id='flour4wrap' inView={inView}>
                                    <Image ref={ref} id='flour4' src='/images/flour3.png' width={500} height={487} alt='flour4'/>
                                </ImgMask6>
                            </MenuImgWrapper>
                            {section.map((specification, index2) =>
                                    <MenuCard
                                        key={specification.id}
                                        name={specification.name}
                                        dishes={specification.dishes}
                                        index={index2}
                                        sectionIndex={'section'+index}
                                    />)}
                        </MenuSectionReversed>
                        :
                        <MenuSection key={index} id={'section'+index}>
                            <MenuImgWrapper>
                                <MenuSideImgWrapper id={index === 2 ? 'potatos' : 'salad'} ref={index === 2 ? ref : imgRef}>
                                    <Image src={index === 2 ? '/images/menu-potato.png' : '/images/menu-salad.png'}
                                           width={442}
                                           height={423}
                                           alt='menuImg'/>
                                </MenuSideImgWrapper>
                                <ImgMask2 id={index === 2 ? 'flour3wrap' : 'flourwrap'} position={index === 2 ? [13,-114] : [-136,-66]}>
                                    <Image id={index === 2 ? 'flour3' : 'flour'}
                                           src='/images/flour2.png'
                                           width={406}
                                           height={549}
                                           alt='flour'/>
                                </ImgMask2>
                                <MenuSideImgWrapper2>
                                    <Image id={index === 2 ? 'pepper' : 'tomatos'}
                                           src={index === 2 ? '/images/pepper-resized.png' : '/images/tomatos-resized.png'}
                                           width={140}
                                           height={140}
                                           alt='img'/>
                                </MenuSideImgWrapper2>
                            </MenuImgWrapper>
                            {section.map((specification, index2) =>
                                    <MenuCard
                                        key={specification.id}
                                        name={specification.name}
                                        dishes={specification.dishes}
                                        index={index2}
                                        sectionIndex={'section'+index}
                                        justifySelf={index === 3}
                                    />)}
                        </MenuSection>)}
            </MenuWrapper>

            {/*-----Напитки и бар----*/}
            <MenuNavigation id='drinkMenu' position='middle' padding={50}/>
            <MenuHeader padding='20px 0 20px 0' >
                Напитки
            </MenuHeader>
            <MenuWrapper>
                <BarSection>
                    {sortedDrinks.map((specification, index) =>
                            <BarCard
                                key={specification.id}
                                name={specification.name}
                                drinks={specification.drinks}
                                index={index}
                            />
                        )}
                </BarSection>
            </MenuWrapper>

            {/*-----Дополнительное меню под заказ----*/}
            <MenuNavigation id='addMenu' position='bottom' padding={50}/>
            <MenuWrapper>
                <MenuHeader padding='20px 5px'>Блюда на заказ</MenuHeader>
                <ul>
                    <li>Буженина</li>
                    <li>Рулет куриный с грибочками</li>
                    <li>Рулет из лаваша  со  слабосоленой сёмгой</li>
                    <li>Судак фаршированный</li>
                    <li>Стерлядь фаршированная</li>
                    <li>Поросёнок фаршированный</li>
                    <li>Студень мясной</li>
                    <li>Заливное из сёмги, говядины, языка</li>
                    <li>Грибочки фаршированные</li>
                    <li>Кролик в сметанном соусе</li>
                    <li>Говяжьи ребра в казане</li>
                    <li>Индейка в соусе</li>
                </ul>
            </MenuWrapper>
        </MenuContainer>
    );
};

export default MenuPage;