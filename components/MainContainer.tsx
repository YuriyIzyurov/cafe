import Head from "next/head";
import A from "./A";

const MainContainer = ({children, keywords = ''}) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="description" content="Кафе У Кузьмича официальный сайт"/>
                <meta name="keywords" content={'кафе, иваново, у кузьмича, ' + keywords}/>
                <title>Кафе "У Кузьмича"</title>
            </Head>
            <div>
                <h1>Главная страница</h1>
                <A href={'/'} text='Главная'/>
                <A href={'/menu'} text='Меню'/>
                <A href={'/services'} text='Услуги'/>
                <A href={'/rooms'} text='Залы'/>
                <A href={'/reviews'} text='Отзывы'/>
                <A href={'/contacts'} text='Контакты'/>
            </div>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;