import dynamic from "next/dynamic";

export const DynamicFooter = dynamic(() => import("../components/MainPage/Footer"), {
    //loading: () => <Loading/>,
    ssr:false
})
export const DynamicSidebar = dynamic(() => import("../components/Sidebar"), {
    //loading: () => <Loading/>,
    ssr:false
})
export const DynamicHistorySection = dynamic(() => import("../components/MainPage/HistorySection"), {
    ssr:false
})
export const DynamicServicesSection = dynamic(() => import("../components/MainPage/Services"), {
    //loading: () => <Loading/>,
    ssr:false
})
export const DynamicInfoSection = dynamic(() => import("../components/MainPage/InfoSection"), {
    // loading: () => <Loading/>,
    ssr:false
})
