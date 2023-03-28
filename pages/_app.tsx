import '../styles/global.scss'
import {Provider} from "react-redux";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {store} from "../store/store";
import {PTSans, pierre, mons} from "../styles/fonts/fonts";
import type { AppProps } from 'next/app'
import { useState } from 'react';



export default function MyApp({ Component, pageProps } : AppProps) : JSX.Element {

    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <style jsx global>{`
                :root {
                  --font-base: ${mons.style.fontFamily};
                  --font-caligraphic: ${pierre.style.fontFamily};
                  --snap-align: start;
                }`}
                </style>
                <Component {...pageProps} />
            </Provider>
            <ReactQueryDevtools/>
        </QueryClientProvider>
        )
}