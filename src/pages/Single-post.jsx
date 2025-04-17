import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const endpoint = 'https://jsonplaceholder.typicode.com/posts'

export default function SinglePost() {

    const { id } = useParams();

    const [singlePost, setSinglePost] = useState({});

    useEffect(() => {
        axios.get(`${endpoint}/${id}`)
            .then(res => setSinglePost(res.data))

    }, [])

    return (
        <section>
            <h2>{singlePost.title}</h2>
            <p>{singlePost.body}</p>
        </section>
    )
}