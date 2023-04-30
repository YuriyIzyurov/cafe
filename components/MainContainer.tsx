import Head from "next/head";
import {META_DESCRIPTION, META_KEYWORDS, META_TITLE} from "../utility/constants";

const MainContainer = ({children, keywords = ''}) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, shrink-to-fit=yes"/>
                <meta name="description" content={META_DESCRIPTION}/>
                <meta name="keywords" content={META_KEYWORDS + keywords}/>
                <title>{META_TITLE}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="shortcut icon" href="images/logos/favicon.ico" />
            </Head>
            <main>
              {children}
            </main>
        </>
    );
};

export default MainContainer;
