import {
    CardContent,
    CardPosition,
    Dots,
    MenuCardContainer,
    MenuH2,
    MenuImg,
    PositionName,
    PositionPrice, Ruble
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
    justifySelf?: boolean
    isMobile?: boolean
}


const MenuCard:React.FC<MenuType> = ({name, dishes, index, isMobile, justifySelf}) => {

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
        <MenuCardContainer area={setGrid()} justifySelf isMobile={isMobile}>
                <MenuImg url='images/splash.png'>
                    <MenuH2>{name}</MenuH2>
                </MenuImg>
                <CardContent>
                    {dishes.map((dish) => {
                        const fontSize = dish.name.length > 37 || isMobile ? '0.8rem' : dish.name.length > 30 ? '0.9rem' : '1rem'
                        return <Position key={dish._id} {...dish} fontSize={fontSize}/>
                    })}
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
            <Dots></Dots>
            <PositionPrice>
                {price}
                <Ruble>₽</Ruble>
            </PositionPrice>
        </CardPosition>
    )
}

export default MenuCard;