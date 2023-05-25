import React, { useDispatch, useSelector } from "react-redux";
import { getAllActivities, getCountryById, getCountryByName } from "../../redux/actions";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import style from "./Detail.module.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Activities from "../../components/Filters/FilterBy/Activities";


const Detail = () => {
    const state = useSelector((state) => state);
    const location = useLocation()
    const dispatch = useDispatch()

    const idRoute = location.pathname.split("/")
    const idCountry = idRoute[2]
    
    useEffect(() => {
        dispatch(getCountryById(idCountry))
        dispatch(getAllActivities())
    },[dispatch])

    const newArray = []
    
    state.allActivities.map(element => { 
                    if(element.countries.find(el => el.name === state.country.name)){
                        newArray.push(element.name) 
                    }})
    const activityCountry = []

    state.allActivities.map(actividad => {
        if(newArray.includes(actividad.name)){
            activityCountry.push(actividad)
        }
    })
    console.log(activityCountry)
    return (
        <div>
            <NavBar></NavBar>
            <div className={style.allContainer}>
            { state.country !== "por favor igrese un id de 3 caracteres" ?
                <div className={style.detailContainer}>
                    <img className={style.flag} src={state.country.flag} alt={state.country.name}/>
                    <h1>Name: {state.country.name}</h1>
                    <h2>Capital: {state.country.capital}</h2>
                    <h3>Continent: {state.country.continent}</h3>
                    <h4>Subregion: {state.country.subregion}</h4>
                </div>
                :
                <div>
                    <h1 className={style.notFoundCountry}>Country not found, please, search another country</h1>
                </div>
            }
            { activityCountry.length > 0 ? <div className={style.activityContainer}>
                {activityCountry.map(actividad => {
                    return(
                        <div className={style.container}>
                            <h1>{actividad.name}</h1>
                            <h1>{actividad.duration} hs</h1>
                            <h1>{actividad.season}</h1>
                            <h1>{actividad.difficulty}</h1>

                        </div>
                    )}
                )}
                </div>
                :
                <div className={style.notFoundActivity}>este pais no tiene actividades cargadas</div>
            }
            </div>
        </div>
    )
}

export default Detail;