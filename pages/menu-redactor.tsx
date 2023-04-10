import { FC } from "react";
import {MenuService} from "../services/menu.service";
import { DishSpecification, DrinksSpecification } from "../utility/types";
import MenuRedactor from "../components/MenuRedactorPage";
import {useTypedSelector} from "../hooks/useTypedSelector";
import { UnauthorizedMessage } from "../components/MenuRedactorPage/MenuRedactorStyles";

type PropsType = {
    data: (DishSpecification|DrinksSpecification)[]
}
const Redactor:FC<PropsType> = ({data}) => {
    const {user} = useTypedSelector(state => state)

    if(!user.user) return <UnauthorizedMessage><span>Вы не авторизованы</span></UnauthorizedMessage>
    return (
        <MenuRedactor menu={data}/>
    );
};

export default Redactor;

export async function getStaticProps(context) {

    try {
        const data:(DishSpecification|DrinksSpecification)[] = await MenuService.getMenu()
        return {
            props: {data}, revalidate: 10
        }

    } catch (e) {
        console.log("Невозможно загрузить меню", e)
        return {notFound: true};
    }
}