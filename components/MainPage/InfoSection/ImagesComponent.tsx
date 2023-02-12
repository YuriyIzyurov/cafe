import {
    Column2,
    ImgWrap,
    ImgWrap2,
    ImgWrap3,
    ImgWrap4,
    ImgWrap5,
    ImgWrap6,
    ImgWrap7
} from "./InfoSectionStyles";
import dish from '../../../public/images/animated-dish-test2.png'
import solt from '../../../public/images/solt-resized.png'
import spoon from '../../../public/images/spoon-resized.png'
import pepper from '../../../public/images/pepper-resized.png'
import salad from '../../../public/images/salad-resized.png'
import salad2 from '../../../public/images/salad2-resized.png'
import tomatos from '../../../public/images/tomatos-resized.png'

import Image from "next/image";

const ImagesComponent = ({alt}) => {
    return (
        <Column2>
            <ImgWrap3 id='solt'>
                <Image src={solt} alt={alt} fill style={{objectFit:"contain"}}  />
            </ImgWrap3>
            <ImgWrap6 id='spoon'>
                <Image src={spoon} alt={alt} fill style={{objectFit:"contain"}} />
            </ImgWrap6>
            <ImgWrap4 id='pepper'>
                <Image src={pepper} alt={alt} fill style={{objectFit:"contain"}}/>
            </ImgWrap4>
            <ImgWrap2 id='salad'>
                <Image src={salad} alt={alt} fill style={{objectFit:"contain"}}/>
            </ImgWrap2>
            <ImgWrap7 id='salad2'>
                <Image src={salad2} alt={alt} fill style={{objectFit:"contain"}}/>
            </ImgWrap7>
            <ImgWrap5 id='tomatos'>
                <Image src={tomatos} alt={alt} fill style={{objectFit:"contain"}}/>
            </ImgWrap5>
            <ImgWrap>
                <Image id='dish' src={dish} alt={alt} fill style={{objectFit:"contain"}} />
            </ImgWrap>
        </Column2>
    );
};

export default ImagesComponent;