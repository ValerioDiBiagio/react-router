import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"


export default function DefaultLayout() {
    return (
        <>
            <header>
                <h1>React Blog Pages</h1>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}