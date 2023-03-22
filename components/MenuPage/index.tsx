import {
    AddMenuWrapper, FlexibleImgWrap,
    ImgMask2,
    ImgMask4,
    ImgMask6,
    MenuBranchWrapper,
    MenuContainer,
    MenuFooter,
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
    MenuWrapper,
    ShadowOnMobDevices
} from "./MenuPageStyles";
import MenuCard from "./MenuCard";
import React, {FC, RefObject, useEffect, useRef, useState} from "react";
import {activateMenuAnimation} from "../../utility/parallax";
import { useInView } from 'react-intersection-observer';
import BarCard from "./BarCard";
import {BarSection} from "./BarCard/BarCardStyles";
import {Button, ButtonSmoothScroll} from "../ButtonElement";
import MenuNavigation from "./MenuNavigation";
import Image from 'next/image'
import AdditionalMenu from "./AddMenu";
import soup from '../../public/images/menu-soup.png'
import flour2 from '../../public/images/flour2.png'
import branch from '../../public/images/branch.png'
import flour3 from '../../public/images/flour3.png'
import potato from '../../public/images/menu-potato.png'
import salad from '../../public/images/menu-salad.png'
import pepper from '../../public/images/pepper-resized.png'
import tomatos from '../../public/images/tomatos-resized.png'
import { DishSpecification,DrinksSpecification } from "../../utility/types";
import { MenuCardWrap } from "./MenuCard/MenuCardStyles";
import {gsap} from "gsap";
import favicon from "public/images/favicon.ico";
import { TextBlockHeader, TextBlockP } from "../ReviewsPage/ReviewsPageStyles";
import logo from "public/images/logoSpoon.png";




type ToggleStateType = {
    main: boolean
    drinks: boolean
    additional: boolean
}
type PropsType = {
    dishes: DishSpecification[]
    drinks: DrinksSpecification[]
    closeSidebar: () => void
}
type UseInViewReturnType = {
    ref: (node?: Element) => void;
    inView: boolean;
};

const MenuPage:FC<PropsType> = ({dishes, drinks, closeSidebar}) => {

    const { ref, inView }:UseInViewReturnType = useInView({
        /* Optional options */
        threshold: .14,
    })
    const imgRef = useRef(null)
    const [sectionIsActive, changeSectionActivity] = useState<ToggleStateType>({main: true, drinks: false, additional: false})


    const section1 = dishes.slice(0,4)
    const section2 = dishes.slice(4,7)
    const section3 = dishes.slice(7,12)
    const sections = [section1,section2,section3]

    const sortedDrinks = [
        drinks[0], drinks[4], drinks[5],
        drinks[1], drinks[2], drinks[3],
        drinks[9], drinks[10],
        drinks[8], drinks[7], drinks[6],
        drinks[11]
    ]

    //создание мастер анимации страницы и ее удалении при анмаунте
    useEffect(() => {

        const mm = gsap.matchMedia();
        mm.add(
            {
                isSmall: '(max-width: 768px)',
                isLarge: '(min-width: 769px)',
            },
            (c) => {
               activateMenuAnimation(c.conditions.isSmall)
            }
        );
        return () =>  mm.revert()
    }, []);


    return (
        <MenuContainer id='menu' onClick={closeSidebar}>
            {/*-----Основное меню----*/}
            <MenuNavigation id='mainMenu' position='top'/>
            <MenuHeader padding='20px 0 0 0'>
                Основное меню
            </MenuHeader>
            <MenuWrapper>
                {sections.map((section, index) =>
                    index === 1 ?
                        <MenuSectionReversed key={index} id={'section'+index}>
                            <AnimatedSectionCompositionSoup reference={ref} inView={inView}/>
                            {section.map((specification, index2) => {
                                const isComplexCard = specification.name.includes("Горячие закуски")
                                return !isComplexCard
                                    ? <MenuCard
                                        key={specification._id}
                                        name={specification.name}
                                        dishes={specification.dishes}
                                        index={index2}
                                        sectionIndex={'section' + index}
                                    />
                                    :
                                    <MenuCardWrap key={specification._id} justifyContent='flex-end' reducedCard={true}>
                                        <MenuCard
                                            name={specification.name}
                                            dishes={specification.dishes}
                                            index={index2}
                                            sectionIndex={'section' + index}
                                            isMobile
                                            rightPosition={true}
                                        />
                                        <AnimatedSectionCompositionSoup
                                            reference={ref}
                                            inView={inView}
                                            isMobile/>
                                    </MenuCardWrap>
                            })}
                        </MenuSectionReversed>
                        :
                        <MenuSection key={index} id={'section'+index}>
                            <AnimatedSectionCompositionSaladAndPotato index={index}/>
                            {section.map((specification, index2) => {
                                const saladImg = specification.name.includes("Салаты из мяса")
                                const potatoImg = specification.name.includes("Гарниры")
                                return !(saladImg || potatoImg)
                                    ? <MenuCard
                                        key={specification._id}
                                        name={specification.name}
                                        dishes={specification.dishes}
                                        index={index2}
                                        sectionIndex={'section'+index}
                                    /> :
                                    <MenuCardWrap key={specification._id} reducedCard={potatoImg && true}>
                                        <AnimatedSectionCompositionSaladAndPotato index={index} isMobile/>
                                        <MenuCard
                                            name={specification.name}
                                            dishes={specification.dishes}
                                            index={index2}
                                            sectionIndex={'section'+index}
                                            isMobile
                                            leftPosition={true}
                                        />
                                    </MenuCardWrap>

                            })}
                        </MenuSection>)}
            </MenuWrapper>

            {/*-----Напитки и бар----*/}
            <MenuNavigation id='drinkMenu' position='middle'/>
            <MenuHeader padding='20px 0 20px 0' >
                Напитки
            </MenuHeader>
            <MenuWrapper>
                <BarSection>
                    {sortedDrinks.map((specification, index) =>
                            <BarCard
                                key={specification._id}
                                name={specification.name}
                                drinks={specification.drinks}
                                index={index}
                            />
                        )}
                </BarSection>
            </MenuWrapper>

            {/*-----Дополнительное меню под заказ----*/}
            <MenuNavigation id='addMenu' position='bottom'/>
            <MenuHeader padding='30px 0 50px 0' additionalPadding>
                Блюда на заказ
            </MenuHeader>
            <AddMenuWrapper>
                <AdditionalMenu/>
                <MenuFooter>
                    <TextBlockHeader>
                        УКузьмича
                    </TextBlockHeader>
                    <TextBlockP light>
                        Просто | Вкусно | По-домашнему
                    </TextBlockP>
                    <Image src={logo} style={{opacity: 0.8}} alt='logo'/>
                </MenuFooter>
            </AddMenuWrapper>
        </MenuContainer>
    );
};

type AnimSecPropsType1 = {
    index: number
    isMobile?: boolean
}
type AnimSecPropsType2 = {
    isMobile?: boolean
    reference: (node?: Element) => void
    inView: boolean
}
function AnimatedSectionCompositionSaladAndPotato({index, isMobile}:AnimSecPropsType1) {
    const isPotato = index === 2
    return (
        <MenuImgWrapper isMobile={isMobile}>
            <FlexibleImgWrap>
                <ShadowOnMobDevices reducedShadow={isPotato}/>
                <MenuSideImgWrapper
                    id={isPotato ? 'potatos' : 'salad'}
                    //ref={index === 2 ? refOnView : imgRef}
                    sizes={isMobile ? [100,100]:[88,85]}
                    isMobile={isMobile}
                >
                    <Image src={isPotato ? potato : salad}
                           fill style={{objectFit:"contain"}}
                           alt='menuImg'/>
                </MenuSideImgWrapper>
                <ImgMask2
                    id={isPotato ? 'flour3wrap' : 'flourwrap'}
                    position={isPotato
                        ? (isMobile ? [-43, -18] : [10,-31])
                        : (isMobile ? [-55,-17] : [-30,-25])}
                >
                    <Image id={isPotato ? 'flour3' : 'flour'}
                           src={flour2}
                           fill style={{objectFit:"contain", transform: isPotato && 'rotate(-20deg)'}}
                           alt='flour2'/>
                </ImgMask2>
                <ImgMask2
                    id={isPotato ? 'mobile-flour3wrap' : 'mobile-flourwrap'}
                    position={isPotato ? [33,8] : [21,-12]}
                    isInvisibleOnDesktop
                >
                    <Image id={isPotato ? 'mobile-flour3' : 'mobile-flour'}
                           src={flour2}
                           fill style={{
                        objectFit: "contain",
                        transform: isPotato ? "scaleX(-1) rotate(-21deg)" : "scaleX(-1)"
                    }}
                           alt='flour2'/>
                </ImgMask2>
                <MenuSideImgWrapper2 isMobile={isMobile}>
                    <Image id={isPotato ? 'pepper' : 'tomatos'}
                           src={isPotato ? pepper : tomatos}
                           fill style={{objectFit:"contain"}}
                           alt='img'/>
                </MenuSideImgWrapper2>
            </FlexibleImgWrap>
        </MenuImgWrapper>
    )
}
function AnimatedSectionCompositionSoup({reference, inView, isMobile}:AnimSecPropsType2) {
    return (
        <MenuImgWrapper isMobile={isMobile}>
            <FlexibleImgWrap isMobile={isMobile}>
                <ShadowOnMobDevices isLeft/>
                <MenuSideImgWrapper
                    id='soup'
                    isMobile={isMobile}
                    sizes={[100,100]}
                >
                    <Image src={soup} fill style={{objectFit:"contain"}} alt='soup'/>
                </MenuSideImgWrapper>
                <ImgMask4 id='flour2wrap' isMobile={isMobile} >
                    <Image id='flour2' src={flour2} fill style={{objectFit:"contain", transform: 'rotate(-43deg)'}} alt='flour2'/>
                </ImgMask4>
                <MenuBranchWrapper id='branch' isMobile={isMobile}>
                    <Image src={branch} fill style={{objectFit:"contain",transform: 'rotate(15deg)'}} alt='branch'/>
                </MenuBranchWrapper>
                <ImgMask6  id='flour4wrap' inView={inView} isMobile={isMobile}>
                    <Image ref={reference} id='flour4' src={flour3} fill style={{objectFit:"contain"}} alt='flour4'/>
                </ImgMask6>
            </FlexibleImgWrap>
        </MenuImgWrapper>
    )
}


export default MenuPage;