import {
    CardHeader,
    EditBtnWrapper, PriceSection,
    RedactableCard,
    RedactablePosition
} from "../../components/MenuRedactorPage/MenuRedactorStyles";
import {StyledInput} from "../../utility/customForm/customFormStyles";
import {FaPencilAlt} from "react-icons/fa";
import React, { FC, useState } from "react";
import {Dots} from "../../components/MenuPage/MenuCard/MenuCardStyles";
import {MenuItem, Section} from "../../components/MenuRedactorPage/index";





const ruble = '₽'
type UnitPropsType = {
    list:MenuItem[]
    section: string
}
type MutateUpdType = {
    type: string
    id: string
    updData: string
}
type PropsType = {
    editHeaderMode: boolean
    section: Section
    handleMutate: ({type, id, updData}: MutateUpdType) => void

}

const EditableCard:FC<PropsType> = ({ editHeaderMode, section, handleMutate }) => {

    const [value, setValue] = useState<string | null>(null)

    const handleChangeName = (e) => {
        setValue(e.target.value)
    }
    const handleMutateData = () => {
        handleMutate({
            type: 'drinks' in section ? 'drink' : 'dish',
            id: section._id,
            updData: value
        })}

    return (
        <RedactableCard key={section._id}>
            <CardHeader>
                {!editHeaderMode
                    ? <span>{section.name}</span>
                    : <StyledInput
                        type='text'
                        defaultValue={section.name}
                        onChange={handleChangeName}
                        placeholder='Наименование'
                    />}
                <EditBtnWrapper id={!editHeaderMode ? 'edit-header-button' : ''} data-id={section._id}>
                    <div style={{ pointerEvents: !editHeaderMode ? 'none' : 'all', height: '30px', display: 'flex', gap: '5px' }}>
                        {!editHeaderMode
                            ? <FaPencilAlt/>
                            :
                            <>
                                <div id='accept-change-name' className='accept btn' onClick={handleMutateData}>Изменить</div>
                                <div id='cancel' className='cancel btn'>Отменить</div>
                            </>}
                    </div>
                </EditBtnWrapper>
            </CardHeader>
            <Unit list={'drinks' in section ? section.drinks : section.dishes} section={section._id}/>
            <div style={{display:'flex', justifyContent: 'center', paddingTop: '10px'}}>
                <div data-id={section._id} id='add-new-item' className='cancel btn'>Добавить новую позицию</div>
            </div>
        </RedactableCard>
    );
};


function Unit({list, section}:UnitPropsType){
    return <>
        {list.map((item) => {
            const data = section + ' ' + item._id
            return (
                <RedactablePosition key={item._id} data-id={data}>
                    <span>{item.name}</span>
                    <Dots/>
                    <PriceSection>
                        {typeof item.price === 'number'
                            ? <><span>{item.price}</span><span>{ruble}</span></>
                            : (<>{item.price.ml100 !== 0 && <><span>{item.price.ml100}</span><span>{ruble}</span></>}
                                <span>{item.price.bottle}</span><span>₽</span></>)}

                    </PriceSection>
                </RedactablePosition>
            )
        })}
    </>
}

export default EditableCard;