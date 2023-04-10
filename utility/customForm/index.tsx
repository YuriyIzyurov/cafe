import React, {Dispatch, FC, useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ButtonElement";
import {Star } from "../../components/ReviewsPage/ReviewCard/ReviewCardStyles";
import CheckMark from "../CheckMark";
import {
    AnimatedButton, AnimatedSection,
    BtnWrapper, CheckMarkWrapper,
    ErrorMessage,
    FieldWrapper,
    StyledForm,
    StyledInput,
    StyledTextArea, SuccessBlock, SuccessMessage
} from "./customFormStyles";
import {ReviewService} from "../../services/review.service";




const CustomForm:FC<{ setFormActive: Dispatch<boolean>, setBtnDisabled: Dispatch<boolean> }>
    = ({setFormActive, setBtnDisabled}) => {

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm()
    const [rating, setRatingValue] = useState(0)
    const [hover, setHover] = useState(null)
    const [success, setSuccess] = useState(false)

    const onSubmit = async data => {
        const res = await ReviewService.createReview(data)


        setSuccess(!success)
        setBtnDisabled(true)
        setTimeout(() => {
            setFormActive(false)
        }, 4500)
        setTimeout(() => {
            setSuccess(false)
            setBtnDisabled(false)
        }, 5500)
    }

    const handleClick = (ratingValue) => {
        setRatingValue(ratingValue)
        setValue('rating', ratingValue)
    };

    return (
     <>
         <StyledForm onSubmit={handleSubmit(onSubmit)} animating={success}>
             <AnimatedSection animating={success}>
                 <FieldWrapper>
                     <StyledInput
                         {...register("name", {
                             required: 'Обязательное поле',
                             minLength: {value: 2, message: 'Минимум 2 символа'},
                             maxLength: {value: 31, message: 'Максимум 31 символ'},
                             pattern: {value: /^[a-zа-яё_\-\s0-9]+$/iu, message: 'Только русские, латинские буквы, цифры и дефис'},
                             validate: (value) => {
                                 const words = value.split(' ')
                                 return words.length <= 2 && words.every(word => word.length <= 15) || "Неверный формат имени"
                             }
                         })}
                         type='text'
                         placeholder='Введите ваше имя'
                     />
                     {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                 </FieldWrapper>

                 <FieldWrapper>
                     {[...Array(5)].map((star, index) => {
                         const ratingValue = index + 1

                         return (
                             <label key={'label'+index} style={{height:'30px'}}>
                                 <input
                                     key={'input'+index}
                                     type='radio'
                                     name='starRating'
                                     value={ratingValue}
                                     onClick={() => handleClick(ratingValue)}
                                     style={{display: 'none'}}/>
                                 <Star
                                     key={'star'+index}
                                     size={30}
                                     color={ratingValue  <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                                     onMouseEnter={() => setHover(ratingValue)}
                                     onMouseLeave={() => setHover(null)}/>
                             </label>
                         )})}
                     {(errors.rating && rating === 0) && <ErrorMessage>Оцените по 5-бальной шкале</ErrorMessage>}
                 </FieldWrapper>

                 <input
                     type="hidden"
                     value={rating}
                     {...register("rating", { validate: v => +v !== 0 })}
                 />
                 <FieldWrapper>
                     <StyledTextArea
                         {...register("text", {
                             required: 'Обязательное поле',
                             minLength: {value: 5, message: 'Минимум 5 символов'},
                             maxLength: {value: 500, message: 'Максимум 500 символов'},
                         })}
                         placeholder='Комментарии...'
                         wrap='soft'
                     />
                     {errors.text && <ErrorMessage>{errors.text.message}</ErrorMessage>}
                 </FieldWrapper>
             </AnimatedSection>

             <BtnWrapper animating={success}>
                 <AnimatedButton onClick={handleSubmit(onSubmit)} animating={success}>
                     Отправить
                 </AnimatedButton>
             </BtnWrapper>
             <SuccessBlock>
                 <CheckMarkWrapper animating={success}>
                     <CheckMark/>
                 </CheckMarkWrapper>
                 <SuccessMessage animating={success}>Спасибо за отзыв!</SuccessMessage>
             </SuccessBlock>
         </StyledForm>
     </>
    );
};

export default CustomForm;
