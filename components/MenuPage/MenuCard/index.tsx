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


type Dish = {
    description: string
    name: string
    price: number
    specification: string
    _id: string
}
type MenuType = {
    name: string
    dishes: Dish[]
    index: number
    sectionIndex: string
    justifySelf?: boolean
}

const MenuCard:React.FC<MenuType> = ({name, dishes, index, sectionIndex, justifySelf}) => {

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
        <MenuCardContainer area={setGrid()} justifySelf>
            <MenuImg url='images/splash.png'>
                <MenuH2>{name}</MenuH2>
            </MenuImg>
            <CardContent>
                {dishes.map((dish) =>
                    <CardPosition key={dish._id}>
                        <PositionName>
                            {dish.name}
                        </PositionName>
                        <Dots></Dots>
                        <PositionPrice>
                            {dish.price}
                            <Ruble>₽</Ruble>
                        </PositionPrice>
                    </CardPosition>
                )}
            </CardContent>
        </MenuCardContainer>
    );
};

export default MenuCard;