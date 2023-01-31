import MainContainer from "../components/MainContainer";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {useState} from "react";
import MenuPage from "../components/MenuPage";

const Menu = ({dishes, drinks}) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    {/*В зависимости от того, на какой странице находится навбар,
    он ведет себя по разному(как некст роутер, либо как скролл по айди секции)*/}
    return (
        <MainContainer keywords={'меню'}>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar isOutsidePage toggle={toggle} />
            <MenuPage dishes={dishes} drinks={drinks}/>
        </MainContainer>
    );
};

export default Menu;

export async function getStaticProps(context) {

    const response1 = await fetch('http://localhost:5000/dishes')
    const response2 = await fetch('http://localhost:5000/drinks')
    const dishes = await response1.json()
    const drinks = await response2.json()
    return {
        props: {dishes, drinks}
    }
}