import MainContainer from "../components/MainContainer";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {FC, useState} from "react";
import MenuPage from "../components/MenuPage";
import {DishSpecification, DrinksSpecification} from "../utility/types";


type PropsType = {
    dishes: DishSpecification[]
    drinks: DrinksSpecification[]
}
const Menu:FC<PropsType> = ({dishes, drinks}) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)
    const closeSidebar = () => {
        if(isOpen) setIsOpen(!isOpen)
    }

    {/*В зависимости от того, на какой странице находится навбар,
    он ведет себя по разному(как некст роутер, либо как скролл по айди секции)*/}
    return (
        <MainContainer keywords={'меню'}>
            <Sidebar isOutsidePage isOpen={isOpen} toggle={toggle}/>
            <Navbar isOutsidePage toggle={toggle} />
            <MenuPage closeSidebar={closeSidebar} dishes={dishes} drinks={drinks}/>
        </MainContainer>
    );
};

export default Menu;

export async function getStaticProps(context) {



    const response1 = await fetch('https://jwt-authorization-nest.vercel.app/dishes')
    const response2 = await fetch('https://jwt-authorization-nest.vercel.app/drinks')
    const dishes:DishSpecification[] = await response1.json()
    const drinks:DrinksSpecification[] = await response2.json()

    return {
        props: {dishes, drinks}
    }
}