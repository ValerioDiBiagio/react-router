import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Homepage</NavLink></li>
                <li><NavLink to="/chi-siamo">About</NavLink></li>
                <li><NavLink to="/lista-post">Lista dei post</NavLink></li>
            </ul>
        </nav>
    )
}