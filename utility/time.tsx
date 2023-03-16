import {format} from "date-fns";
import {FC} from "react";
import ruLocale from "date-fns/locale/ru";


export const GetMessageTime:FC<{date:string}> = ({date}) => {

    const parsedDate = Date.parse(date) + 1.08e+7
    return <>{format(parsedDate, "d MMM yyyy", { locale: ruLocale })}</>
}