import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivity, getAllCountries } from "../../redux/actions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../../components/NavBar/NavBar";
import style from "./Form.module.css"
import validation from "./validations";

const Form = () => {
    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.allCountries);
    const history = useHistory()

    const [errors, setErrors] = useState({})

    const [newActivity, setNewActivity] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season:"",
        country: [],
        flag: ""
    })

    useEffect(() => {
        dispatch(getAllCountries())
    },[dispatch])

    const handlerChange = (event) => {
        const activityProperty = event.target.name;
        const value = event.target.value;

        setErrors(validation({
            ...newActivity,
            [activityProperty]:value
        }))

        setNewActivity({
            ...newActivity, 
            [activityProperty]:value})
    }

    const handlerCountrySelect = (event) => {
        
        if(newActivity.country.includes(event.target.value)){
            return alert("The country is already selected")
        } else {
            setNewActivity({
                ...newActivity,
                country: [...newActivity.country, event.target.value]
            })
        }
    }

    const handlerSubmit = (event) => {
        event.preventDefault()

        if(newActivity.name === "" || newActivity.difficulty === "" || newActivity.duration === "" || newActivity.season === "" || newActivity.country.length === 0){
            return alert ("Please, complete the empty fields")
        }

        dispatch(createActivity(newActivity))
        alert ("Congratulations, the activity was succesfully created")

        setNewActivity({
            name: "",
            difficulty: "",
            duration: "",
            season:"",
            country: []
        })

        history.push("/home")
    }

    return (
        <div className={style.form}>
            <NavBar/>
            <div className={style.form}>
                <form onSubmit={handlerSubmit} className={style.formContainer}>
                    
                    <div>
                        <label>Activity name: </label>
                        <input className={style.selects} 
                        type="text" 
                        value={newActivity.name} 
                        onChange={handlerChange}
                        name="name"></input>
                        {errors.name && <p className={style.errors}>{errors.name}</p>}
                    </div>


                    <div>
                        <label>Activity difficulty:</label>
                        <select className={style.selects} name="difficulty" onChange={handlerChange}>
                            <option>Select difficulty</option>
                            <option value="1">⬛⬜⬜⬜⬜</option>
                            <option value="2">⬛⬛⬜⬜⬜</option>
                            <option value="3">⬛⬛⬛⬜⬜</option>
                            <option value="4">⬛⬛⬛⬛⬜</option>
                            <option value="5">⬛⬛⬛⬛⬛</option>
                        </select>
                        {errors.difficulty && <p className={style.errors}>{errors.difficulty}</p>}
                    </div>


                    <div>
                        <label>Activity duration:</label>
                        <select className={style.selects} name="duration" onChange={handlerChange}>
                            <option>Select duration</option>
                            <option value="1">1 hour</option>
                            <option value="2">2 hour</option>
                            <option value="3">3 hour</option>
                            <option value="4">4 hour</option>
                            <option value="5">5 hour</option>
                            <option value="6">6 hour</option>
                            <option value="7">7 hour</option>
                            <option value="8">8 hour</option>
                            <option value="9">9 hour</option>
                            <option value="10">10 hour</option>
                            <option value="11">11 hour</option>
                            <option value="12">12 hour</option>
                        </select>
                        {errors.duration && <p className={style.errors}>{errors.duration}</p>}
                    </div>

                    <div>
                    <label>Season:</label>
                        <select className={style.selects} name="season" onChange={handlerChange}>
                            <option>Select season:</option>
                            <option value="Summer">Summer</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                        </select>
                        {errors.season && <p className={style.errors}>{errors.season}</p>}
                    </div>

                    <div>
                    <label>Country:</label>
                        <select className={style.selects} onChange={handlerCountrySelect} value="country">
                            <option>Select country</option>
                            {allCountries?.map(country => {
                                return(
                                    <option value={country.value} key={country.id}>
                                        {country.name}
                                    </option>
                                )
                            })}
                            
                        </select>
                        {errors.country && <p className={style.errors}>{errors.country}</p>}
                        <ul>
                            {allCountries.name?.map((name, index) => {
                                return (
                                    <div key={index++}>
                                        <li key={name}>
                                            {name}
                                        </li>
                                    </div>
                                )
                            })}
                            
                        </ul>
                    </div>
                    {<p>{newActivity.country.length > 0 ? "country selected: " + newActivity.country.map(element => element) + "," + " " : ""}</p>}


                    <button className={style.button} type="submit">Create activity</button>
                </form>
            </div>
        </div>
    )
}

export default Form;