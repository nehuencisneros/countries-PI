import { Link } from "react-router-dom";
import style from "./NavBar.module.css"

const NavBar = () => {
    return (
        <div className={style.mainContainer}>
            
            <Link to="/home">Home</Link>
            

            <Link to="/activities">Activities</Link>
            <Link to="/form">Create activities</Link>

        </div>
    )
}

export default NavBar;