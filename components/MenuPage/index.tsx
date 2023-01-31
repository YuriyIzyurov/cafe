import {
     ImgMask2, ImgMask4, ImgMask6,
    MenuContainer,
    MenuImgWrapper,
    MenuSection,
    MenuSectionReversed,
    MenuSideImg, MenuSideImg2, MenuSideImg3, MenuSideImg4, MenuSideImg5, MenuSideImg6,
    MenuWrapper
} from "./MenuPageStyles";
import MenuCard from "./MenuCard";
import {useEffect, useRef} from "react";
import {activateMenuAnimation} from "../../utility/parallax";
import { useInView } from 'react-intersection-observer';



const MenuPage = ({dishes, drinks}) => {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: .14,
    })
    const imgRef = useRef(null)


    const section1 = dishes.slice(0,4)
    const section2 = dishes.slice(4,8)
    const section3 = dishes.slice(8,13)
    const sections = [section1,section2,section3]

    useEffect(() => {
        activateMenuAnimation()
    }, [])

    useEffect(() => {
        console.log( inView)
    }, [inView])



    return (
        <MenuContainer id='menu'>
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
        </MenuContainer>
    );
};

export default MenuPage;