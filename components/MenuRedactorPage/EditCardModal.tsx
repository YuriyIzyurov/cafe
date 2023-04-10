import {useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {MenuService} from "../../services/menu.service";
import {BtnRedactorWrap, EditCardWrapper} from "../../components/MenuRedactorPage/MenuRedactorStyles";
import {ErrorMessage, StyledInput} from "../../utility/customForm/customFormStyles";
import React, {Dispatch, useEffect} from "react";
import {ExactMenuItem} from "../../components/MenuRedactorPage/index";
import {Dish, Drink} from "../../utility/types";

export type DishOrDrink = Pick<Dish, "name" | "price"> | Pick<Drink, "name" | "price">;
type MutateType = {
    type: string
    id: string
    updData?: DishOrDrink | Dish | Drink | string
}
type EditCardPropsType = {
    editableData:ExactMenuItem,
    closeModal: () => void
    setCondition: Dispatch<string>
    handleMutate: ({type, id, updData}: MutateType) => void
    condition: string
}
export function EditCardModal({editableData, closeModal, handleMutate, setCondition,condition}:EditCardPropsType) {
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm()

    const onSubmit = data => {
        const { name, price, portion } = data

        let updData
        if(editableData.specification) {
            updData = portion
                ? { name, price: { ml100: +portion, bottle: +price }, specification: editableData.specification } as Drink
                : { name, price: +price, specification: editableData.specification } as Dish
        } else updData = portion
            ? { name, price: { ml100: +portion, bottle: +price } } as Pick<Drink, "name" | "price">
            : { name, price: +price } as Pick<Dish, "name" | "price">

        const type = editableData.type
        const id = editableData._id
        handleMutate( {type, id, updData})
        closeModal()
    }
    const keyPressHandler = (event) => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    }
    const handleDeletePosition =  () => {
        setCondition('deletePosition')
    }
    const handleConfirmDeletion = () => {
        const type = editableData.type
        const id = editableData._id
        const updData = editableData.specification
        handleMutate({type, id, updData })
        closeModal()
    }

    return (
        <EditCardWrapper>
            <div>
                <span>Наименование</span>
                <StyledInput
                    {...register("name", {
                        required: 'Обязательное поле',
                        minLength: {value: 2, message: 'Минимум 2 символа'},
                    })}
                    type='text'
                    defaultValue={editableData.name}
                    placeholder='Наименование'
                />
                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            </div>

            {typeof editableData.price === 'number'
                ?
                <div>
                    <span>Цена</span>
                    <StyledInput
                        {...register("price", {
                            required: 'Обязательное поле',
                        })}
                        type='text'
                        defaultValue={editableData.price}
                        placeholder='Цена'
                        onKeyPress={keyPressHandler}
                    />
                    {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
                </div>
                :
                <div>
                    <div>
                        <span>Цена за порцию</span>
                        <StyledInput
                            {...register("portion")}
                            type='text'
                            defaultValue={editableData.price.ml100}
                            onKeyPress={keyPressHandler}
                        />
                    </div>
                    <div>
                        <span>Цена за единицу</span>
                        <StyledInput
                            {...register("price", {
                                required: 'Обязательное поле',
                            })}
                            type='text'
                            defaultValue={editableData.price.bottle}
                            onKeyPress={keyPressHandler}
                        />
                        {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
                    </div>
                </div>}
            <BtnRedactorWrap>
                <button onClick={handleSubmit(onSubmit)}>{editableData.name === '' ? 'Создать' : 'Изменить'}</button>
                <button onClick={closeModal}>Отмена</button>
            </BtnRedactorWrap>
            <div className='delete-btn-wrap'>
                {(editableData.name !== '' && condition !== 'deletePosition') && <button onClick={handleDeletePosition}>Удалить позицию</button>}
                {condition === 'deletePosition'
                    &&
                    <>
                        <span>Нажмите ОК для подтверждения</span>
                        <button onClick={handleConfirmDeletion}>ОК</button>
                    </>}
            </div>
        </EditCardWrapper>
    )
}