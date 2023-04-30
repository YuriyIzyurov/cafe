import {ErrFooter, ErrHeader, ErrMain, ErrorPageWrapper, ErrImgWrapper, BigFour } from "./ErrorPageStyles";
import soup from '../../public/images/menu-soup.png'
import Image from "next/image";
import React from "react";
import {Button, ButtonRoute} from "../ButtonElement";



const ErrorPage = () => {
    return (
        <ErrorPageWrapper>
            <ErrHeader>
                <BigFour/>
                <ErrImgWrapper>
                    <Image src={soup} fill style={{objectFit:"contain"}} alt='soup'/>
                </ErrImgWrapper>
                <BigFour/>
            </ErrHeader>
            <ErrMain>
                <h1>Ой! Страница не найдена...</h1>
            </ErrMain>
            <ErrFooter>
                <ButtonRoute href='/'>
                    <Button>
                        Вернуться на главную
                    </Button>
                </ButtonRoute>
            </ErrFooter>
        </ErrorPageWrapper>
    );
};

export default ErrorPage;
