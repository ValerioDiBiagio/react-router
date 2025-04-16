import axios from "axios"
import { useEffect, useState } from "react"

export default function ListaPost() {

    const endpoint = ' https://jsonplaceholder.typicode.com/posts'

    const [postList, setPostList] = useState([]);

    useEffect(() => {
        axios.get(endpoint)
            .then(res => setPostList(res.data))
            .catch(err => {
                alert('Indirizzo errato')
            })
    }, [])

    return (
        <section>
            <h2>Lista dei post</h2>
            <ul>
                {postList.map(post =>
                    <li key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </li>
                )}
            </ul>
        </section>
    )
}