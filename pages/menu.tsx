import MainContainer from "../components/MainContainer";

const Menu = ({users}) => {

    return (
        <MainContainer keywords={'меню'}>
            <div>Меню</div>
        </MainContainer>
    );
};

export default Menu;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
        props: {users}
    }
}