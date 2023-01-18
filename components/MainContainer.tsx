import Head from "next/head";
import A from "./A";
import s from '../styles/header.module.scss'

const MainContainer = ({children, keywords = ''}) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="description" content="Кафе У Кузьмича официальный сайт"/>
                <meta name="keywords" content={'кафе, иваново, у кузьмича, ' + keywords}/>
                <title>Кафе "У Кузьмича"</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
             {/*   <link href="https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@700&display=swap" rel="stylesheet"/>*/}
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" rel="stylesheet"/>
            </Head>
            <main>
              {children}
            </main>
        </>
    );
};

export default MainContainer;