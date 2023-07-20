import React, { useDispatch, useSelector } from "react-redux";
import { getAllActivities, getCountryById } from "../../redux/actions";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import style from "./Detail.module.css"
import { Link } from "react-router-dom";

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

    const form = [{"name": "Add activity"},{"name": "Add activity"},{"name": "Add activity"},{"name": "Add activity"}]
    
    activityCountry.forEach(e => { form.shift()})

    console.log(form)
    return (
        <div>
            <NavBar></NavBar>
                <div className={style.allContainer}>
                    { state.country !== "por favor igrese un id de 3 caracteres" ?
                        <div className={style.detailContainer}>
                            <div className={style.flagConteiner}>
                                <h2>{state.country.id}</h2>
                                <img className={style.flag} src={state.country.flag} alt={state.country.name}/>
                                <h2>Name: {state.country.name}</h2>
                                <h3>Capital: {state.country.capital}</h3>
                            </div>
                            <h3>Continent: {state.country.continent}</h3>
                            <h3>Subregion: {state.country.subregion}</h3>
                            <h4>Area: {state.country.area}</h4>
                            <h4>Population: {state.country.population}</h4>
                        </div>
                        :
                        <div>
                            <h1 className={style.notFoundCountry}>Country not found, please, search another country</h1>
                        </div>
                    }
                    <div className={style.activityContainer}>
                        <div className={style.titleContainerActivities}>
                            <h2 className={style.titleActivities}>Activities</h2>
                        </div>

                                {activityCountry.length > 0 ? <div className={style.activityDetail}> 
                                    {activityCountry.map(actividad => {
                                            return(
                                                <div className={style.container} key={actividad.id}>
                                                    <h3 className={style.title}>Activity</h3>
                                                    <h5>Name: "{actividad.name}"</h5>
                                                    <h5>Duration: {actividad.duration} hs</h5>
                                                    <h5>Difficulty:  {actividad.difficulty}</h5>
                                                    <h5>Season: {actividad.season}</h5>
                                                </div>
                                                
                                            )                          
                                        })
                                    }
                                    {form.map((element, index) => {
                                        return (
                                            <div className={style.containerAct} key={index}>
                                                <Link to={`/form/${state.country.name}`} style={{ textDecoration: 'none' }}>
                                                    <p className={style.add}>{element.name} +</p>
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </div>
                                :
                                <div className={style.activityDetail}>
                                    {form.map((element, index) => {
                                        return (
                                            <div className={style.containerAct} key={index}>
                                                <Link to={`/form/${state.country.name}`} style={{ textDecoration: 'none' }}>
                                                    <p className={style.add}>{element.name} +</p>
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </div> 
                            }
                    </div>
                </div>
        </div>
    )
}
export default Detail;
