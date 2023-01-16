import MainContainer from "../components/MainContainer";

const Rooms = ({users}) => {

    return (
        <MainContainer keywords={'залы, фотографии'}>
            <div>Залы</div>
        </MainContainer>
    );
};

export default Rooms;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
        props: {users}
    }
}