import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const endpoint = 'https://jsonplaceholder.typicode.com/posts'

export default function SinglePost() {

    const { id } = useParams();

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
    }, [])

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
        </section>
    )
}