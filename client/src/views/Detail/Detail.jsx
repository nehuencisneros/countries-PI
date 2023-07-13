import React, { useDispatch, useSelector } from "react-redux";
import { getAllActivities, getCountryById } from "../../redux/actions";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import style from "./Detail.module.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
                            <h1>{state.country.id}</h1>
                            <img className={style.flag} src={state.country.flag} alt={state.country.name}/>
                            <h1>Name: {state.country.name}</h1>
                            <h2>Capital: {state.country.capital}</h2>
                            <h2>Continent: {state.country.continent}</h2>
                            <h2>Subregion: {state.country.subregion}</h2>
                            <h3>Area: {state.country.area}</h3>
                            <h3>Population: {state.country.population}</h3>
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
                                                    <h2 className={style.title}>Activity</h2>
                                                    <h4>Name: "{actividad.name}"</h4>
                                                    <h4>Duration: {actividad.duration} hs</h4>
                                                    <h4>Difficulty:  {actividad.difficulty}</h4>
                                                    <h4>Season: {actividad.season}</h4>
                                                </div>
                                                
                                            )                          
                                        })
                                    }
                                    {form.map((element, index) => {
                                        return (
                                            <div className={style.container} key={index}>
                                                <Link to="/form" style={{ textDecoration: 'none' }}>
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
                                            <div className={style.container} key={index}>
                                                <Link to="/form" style={{ textDecoration: 'none' }}>
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
