import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivity, getAllCountries } from "../../redux/actions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../../components/NavBar/NavBar";

const Form = () => {
    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.allCountries);
    const history = useHistory()

    const [newActivity, setNewActivity] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season:"",
        country: []
    })

    useEffect(() => {
        dispatch(getAllCountries())
    },[dispatch])

    const handlerChange = (event) => {
        const activityProperty = event.target.name;
        const value = event.target.value;

        setNewActivity({
            ...newActivity, 
            [activityProperty]:value})
    }

    const handlerSubmit = (event) => {
        event.preventDefault()
        dispatch(createActivity(newActivity))
        history.push("/home")
    }

    const handlerCountrySelect = (event) => {
        setNewActivity({
            ...newActivity,
            country: [...newActivity.country, event.target.value]
        })
    }

    return (
        <div>
            <NavBar/>
            <form onSubmit={handlerSubmit}>
                <div>
                    <label>Activity name: </label>
                    <input type="text" 
                    value={newActivity.name} 
                    onChange={handlerChange}
                    name="name"></input>
                </div>

                <div>
                    <label>Activity difficulty: </label>
                    <input type="text" 
                    value={newActivity.difficulty} 
                    onChange={handlerChange}
                    name="difficulty"></input>
                </div>

                <div>
                    <label>duracion: </label>
                    <input type="text" 
                    value={newActivity.duration} 
                    onChange={handlerChange}
                    name="duration"></input>
                </div>

                <div>
                    <label>estacion:  </label>
                    <input type="text" 
                    value={newActivity.season} 
                    onChange={handlerChange}
                    name="season"></input>
                </div>

                <div>
                    <select onChange={handlerCountrySelect} value="Country">
                        <option>Country</option>
                        {allCountries?.map(country => {
                            return(
                                <option value={country.value} key={country.id}>
                                    {country.name}
                                </option>
                            )
                        })}
                    </select>
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

                <button type="submit">Create activity</button>
            </form>
        </div>
    )
}

export default Form;