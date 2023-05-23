import { Link } from "react-router-dom";
import style from "./NavBar.module.css"

const NavBar = () => {
    return (
        <div className={style.mainContainer}>
            
            <Link to="/home"> 
                <button className={style.botonHome}>Home</button>
            </Link>
            <Link to="/activities">
                <button className={style.botonActivities}>Activities</button>
            </Link>
            <Link to="/form">
                <button className={style.botonForm}>Create activities</button>
            </Link>

        </div>
    )
}

export default NavBar;