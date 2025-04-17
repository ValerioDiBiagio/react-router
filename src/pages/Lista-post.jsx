import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

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
            <h2>Posts</h2>
            <ul>
                {postList.map(post =>
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <Link to={`/lista-post/${post.id}`}>'Clicca qui per il post completo'</Link>
                    </li>
                )}
            </ul>
        </section>
    )
}