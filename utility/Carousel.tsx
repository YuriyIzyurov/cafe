import Image from "next/image";
import {GalleryWrapper, RoomContent, RoomsDescription, RoomsSection} from "../components/RoomsPage/RoomsPageStyles";
import ImageGallery from 'react-image-gallery';
import React, {FC} from "react";


type roomType = {
    name: string
    text: string[]
}
const RoomText:FC<roomType & {index: number}> = ({name,text,index}) => {
    return (
        <RoomContent>
            <h2>{name}</h2>
            <ul style={index===1 ? {paddingRight: '40px'} : {paddingRight: 0}}>
                {text.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <span></span> {/*чтоб блок немного выше поднялся*/}
        </RoomContent>
    )
}


const rooms = [
    {
        name: 'Банкетный зал',
        text: ['вмещает в себя до 40 гостей',
            'зал изолированный со своим гардеробом и туалетной комнатой',
            'фоновая музыка'],
        images: ['/images/rooms/room1-1.jpg','/images/rooms/room1-2.jpg','/images/rooms/room1-3.jpg']
    },
    {
        name: 'Зал на Набережной',
        text: ['вмещает в себя до 25 гостей',
            'зал с отдельным входом',
            'фоновая музыка',
            'для ежедневного комфортного времяпрепровождения'],
        images: ['/images/rooms/room2-1.jpg','/images/rooms/room2-2.jpg','/images/rooms/room2-3.jpg']
    },
    {
        name: 'Диванный зал',
        text: ['количество посадочных мест 28',
            'для ежедневного комфортного времяпрепровождения',
            'отдельный гардероб'],
        images: ['/images/rooms/room3-1.jpg','/images/rooms/room3-2.jpg','/images/rooms/room3-3.jpg']
    },
    /*{
        name: 'Летняя веранда',
        text: ['количество посадочных мест 28',
            'для ежедневного комфортного времяпрепровождения', "для ежедневного комфортного времяпрепровождения",
            'еще какое-нибудь преимущество0'],
        images: ['/images/rooms/room4-1.jpg','/images/rooms/room4-2.jpg','/images/rooms/room4-3.jpg','/images/rooms/room4-4.jpg']
    }*/]


export default () => (
    <>
        {rooms.map((room:roomType, index) =>
            <RoomsSection key={index} flexDirection={index%2!==0 && 'reverse'}>
                <GalleryWrapper>
                    <ImageGallery items={[
                        {
                            //renderItem: () => <Image src={`/images/rooms/room${index+1}-1.jpg`} width={550} height={360} alt={'room'+index} style={{objectFit:"cover"}}/>,
                            original: `images/rooms/room${index+1}-1.jpg`,
                            thumbnail: `images/rooms/room${index+1}-1-thumb.jpg`,
                            loading: 'lazy',
                            thumbnailLoading: 'lazy',

                        },
                        {
                           // renderItem: () => <Image src={`/images/rooms/room${index+1}-2.jpg`} width={550} height={360} alt={'room'+index} style={{objectFit:"cover"}}/>,
                            original: `images/rooms/room${index+1}-2.jpg`,
                            thumbnail: `images/rooms/room${index+1}-2-thumb.jpg`,
                            loading: 'lazy',
                            thumbnailLoading: 'lazy'
                        },
                        {
                            //renderItem: () => <Image src={`/images/rooms/room${index+1}-3.jpg`} width={550} height={360} alt={'room'+index} style={{objectFit:"cover"}}/>,
                            original: `images/rooms/room${index+1}-3.jpg`,
                            thumbnail: `images/rooms/room${index+1}-3-thumb.jpg`,
                            loading: 'lazy',
                            thumbnailLoading: 'lazy'
                        },
                       /* {
                            //renderItem: () => <Image src={`/images/rooms/room${index+1}-4.jpg`} width={550} height={360} alt={'room'+index} style={{objectFit:"cover"}}/>,
                            original: `images/rooms/room${index+1}-4.jpg`,
                            thumbnail: `images/rooms/room${index+1}-4-thumb.jpg`,
                            loading: 'lazy',
                            thumbnailLoading: 'lazy'
                        }*/
                    ]}
                                  showPlayButton={false}
                                  lazyload={true}/>
                </GalleryWrapper>
                <RoomsDescription>
                    <RoomText {...room} index={index}/>
                </RoomsDescription>
            </RoomsSection>
        )}
    </>
);