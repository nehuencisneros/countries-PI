import React from "react";
import { Link } from "react-router-dom";



const LandingPage = () => {
    return (
        <>
            <h1>estamos en el landing</h1>
            <Link to='/home'>
                <button>ingresar</button>
            </Link>
        </>
    )
}

export default LandingPage;