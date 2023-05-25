import React from "react";
import style from "./Landing.module.css"
import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
        <div>
            <div className={style.landingImage}>
                <Link to="/home" className={style.button}>
                    <h1>WELCOME</h1>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;