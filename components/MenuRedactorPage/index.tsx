import {Dish, DishSpecification, Drink, DrinksSpecification} from "../../utility/types";
import {MenuRedactorWrapper, MenuSectionsContainer} from './MenuRedactorStyles'
import React, {FC, useState} from "react";
import ModalWindow from "../../components/ModalWindow";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {MenuService} from "../../services/menu.service";
import EditableCard from "../../components/MenuRedactorPage/EditableCard";
import {DishOrDrink, EditCardModal} from "./EditCardModal";
import { Button, ButtonRoute } from "../ButtonElement";

export type Section = DishSpecification | DrinksSpecification
type PropsType = {
    menu: Section[]
}
interface Handlers {
    [key: string]: ({type, id, updData}: {type: string, id: string, updData?: string | DishOrDrink}) => Promise<any>;
}


const MenuRedactor:FC<PropsType> = ({menu}) => {

    const [condition, setCondition] = useState("updateMenuPosition")


    const queryClient = useQueryClient()
    const {data} = useQuery(
        ['menu'],
        MenuService.getMenu,
        {initialData: menu}
    )


    const handlers:Handlers = {
        updateMenuPosition: async ({type, id, updData}) => {
            return MenuService.updateMenuPosition(type, id, updData as DishOrDrink);
        },
        updateSpecificationName: async ({type, id, updData}) => {
            return MenuService.updateSpecificationName(type, id, updData as string);
        },
        deletePosition: async ({type, id, updData}) => {
            return MenuService.deletePosition(type, id, updData as string);
        },
        createPosition: async ({type, id, updData}) => {
            return MenuService.createPosition(type, id, updData as (Dish | Drink));
        }
    };
    const fetchDataHandler = handlers[condition]

    const {mutate} = useMutation(fetchDataHandler,{
        onSuccess:()=>{
            queryClient.invalidateQueries(['menu'])
        }
    });

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [editableData, setEditableData] = useState<ExactMenuItem | CreateMenuItem | null>(null)
    const [editHeaderId, setEditHeaderId] = useState<string | null>(null)


    const handleClick = (e) => {

        if(e.target.closest('[data-id]') && e.target.id === 'edit-header-button') {
            const dataId = e.target.closest('[data-id]').getAttribute("data-id")
            setEditHeaderId(dataId)
            setCondition('updateSpecificationName')

        } else if(e.target.closest('[data-id]') && e.target.id === 'cancel') {
            setEditHeaderId(null)

        } else if(e.target.closest('[data-id]') && e.target.id === 'accept-change-name') {
            setEditHeaderId(null)

        } else if(e.target.closest('[data-id]') && e.target.id === 'add-new-item') {
            const dataId = e.target.closest('[data-id]').getAttribute("data-id")
            const section = data.find(section => section._id === dataId)
            const isDrink = 'drinks' in section
            const emptyInitialData = {
                name: '',
                price: isDrink ? {ml100: 0, bottle: 0} : 0,
                type: isDrink ?  'drink' : 'dish',
                specification: section._id
            } as CreateMenuItem

            setCondition('createPosition')
            setEditableData(emptyInitialData)
            setModalIsOpen(!modalIsOpen)

        }  else if(e.target.closest('[data-id]')) {
            const dataId = e.target.closest('[data-id]').getAttribute("data-id")
            const [sectionId, unitId] = dataId.split(' ')
            const section = data.find(section => section._id === sectionId)
            const dishOrDrink = 'drinks' in section
                ? section.drinks.find(item => item._id === unitId)
                : section.dishes.find(item => item._id === unitId)
            const result = {...dishOrDrink, type: 'drinks' in section ?  'drink' : 'dish'}

            setCondition('updateMenuPosition')
            setEditableData(result)
            setModalIsOpen(!modalIsOpen)
        }
    }
    const closeModal = () => {
        setModalIsOpen(false)
        setEditableData(null)
    }
    const handleMutate = ({type, id, updData}) => {
        mutate({type, id, updData})
    }




    return (
        <MenuRedactorWrapper>
            <ButtonRoute href='/menu'>
                <Button>Назад в меню</Button>
            </ButtonRoute>
            <ModalWindow modalIsOpen={modalIsOpen}>
                {editableData &&
                    <EditCardModal
                        editableData={editableData}
                        setCondition={setCondition}
                        condition={condition}
                        handleMutate={handleMutate}
                        closeModal={closeModal}/>}
            </ModalWindow>
            <MenuSectionsContainer onClick={handleClick}>
                {data.map((section) => {
                    const isSectionActive = editHeaderId === section._id
                    return (
                        <EditableCard
                            section={section}
                            handleMutate={handleMutate}
                            editHeaderMode={isSectionActive}/>
                    )
                })}
            </MenuSectionsContainer>
            <ButtonRoute href='/menu'>
                <Button>Назад в меню</Button>
            </ButtonRoute>
        </MenuRedactorWrapper>
    );
};

export type MenuItem = Dish | Drink
export type ExactMenuItem = Dish & {type: string} | Drink & {type: string}
export type CreateMenuItem = Dish & {type: string, specification: string} | Drink & {type: string, specification: string}



export default MenuRedactor;