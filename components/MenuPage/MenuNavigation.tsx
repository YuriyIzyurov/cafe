import {Button, ButtonSmoothScroll} from "../ButtonElement";
import {MenuToggle} from "../MenuPage/MenuPageStyles";
import React from "react";

type MenuNavType = {
    position: string
    id: string
}
const MenuNavigation = ({position, id }:MenuNavType) => {

    let isActive
    let middleBtn
    let isBottom
    let rightBtn

    switch (position) {
        case 'top': isActive = [true,false,false], middleBtn = [false,true,false], isBottom = [false,false,false]
            break
        case 'middle': isActive = [false,true,false], middleBtn = [false,true,false], isBottom = [true,false,true]
            break
        case 'bottom': isActive = [false,false,true], middleBtn = [true,false,false], isBottom = [false,false,false], rightBtn = true
    }
    return (
        <MenuToggle id={id}>
            <ButtonSmoothScroll
                to='mainMenu'
                smooth={true}
                duration={800}
                spy={true}
                exact='true'
                offset={-80}
            >
                <Button color={'#a1907b'}
                        sectionIsActive={isActive[0]}
                        middleBtn={middleBtn[0]}
                        isBottom={isBottom[0]}>
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
                <Button color={'#a1907b'}
                        sectionIsActive={isActive[1]}
                        middleBtn={middleBtn[1]}
                        isBottom={isBottom[1]}>
                    Напитки
                </Button>
            </ButtonSmoothScroll>
            <ButtonSmoothScroll
                to='addMenu'
                smooth={true}
                duration={800}
                spy={true}
                exact='true'
                offset={-80}
            >
                <Button color={'#a1907b'}
                        sectionIsActive={isActive[2]}
                        middleBtn={middleBtn[2]}
                        isBottom={isBottom[2]}
                        rightBtn={rightBtn}>
                    <span className="desktop">Дополнительное меню</span>
                    <span className="mobile">Доп.меню</span>
                </Button>
            </ButtonSmoothScroll>
        </MenuToggle>
    );
};


export default MenuNavigation;