import MainContainer from "../components/MainContainer";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {useState} from "react";
import RoomsPage from "../components/RoomsPage";


const Rooms = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const closeSidebar = () => {
        if(isOpen) setIsOpen(!isOpen)
    }

    return (
        <MainContainer keywords={'залы, фотографии'}>
            <Sidebar isOutsidePage isOpen={isOpen} toggle={toggle}/>
            <Navbar isOutsidePage toggle={toggle} isRoomPage/>
            <RoomsPage closeSidebar={closeSidebar}/>
        </MainContainer>
    );
};

export default Rooms;
