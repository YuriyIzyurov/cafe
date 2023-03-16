import {
    AddMenuWrapper, FlexibleImgWrap,
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
                            <MenuImgWrapper>
                                <FlexibleImgWrap>
                                    <MenuSideImgWrapper id='soup' sizes={[87,85]}>
                                        <Image src={soup} fill style={{objectFit:"contain"}} alt='soup'/>
                                    </MenuSideImgWrapper>
                                    <ImgMask4 id='flour2wrap'>
                                        <Image id='flour2' src={flour2} fill style={{objectFit:"contain"}} alt='flour2'/>
                                    </ImgMask4>
                                    <MenuBranchWrapper id='branch'>
                                        <Image src={branch} fill style={{objectFit:"contain"}} alt='branch'/>
                                    </MenuBranchWrapper>
                                    <ImgMask6  id='flour4wrap' inView={inView}>
                                        <Image ref={ref} id='flour4' src={flour3} fill style={{objectFit:"contain"}} alt='flour4'/>
                                    </ImgMask6>
                                </FlexibleImgWrap>
                            </MenuImgWrapper>
                            {section.map((specification, index2) =>
                                    <MenuCard
                                        key={specification._id}
                                        name={specification.name}
                                        dishes={specification.dishes}
                                        index={index2}
                                        sectionIndex={'section'+index}
                                    />)}
                        </MenuSectionReversed>
                        :
                        <MenuSection key={index} id={'section'+index}>
                            <AnimatedSectionComposition index={index} refOnView={ref} imgRef={imgRef}/>
                            {section.map((specification, index2) => {
                                return !specification.name.includes("Салаты из мяса")
                                    ? <MenuCard
                                        key={specification._id}
                                        name={specification.name}
                                        dishes={specification.dishes}
                                        index={index2}
                                        sectionIndex={'section'+index}
                                        justifySelf={index === 3}
                                    /> :
                                    <MenuCardWrap key={specification._id}>
                                        <AnimatedSectionComposition index={index} refOnView={ref} imgRef={imgRef} isMobile/>
                                        <MenuCard
                                            name={specification.name}
                                            dishes={specification.dishes}
                                            index={index2}
                                            sectionIndex={'section'+index}
                                            justifySelf={index === 3}
                                            isMobile
                                        />
                                    </MenuCardWrap>

                                /* <div style={{display:'flex', position:'relative', background: 'white'}}>
                                        <div style={{height:'10px', width: '100px', background: 'red'}}></div>
                                        <div style={{ background: 'blue',position:'absolute',top:0,right:0}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deleniti dolores eveniet fugit ipsum nostrum nulla officia omnis, quia sequi.</div>
                                    </div>*/
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
            <MenuHeader padding='30px 0 50px 0'>
                Блюда на заказ
            </MenuHeader>
            <AddMenuWrapper>
                <AdditionalMenu/>
            </AddMenuWrapper>
        </MenuContainer>
    );
};

type AnimSecPropsType = {
    index: number
    refOnView: (node?: Element) => void
    imgRef:React.MutableRefObject<HTMLDivElement>
    isMobile?: boolean
}
function AnimatedSectionComposition({index, refOnView, imgRef, isMobile}:AnimSecPropsType) {
    return (
        <MenuImgWrapper isMobile={isMobile}>
            <FlexibleImgWrap>
                <MenuSideImgWrapper
                    id={index === 2 ? 'potatos' : 'salad'}
                    ref={index === 2 ? refOnView : imgRef}
                    sizes={isMobile ? [100,100]:[88,85]}
                    isMobile={isMobile}
                >
                    <Image src={index === 2 ? potato : salad}
                           fill style={{objectFit:"contain"}}
                           alt='menuImg'/>
                </MenuSideImgWrapper>
                <ImgMask2
                    id={index === 2 ? 'flour3wrap' : 'flourwrap'}
                    position={index === 2
                        ? (isMobile ? [11, -111] : [13,-114])
                        : (isMobile ? [-55,-17] : [-30,-25])}
                >
                    <Image id={index === 2 ? 'flour3' : 'flour'}
                           src={flour2}
                           fill style={{objectFit:"contain"}}
                           alt='flour2'/>
                </ImgMask2>
                <ImgMask2
                    id={index === 2 ? 'mobile-flour3wrap' : 'mobile-flourwrap'}
                    position={index === 2 ? [13,13] : [21,-12]}
                    isInvisibleOnDesktop
                >
                    <Image id={index === 2 ? 'mobile-flour3' : 'mobile-flour'}
                           src={flour2}
                           fill style={{objectFit:"contain", transform: "scaleX(-1) "}}
                           alt='flour2'/>
                </ImgMask2>
                <MenuSideImgWrapper2 isMobile={isMobile}>
                    <Image id={index === 2 ? 'pepper' : 'tomatos'}
                           src={index === 2 ? pepper : tomatos}
                           fill style={{objectFit:"contain"}}
                           alt='img'/>
                </MenuSideImgWrapper2>
            </FlexibleImgWrap>
        </MenuImgWrapper>
    )
}


export default MenuPage;