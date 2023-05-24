import { useDispatch, useSelector } from "react-redux";
import { getCountryById } from "../../redux/actions";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import style from "./Detail.module.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Detail = () => {
    const country = useSelector((state) => state.country);
    const location = useLocation()
    const dispatch = useDispatch()

    const idRoute = location.pathname.split("/")
    const idCountry = idRoute[2]
    
    useEffect(() => {
        dispatch(getCountryById(idCountry))
    },[dispatch])

    return (
        <div>
            <NavBar></NavBar>

            <div className={style.detailContainer}>
                <img className={style.flag} src={country.flag} alt={country.name}/>
                <h1>Name: {country.name}</h1>
                <h2>Capital: {country.capital}</h2>
                <h3>Continent: {country.continent}</h3>
                <h4>Subregion: {country.subregion}</h4>

                
                
            </div>
        </div>
    )
}

export default Detail;