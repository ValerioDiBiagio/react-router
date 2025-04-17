import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <h1>La pagina che cercavi non esiste</h1>
            <Link to='/'>'Torna alla Hompage'</Link>
        </>
    )

}