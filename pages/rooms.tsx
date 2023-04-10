import MainContainer from "../components/MainContainer";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {useState} from "react";
import RoomsPage from "../components/RoomsPage";
import {useTypedSelector} from "../hooks/useTypedSelector";


const Rooms = () => {
    const {user} = useTypedSelector(state => state)
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const closeSidebar = () => {
        if(isOpen) setIsOpen(!isOpen)
    }

    return (
        <MainContainer keywords={'залы, фотографии'}>
            <Sidebar isOutsidePage isOpen={isOpen} toggle={toggle}/>
            <Navbar isOutsidePage toggle={toggle} isRoomPage currentProfile={user.user}/>
            <RoomsPage closeSidebar={closeSidebar}/>
        </MainContainer>
    );
};

export default Rooms;
