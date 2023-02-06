import {
    AddMenuWrapper,
    ImgMask2, ImgMask4, ImgMask6,
    MenuContainer, MenuHeader,
    MenuImgWrapper,
    MenuSection,
    MenuSectionReversed,
    MenuSideImg, MenuSideImg2, MenuSideImg3, MenuSideImg4, MenuSideImg5, MenuSideImg6, MenuToggle,
    MenuWrapper
} from "./MenuPageStyles";
import MenuCard from "./MenuCard";
import React, {useEffect, useRef, useState} from "react";
import {activateMenuAnimation} from "../../utility/parallax";
import { useInView } from 'react-intersection-observer';
import BarCard from "./BarCard";
import {BarSection} from "./BarCard/BarCardStyles";
import {Button, ButtonSmoothScroll} from "../ButtonElement";



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
            <MenuToggle>
                <ButtonSmoothScroll
                    to='mainMenu'
                    smooth={true}
                    duration={800}
                    spy={true}
                    exact='true'
                    offset={-80}
                >
                    <Button color={'#a1907b'} sectionIsActive={true}>
                        Основное меню
                    </Button>
                </ButtonSmoothScroll>
                <ButtonSmoothScroll
                    to='drinkMenu'
                    smooth={true}
                    duration={800}
                    spy={true}
                    exact='true'
                    offset={-80}

                >
                    <Button color={'#a1907b'} sectionIsActive={false} middleBtn>
                        Напитки
                    </Button>
                </ButtonSmoothScroll>
                <ButtonSmoothScroll
                    to='addMenu'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                >
                    <Button color={'#a1907b'} sectionIsActive={false}>
                        Дополнительное меню
                    </Button>
                </ButtonSmoothScroll>
            </MenuToggle>
            <MenuHeader id='mainMenu' padding='20px 0 0 0'>
                Основное меню
            </MenuHeader>
            <MenuWrapper>
                {sections.map((section, index) =>
                    index === 1 ?
                        <MenuSectionReversed key={index} id={'section'+index}>
                            <MenuImgWrapper>
                                <MenuSideImg id='soup' src='images/menu-soup.png' alt='salad'/>
                                <ImgMask4 id='flour2wrap'>
                                    <MenuSideImg4 id='flour2' src='images/flour2.png' alt='salad'/>
                                </ImgMask4>
                                <MenuSideImg5 id='branch' src='images/branch.png' alt='salad'/>
                                <ImgMask6  id='flour4wrap' inView={inView}>
                                    <MenuSideImg6 ref={ref} id='flour4' src='images/flour3.png' alt='salad'/>
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
                                <MenuSideImg
                                    src={index === 2 ? 'images/menu-potato.png' : 'images/menu-salad.png'}
                                    id={index === 2 ? 'potatos' : 'salad'}
                                    ref={index === 2 ? ref : imgRef}
                                    alt='dish'/>
                                <ImgMask2 id={index === 2 ? 'flour3wrap' : 'flourwrap'} position={index === 2 ? [13,-114] : [-136,-66]}>
                                    <MenuSideImg2
                                        id={index === 2 ? 'flour3' : 'flour'}
                                        src='images/flour2.png' alt='salad'/>
                                </ImgMask2>
                                <MenuSideImg3
                                    src={index === 2 ? 'images/pepper-resized.png' : 'images/tomatos-resized.png'}
                                    id={index === 2 ? 'pepper' : 'tomatos'}
                                    alt='salad'/>
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
            <MenuToggle id='drinkMenu' padding={50}>
                <ButtonSmoothScroll
                    to='menu'
                    smooth={true}
                    duration={800}
                    spy={true}
                    exact='true'
                    offset={-80}
                >
                    <Button color={'#a1907b'}
                            sectionIsActive={false}
                            isBottom>
                        Основное меню
                    </Button>
                </ButtonSmoothScroll>
                <ButtonSmoothScroll
                    to='drinkMenu'
                    smooth={true}
                    duration={800}
                    spy={true}
                    exact='true'
                    offset={-80}
                >
                    <Button middleBtn
                            sectionIsActive={true}
                            color={'#a1907b'}>
                        Напитки
                    </Button>
                </ButtonSmoothScroll>
                <ButtonSmoothScroll
                    to='addMenu'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                >
                    <Button color={'#a1907b'}
                            sectionIsActive={false}
                            isBottom>
                        Дополнительное меню
                    </Button>
                </ButtonSmoothScroll>
            </MenuToggle>
            <MenuHeader  padding='20px 0 20px 0' >
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
            <MenuToggle padding={50}>
                <ButtonSmoothScroll
                    to='menu'
                    smooth={true}
                    duration={800}
                    spy={true}
                    exact='true'
                    offset={-80}
                >
                    <Button color={'#a1907b'}
                            sectionIsActive={false}
                            middleBtn
                    >
                        Основное меню
                    </Button>
                </ButtonSmoothScroll>
                <ButtonSmoothScroll
                    to='drinkMenu'
                    smooth={true}
                    duration={800}
                    spy={true}
                    exact='true'
                    offset={-80}
                >
                    <Button sectionIsActive={false}
                            color={'#a1907b'}>
                        Напитки
                    </Button>
                </ButtonSmoothScroll>
                <ButtonSmoothScroll
                    to='addMenu'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                >
                    <Button color={'#a1907b'}
                            sectionIsActive={true}
                            rightBtn>
                        Дополнительное меню
                    </Button>
                </ButtonSmoothScroll>
            </MenuToggle>
            <AddMenuWrapper id='addMenu'>
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
            </AddMenuWrapper>
        </MenuContainer>
    );
};

export default MenuPage;