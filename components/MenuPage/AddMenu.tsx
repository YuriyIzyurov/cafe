import {AddMenuContent, AddMenuGalary, AddMenuText, GalaryImgWrapper, MenuHeader} from "./MenuPageStyles";
import Image from 'next/image'


const AdditionalMenu = () => {

    const galary = [{
        photo: 'cruassan',
        alt: 'cruassan'
    },{
        photo: 'fish',
        alt: 'fish'
    },{
        photo: 'icecream',
        alt: 'icecream'
    },{
        photo: 'meat',
        alt: 'meat'
    },{
        photo: 'pig',
        alt: 'pig'
    },{
        photo: 'icecream2',
        alt: 'icecream2'
    },{
        photo: 'tongue',
        alt: 'tongue'
    },{
        photo: 'icecream2',
        alt: 'icecream2'
    },{
        photo: 'tongue',
        alt: 'tongue'
    },]

    return (
        <AddMenuContent id='additionalMenuSection'>
            <AddMenuText>
                <ul>
                    <li><span>Буженина</span></li>
                    <li><span>Рулет куриный с грибочками</span></li>
                    <li><span>Рулет из лаваша со слабосол. сёмгой</span></li>
                    <li><span>Судак фаршированный</span></li>
                    <li><span>Стерлядь фаршированная</span></li>
                    <li><span>Поросёнок фаршированный</span></li>
                    <li><span>Студень мясной</span></li>
                    <li><span>Заливное из сёмги, говядины, языка</span></li>
                    <li><span>Грибочки фаршированные</span></li>
                    <li><span>Кролик в сметанном соусе</span></li>
                    <li><span>Говяжьи ребра в казане</span></li>
                    <li><span>Индейка в соусе</span></li>
                </ul>
            </AddMenuText>

            {/*дымок в меню*/}
            <GalaryImgWrapper id='smoke1' position={['-28%','0']} width={'100%'} height={'150%'}>
                <Image src={'/images/menu/additional/smoke-menu1.png'}
                       alt='pig'
                       fill
                       style={{objectFit:"contain"}} />
            </GalaryImgWrapper>
            <GalaryImgWrapper id='smoke2' position={['46%','0']} width={'100%'} height={'105%'}>
                <Image src={'/images/menu/additional/smoke-menu2.png'}
                       alt='pig'
                       fill
                       style={{objectFit:"contain"}} />
            </GalaryImgWrapper>


            {/*картинки заказных блюд*/}
            <GalaryImgWrapper id='pig' position={['-10%','3%']} width={'22%'} height={'65%'}>
                <Image src={'/images/menu/additional/pig-mini.png'}
                       alt='pig'
                       fill
                       style={{objectFit:"contain"}} />
            </GalaryImgWrapper>
            <GalaryImgWrapper id='fish' position={['-10%','75%']} width={'26%'} height={'60%'}>
                <Image src={'/images/menu/additional/fish-mini.png'}
                       alt='fish'
                       fill
                       style={{objectFit:"contain"}} />
            </GalaryImgWrapper>


            <GalaryImgWrapper id='fish2' position={['63%','7%']} width={'26%'} height={'60%'}>
                <Image src={'/images/menu/additional/fish-mini.png'}
                       alt='pig'
                       fill
                       style={{objectFit:"contain"}} />
            </GalaryImgWrapper>
            <GalaryImgWrapper id='pig2' position={['63%','61%']} width={'22%'} height={'65%'}>
                <Image src={'/images/menu/additional/pig-mini.png'}
                       alt='fish'
                       fill
                       style={{objectFit:"contain"}} />
            </GalaryImgWrapper>
            {/*<AddMenuGalary alignContent='flex-end' alignSelf='flex-end'>
                {galary.map((item) =>
                    <GalaryImgWrapper>
                        <Image src={'/images/menu/additional/' + item.photo + '.jpg'}
                               alt={item.alt}
                               fill
                               style={{objectFit:"cover"}} />
                    </GalaryImgWrapper>)}
            </AddMenuGalary>

            <AddMenuGalary wrap='wrap-reverse'>
                {galary.map((item) =>
                    <GalaryImgWrapper>
                        <Image src={'/images/menu/additional/' + item.photo + '.jpg'}
                               alt={item.alt}
                               fill
                               style={{objectFit:"cover"}} />
                    </GalaryImgWrapper>)}
            </AddMenuGalary>*/}
        </AddMenuContent>
    );
};

export default AdditionalMenu;