import MainContainer from "../components/MainContainer";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {FC, useState} from "react";
import MenuPage from "../components/MenuPage";
import {DishSpecification, DrinksSpecification} from "../utility/types";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {MenuService} from "../services/menu.service";



type PropsType = {
    dishes: DishSpecification[]
    drinks: DrinksSpecification[]
}
const Menu:FC<PropsType> = ({dishes, drinks}) => {

    const {user} = useTypedSelector(state => state)
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
            <Navbar isOutsidePage toggle={toggle} currentProfile={user.user}/>
            <MenuPage closeSidebar={closeSidebar} dishes={dishes} drinks={drinks} currentProfile={user.user}/>
        </MainContainer>
    );
};

export default Menu;

export async function getStaticProps(context) {

    try {
        const dishes:DishSpecification[] = await MenuService.getDishes()
        const drinks:DrinksSpecification[] = await MenuService.getDrinks()

        return {
            props: {dishes, drinks}
        }
    } catch(e) {
        console.log("Невозможно загрузить меню", e)
        return {notFound: true};
    }
}
