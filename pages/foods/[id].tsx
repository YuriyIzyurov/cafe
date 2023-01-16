import {useRouter} from "next/router";

export default function User({user}) {
    const {query} = useRouter()

    return (
        <div>
            <h1>Еда с id {user.id}, name {user.name}</h1>
        </div>
    )
}
export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: {user}
    }
}