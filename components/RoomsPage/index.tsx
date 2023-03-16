import React, { FC } from 'react';
import Carousel from '../../utility/Carousel';
import {GalleryWrapper, RoomContent, RoomsContainer, RoomsDescription, RoomsSection} from "./RoomsPageStyles";


const RoomsPage = ({closeSidebar}) => {

    return (
        <RoomsContainer onClick={closeSidebar}>
            <Carousel/>
        </RoomsContainer>
    );
};

export default RoomsPage;