import React, { FC } from 'react';
import {GalleryWrapper, RoomContent, RoomsContainer, RoomsDescription, RoomsSection} from "./RoomsPageStyles";
import ImageGallery from 'react-image-gallery';

const RoomsPage = () => {

    type roomType = {
        name: string
        text: string[]
    }
    const RoomText:FC<roomType> = (room) => {
        return (
            <RoomContent>
                <h2>{room.name}</h2>
                <ul>
                    {room.text.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <div style={{height: '100px'}}></div> {/*чтоб блок немного выше поднялся*/}
            </RoomContent>
        )
    }

    const rooms = [
        {
            name: 'Банкетный зал',
            text: ['вмещает в себя до 45 гостей',
                'зал изолированный со своим гардеробом и туалетной комнатой',
                'фоновая музыка', 'система кондиционирования' ]
        },
        {
            name: 'Зал на Набережной',
            text: ['вмещает в себя до 25 гостей',
                'зал с отдельным входом',
                'фоновая музыка',
                'система кондиционирования',
            'для ежедневного комфортного времяпрепровождения']
        },
        {
            name: 'Диванный зал',
            text: ['количество посадочных мест 28',
                'для ежедневного комфортного времяпрепровождения', "для ежедневного комфортного времяпрепровождения",
                'еще какое-нибудь преимущество0']
        }]

    return (
        <RoomsContainer>
            {rooms.map((room:roomType, index) =>
                <RoomsSection key={index} flexDirection={index === 1 && 'reverse'}>
                    <GalleryWrapper>
                        <ImageGallery items={[
                            {
                                original: `images/rooms/room${index+1}-1.jpg`,
                                thumbnail: `images/rooms/room${index+1}-1-thumb.jpg`,
                            },
                            {
                                original: `images/rooms/room${index+1}-2.jpg`,
                                thumbnail: `images/rooms/room${index+1}-2-thumb.jpg`,
                            },
                            {
                                original: `images/rooms/room${index+1}-3.jpg`,
                                thumbnail: `images/rooms/room${index+1}-3-thumb.jpg`,
                            }
                        ]}
                                      showPlayButton={false}
                                          color={'red'}/>
                    </GalleryWrapper>
                    <RoomsDescription>
                        <RoomText {...room}/>
                    </RoomsDescription>
                </RoomsSection>
            )}
        </RoomsContainer>
    );
};

export default RoomsPage;