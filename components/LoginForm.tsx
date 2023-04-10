import React, {FC, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {ErrorMessage, FieldWrapper, StyledInput } from "../utility/customForm/customFormStyles";
import {EnterAttention, LoginFormWrapper } from "./ReviewsPage/ReviewsPageStyles";
import {LoginButton, ReviewButton} from "../components/ButtonElement";
import {CloseIcon, Icon } from "./Sidebar/SidebarStyles";

import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {removeTokensStorage} from "../utility/auth.helper";




const LoginForm:FC<{closeModal: () => void}> = ({closeModal}) => {

    const [error, setError] = useState(null)
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm()

    const {login, deleteError, logout} = useActions()
    const {user} = useTypedSelector(state => state)


    const onSubmit = async data => {
        const response = await login(data)
        if('type' in response && response.type === 'auth/login/fulfilled') {
            closeModal()
        }
    }
    const handleLogout = () => {
        closeModal()
        logout()
        removeTokensStorage()
    }


    return (
        <LoginFormWrapper>
            {!user.user ? <>
                <Icon onClick={closeModal}>
                    <CloseIcon/>
                </Icon>
                <FieldWrapper>
                    <StyledInput
                        {...register("username", {
                            required: 'Обязательное поле'
                        })}
                        type='text'
                        placeholder='Введите логин'
                    />
                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                </FieldWrapper>

                <FieldWrapper>
                    <StyledInput
                        {...register("password", {
                            required: 'Обязательное поле'
                        })}
                        type='text'
                        placeholder='Введите пароль'
                    />
                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                </FieldWrapper>

                {user?.error && <ErrorMessage isLoginError>{user.error}</ErrorMessage>}

                <LoginButton onClick={handleSubmit(onSubmit)}>
                    ВОЙТИ
                </LoginButton>
            </>
                : <EnterAttention>
                    <Icon onClick={closeModal}>
                        <CloseIcon/>
                    </Icon>
                    <div>Вы уже зашли! Выйти?</div>
                    <LoginButton onClick={handleLogout}>
                        ВЫЙТИ ИЗ АККАУНТА
                    </LoginButton>
                </EnterAttention>}

        </LoginFormWrapper>
    );
};

export default LoginForm;