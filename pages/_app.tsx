import '../styles/global.scss'
import {Provider} from "react-redux";
import {store} from "../store/store";
import {PTSans, pierre} from "../styles/fonts/fonts";
import type { AppProps } from 'next/app'




export default function MyApp({ Component, pageProps } : AppProps) : JSX.Element {
    return (
        <Provider store={store}>
            <style jsx global>{`
                :root {
                  --font-base: ${PTSans.style.fontFamily};
                  --font-caligraphic: ${pierre.style.fontFamily};
                }`}
            </style>
            <Component {...pageProps} />
        </Provider>
        )
}