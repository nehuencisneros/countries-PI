import { Link } from "react-router-dom";
import style from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
    return (
        <div className={style.mainContainer}>

            <Link to="/home">Home</Link>
            <SearchBar></SearchBar>
            <Link to="/form">Form</Link>
        </div>
    )
}

export default NavBar;