import {
    CardContent,
    CardPosition,
    Dots, MenuCardContainer,
    MenuH2,
    MenuImg,
    PositionName, PositionPrice, Ruble, TestBG
} from "../MenuCard/MenuCardStyles";
import React, { FC } from "react";
import {BarCardContainer, BarCardWrapper, BarImgContainer, BarSideImg, CardTable} from "./BarCardStyles";

type Price = {
    ml50: number
    ml100: number
    bottle: number
    id: string
}
type Drink = {
    name: string
    price: Price
    specification: string
    _id: string
}
type CardType = {
    name: string
    drinks: Drink[]
    index: number
}

const BarCard: FC<CardType> = ({name, drinks, index}) => {

    const getSelfPosition = () => {
       if(index < 3) return 'flex-start'
        else if(index < 6) return 'flex-end'
        else if(index < 8) return 'flex-start'
        else if(index < 11) return 'flex-end'
        else return 'center'
    }

    const isSizeAvailable = (number) => {
        const array = number === 50
            ? drinks.filter((drink) => drink.price.ml50 !== 0)
            : drinks.filter((drink) => drink.price.ml100 !== 0)
        return array.length !== 0
    }
    const isVisible50ml = isSizeAvailable(50)
    const isVisible100ml = isSizeAvailable(100)

    const setUnit = () => {

        //todo: подумать как переделать на константы
        if(name.includes('разливное')) return '500 мл.'
        else if(name.includes('Горячие')) return ''
        else if(name.includes('Снэки')) return 'шт.'
        else return '1 бут.'
    }
    const unit = setUnit()


    return (
            <BarCardContainer justifySelf={getSelfPosition()}>
                {index === 3 &&
                    <BarImgContainer>
                        <BarSideImg id='vine' src='images/vine.png' position={[150,-22]} alt='drink'/>
                    </BarImgContainer>}
                {index === 8 &&
                    <BarImgContainer>
                        <BarSideImg id='tea' src='images/tea.png' position={[100,-4]} alt='drink'/>
                    </BarImgContainer>}
                <BarCardWrapper>
                    <MenuImg url='images/splash2.png'>
                        <MenuH2>{name}</MenuH2>
                    </MenuImg>
                    <CardTable>
                        {isVisible50ml && <span>50 мл.</span>}
                        {isVisible100ml && <span>{!name.includes('Сладкие') ? '100 мл.' : '0.25 мл.'}</span>}
                        <span>{unit}</span>
                    </CardTable>
                    <CardContent>
                        {drinks.map((drink) =>
                            <CardPosition key={drink._id}>
                                <PositionName>
                                    {drink.name}
                                </PositionName>
                                <Dots/>
                                {drink.price.ml50 !== 0 &&
                                    <PositionPrice>
                                        {drink.price.ml50}<Ruble>₽</Ruble>
                                    </PositionPrice>}
                                {drink.price.ml100 !== 0 &&
                                    <PositionPrice>
                                        {drink.price.ml100}<Ruble>₽</Ruble>
                                    </PositionPrice>}
                                <PositionPrice>
                                    {drink.price.bottle}<Ruble>₽</Ruble>
                                </PositionPrice>
                            </CardPosition>
                        )}
                        {index === 7 && <div style={{height: '100px'}}></div>} {/*Доп блок для расширения раздела */}
                           </CardContent>
                </BarCardWrapper>
                {index === 0  &&
                    <BarImgContainer>
                        <BarSideImg id='whisky' src='images/whisky.png' position={[257,55]} alt='drink'/>
                    </BarImgContainer>}
                {index === 6 &&
                    <BarImgContainer>
                        <BarSideImg id='beer' src='images/beer.png' position={[15,73]} alt='drink'/>
                    </BarImgContainer>}
            </BarCardContainer>
    );
};

export default BarCard;