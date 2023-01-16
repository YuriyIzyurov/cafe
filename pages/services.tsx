import MainContainer from "../components/MainContainer";

const Services = ({users}) => {

    return (
        <MainContainer keywords={'услуги'}>
            <div>Сервисы</div>
        </MainContainer>
    );
};

export default Services;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
        props: {users}
    }
}