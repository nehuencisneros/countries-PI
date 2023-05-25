import React, { useDispatch, useSelector } from "react-redux";
import { getAllActivities, getCountryById } from "../../redux/actions";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import style from "./Detail.module.css"

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

    return (
        <div>
            <NavBar></NavBar>
            <div className={style.allContainer}>
                    
                    { state.country !== "por favor igrese un id de 3 caracteres" ?
                        
                        <div className={style.detailContainer}>
                            <h1>{state.country.id}</h1>
                            <img className={style.flag} src={state.country.flag} alt={state.country.name}/>
                            <h1>Name: {state.country.name}</h1>
                            <h1>Capital: {state.country.capital}</h1>
                            <h3>Continent: {state.country.continent}</h3>
                            <h3>Subregion: {state.country.subregion}</h3>
                            <h3>Area: {state.country.area}</h3>
                        </div>
                        :
                        <div>
                            <h1 className={style.notFoundCountry}>Country not found, please, search another country</h1>
                        </div>
                    }
                    { activityCountry.length > 0 && <div className={style.activityContainer}> 
                        {activityCountry.map(actividad => {
                            return(
                                <div className={style.container} key={actividad.id}>
                                    <h1 className={style.title}>Activity</h1>
                                    <h2>Name: "{actividad.name}"</h2>
                                    <h2>Duration: {actividad.duration} hs</h2>
                                    <h2>Difficulty:  {actividad.difficulty}</h2>
                                    <h2>Season: {actividad.season}</h2>

                                </div>
                            )}
                        )}
                        </div>
                    }    
            
            </div>
        </div>
    )
}

export default Detail;