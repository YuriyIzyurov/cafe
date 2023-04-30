import {PT_Sans, Montserrat} from "@next/font/google";
import Pierre from '@next/font/local';

export const PTSans = PT_Sans({subsets: ['cyrillic', 'latin'],weight: ['400'], display: 'swap'})
export const mons = Montserrat({subsets: ['cyrillic', 'latin'],weight: ['400'], display: 'swap'})
export const pierre = Pierre({
    src: './Pierre.ttf',
    display: 'swap'
});
