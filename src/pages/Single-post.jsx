import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"

const endpoint = 'https://jsonplaceholder.typicode.com/posts'

export default function SinglePost() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [singlePost, setSinglePost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true);
        axios.get(`${endpoint}/${id}`)
            .then(res => {
                setSinglePost(res.data);

            })
            .catch(err => {
                console.error(err)
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [id])

    const parseId = parseInt(id);
    const prevPost = parseId - 1 >= 1 ? parseId - 1 : id;
    const nextPost = parseId + 1 <= 100 ? parseId + 1 : id;


    if (error) {
        return <div>Error...</div>
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <section>
            <h2>{singlePost.title}</h2>
            <p>{singlePost.body}</p>
            <button onClick={() => navigate(-1)}>Torna alla pagina precedente</button>
            <button disabled={id <= 1}> <Link to={`/lista-post/${prevPost}`} >Post precedente</Link></button>
            <button disabled={id >= 100}> <Link to={`/lista-post/${nextPost}`} >Post successivo</Link></button>
        </section>
    )
}