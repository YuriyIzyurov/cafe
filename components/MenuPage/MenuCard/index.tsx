import {
    CardContent,
    CardPosition,
    Dots,
    MenuCardContainer,
    MenuH2,
    MenuImg,
    PositionName,
    PositionPrice, Ruble, ShadowBG
} from "./MenuCardStyles";
import React from "react";
import { Dish } from "../../../utility/types";



type PositionProps = Pick<Dish, 'name' | 'price'> & {
    fontSize: string;
}
type MenuType = {
    name: string
    dishes: Dish[]
    index: number
    sectionIndex: string
    rightPosition?: boolean
    leftPosition?: boolean
    isMobile?: boolean
}


const MenuCard:React.FC<MenuType> = ({name, dishes, index, isMobile, rightPosition, leftPosition}) => {

    const setGrid = () => {
        switch (index) {
            case 0:  return 'header'
            case 1: return 'top'
            case 2: return 'middle'
            case 3: return 'footer'
            default: return 'footer2'
        }
    }

    return (
        <MenuCardContainer area={setGrid()} rightPosition={rightPosition} isMobile={isMobile}>
                <MenuImg url='images/splash.png'>
                    <MenuH2>{name}</MenuH2>
                </MenuImg>
                <CardContent>
                    {dishes.map((dish) => {
                        const fontSize = dish.name.length > 37 || isMobile ? '0.8rem' : dish.name.length > 30 ? '0.9rem' : '1rem'
                        return <Position key={dish._id} {...dish} fontSize={fontSize}/>
                    })}
                    <ShadowBG rightPosition={rightPosition} leftPosition={leftPosition}/>
                </CardContent>
        </MenuCardContainer>
    );
};

function Position ({fontSize, name, price}:PositionProps) {
    return (
        <CardPosition>
            <PositionName fontSize={fontSize}>
                {name}
            </PositionName>
            <Dots/>
            <PositionPrice>
                {price}
                <Ruble>₽</Ruble>
            </PositionPrice>
        </CardPosition>
    )
}

export default MenuCard;