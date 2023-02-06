import MainContainer from "../components/MainContainer";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {useState} from "react";
import RoomsPage from "../components/RoomsPage";


const Rooms = ({users}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <MainContainer keywords={'залы, фотографии'}>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar isOutsidePage toggle={toggle} isRoomPage/>
            <RoomsPage/>
        </MainContainer>
    );
};

export default Rooms;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
        props: {users}
    }
}