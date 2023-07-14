import { Link, useLocation } from "react-router-dom";
import style from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar"

const NavBar = () => {

    const location = useLocation()

    return (
        <nav className={style.mainContainer}>

            <Link to="/home">
                <button className={style.botonHome}>Home</button>
            </Link>
            {
                location.pathname === ("/home") && <SearchBar/>
            }
            <Link to="/form">
                <button className={style.botonForm}>Create activities</button>
            </Link>
            <Link to="/">
                <button className={style.botonHome}>Log out</button>
            </Link>

        </nav>
    )
}

export default NavBar;