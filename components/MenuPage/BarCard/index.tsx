import {
    CardContent,
    CardPosition,
    Dots, MenuCardContainer,
    MenuH2,
    MenuImg,
    PositionName, PositionPrice, Ruble, TestBG
} from "../MenuCard/MenuCardStyles";
import React, { FC } from "react";
import {BarCardContainer, BarCardWrapper, BarImgContainer, BarImgContainerWrap, BarSideImg, CardTable} from "./BarCardStyles";
import Image from 'next/image'
import vodka from 'public/images/vodka.png'
import liquor from 'public/images/liquor.png'
import whisky from 'public/images/whisky.png'
import vinered from 'public/images/vinered.png'
import vine from 'public/images/vine.png'
import beer from 'public/images/beer.png'
import tea from 'public/images/tea.png'
import limonade from 'public/images/limonade.png'
import {Drink} from "../../../utility/types";


 type CardType = {
    name: string
    drinks: Drink[]
    index: number
}

const BarCard: FC<CardType> = ({name, drinks, index}) => {

    const getSelfPosition = () => {
        if(index === 6 || index === 10) return 'flex-end'
        return index%2 === 0 || index === 5? 'flex-start' : 'flex-end'
    }
    const alt = 'bar image'

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
            <BarCardContainer justifyContent={getSelfPosition()}>

                {/*//картинка слева*/}
                {index === 1 &&
                    <BarImgContainerWrap>
                        <BarImgContainer sizes={[96,57]}>
                            <Image src={liquor} id='liquor' alt={alt} fill style={{objectFit:"contain"}}  />
                        </BarImgContainer>
                    </BarImgContainerWrap>}
                {index === 3 &&
                    <BarImgContainerWrap>
                        <BarImgContainer sizes={[100,100]}>
                            <Image src={vinered} id='vinered' alt={alt} fill style={{objectFit:"contain"}}  />
                        </BarImgContainer>
                    </BarImgContainerWrap>}
                {index === 7 &&
                    <BarImgContainerWrap>
                        <BarImgContainer sizes={[95,168]} translateY='-72%'>
                            <Image src={beer} id='beer' alt={alt} fill style={{objectFit:"contain"}} />
                        </BarImgContainer>
                    </BarImgContainerWrap>}
                {index === 9 &&
                    <BarImgContainerWrap>
                        <BarImgContainer sizes={[95,203]} translateY='68%'>
                            <Image src={limonade} id='limonade' alt={alt} fill style={{objectFit:"contain"}} />
                        </BarImgContainer>
                    </BarImgContainerWrap>}

                <BarCardWrapper>
                    <MenuImg url='images/splash2.png'>
                        <MenuH2>{name}</MenuH2>
                    </MenuImg>
                    <CardTable>
                        {isVisible100ml && <span>{!name.includes('Сладкие') ? '100 мл.' : '0.25 мл.'}</span>}
                        <span>{unit}</span>
                    </CardTable>
                    <CardContent>
                        {drinks.map((drink) => {
                            const fontSize = drink.name.length > 37 ? '0.8rem' : drink.name.length > 30 ? '0.9rem' : '1rem'
                            return (
                                <CardPosition key={drink._id}>
                                    <PositionName fontSize={fontSize}>
                                        {drink.name}
                                    </PositionName>
                                    <Dots/>
                                    {drink.price.ml100 !== 0 &&
                                        <PositionPrice>
                                            {drink.price.ml100}<Ruble>₽</Ruble>
                                        </PositionPrice>}
                                    <PositionPrice>
                                        {drink.price.bottle}<Ruble>₽</Ruble>
                                    </PositionPrice>
                                </CardPosition>
                            )})}
                           </CardContent>
                </BarCardWrapper>

                {/*//картинка справа*/}
                {index === 0  &&
                    <BarImgContainerWrap>
                        <BarImgContainer sizes={[95,93]}>
                            <Image src={vodka} id='vodka' alt={alt} fill style={{objectFit:"contain"}}  />
                        </BarImgContainer>
                    </BarImgContainerWrap>}
                {index === 2 &&
                    <BarImgContainerWrap height={80}>
                        <BarImgContainer sizes={[95,93]}>
                            <Image src={whisky} id='whisky' alt={alt} fill style={{objectFit:"contain"}}  />
                        </BarImgContainer>
                    </BarImgContainerWrap>}
                {index === 4 &&
                    <BarImgContainerWrap>
                        <BarImgContainer sizes={[100,133]} translateY='20%'>
                            <Image src={vine} id='vine' alt={alt} fill style={{objectFit:"contain"}} />
                        </BarImgContainer>
                    </BarImgContainerWrap>}
                {index === 8 &&
                    <BarImgContainerWrap>
                        <BarImgContainer sizes={[100,95]}>
                            <Image src={tea} id='tea' alt={alt} fill style={{objectFit:"contain"}} />
                        </BarImgContainer>
                    </BarImgContainerWrap>}
            </BarCardContainer>
    );
};

export default BarCard;