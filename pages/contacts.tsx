import MainContainer from "../components/MainContainer";

const Contacts = ({users}) => {

    return (
        <MainContainer keywords={'контакты'}>
            <div>Контакты</div>
        </MainContainer>
    );
};

export default Contacts;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
        props: {users}
    }
}