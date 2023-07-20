import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivity, getAllCountries } from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";
import style from "./Form.module.css"
import validation from "./validations";
import { useLocation, useHistory } from "react-router-dom";

const Form = () => {
    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.allCountries);
    const history = useHistory()
    const location = useLocation()
    const idRoute = location.pathname.split("/")
    const idCountry = idRoute[2]

    const [errors, setErrors] = useState({})

    const [newActivity, setNewActivity] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season:"",
        country: [],
        flag: ""
    })

    console.log(newActivity.country[0]);

    useEffect(() => {
        dispatch(getAllCountries())
        if(idCountry){
            setNewActivity({
                ...newActivity,
                country: [...newActivity.country, idCountry]
            })  
        }
    },[dispatch])

    const disabled = (newActivity.name === "" || newActivity.difficulty === "" || newActivity.duration === "" || newActivity.season === "" || newActivity.country.length === 0)

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
        const countryName = event.target.value
        
        if(newActivity.country.includes(countryName)){
            return alert("The country is already selected")
        } else {
            setErrors(validation({
                ...newActivity,
                    country: countryName
            }))
            setNewActivity({
                ...newActivity,
                country: [...newActivity.country, countryName]
            })            
        }
    }

    const deleteCountry = (event) => {

        setNewActivity({
            ...newActivity,
            country: newActivity.country.filter((country) => country !== event.target.value)
        })
        setErrors(validation({
            ...newActivity,
            country: newActivity.country.filter((country) => country !== event.target.value)
        }))
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
        <div>
            <NavBar/>
            <div className={style.form}>
                <div className={style.formContainer}>
                

                    <div className={style.titleFormContainer}>
                        <h2 className={style.titleForm}>Activity options</h2>
                    </div>

                    <div className={style.selectContainer}>
                        
                        <label>Activity name: </label>
                        <input className={style.selects}
                            placeholder="Activity..."
                            type="text"
                            value={newActivity.name}
                            onChange={handlerChange}
                            name="name"></input>
                        {errors.name && <p className={style.errors}>{errors.name}</p>}
                        
                        <label>Activity difficulty:</label>
                        <select className={style.selects} name="difficulty" onChange={handlerChange}>
                            <option value="">Select difficulty...</option>
                            <option value="1">⭐ ☆ ☆ ☆ ☆</option>
                            <option value="2">⭐⭐ ☆ ☆ ☆</option>
                            <option value="3">⭐⭐⭐ ☆ ☆</option>
                            <option value="4">⭐⭐⭐⭐ ☆</option>
                            <option value="5">⭐⭐⭐⭐⭐</option>
                        </select>
                        {errors.difficulty && <p className={style.errors}>{errors.difficulty}</p>}
                        
                        <label>Activity duration:</label>
                        <select className={style.selects} name="duration" onChange={handlerChange}>
                            <option value="">Select duration...</option>
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
                        
                        <label>Season:</label>
                        <select className={style.selects} name="season" onChange={handlerChange}>
                            <option value="">Select season...</option>
                            <option value="Summer">Summer</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                        </select>
                        {errors.season && <p className={style.errors}>{errors.season}</p>}

                        {newActivity.country.length !== 5  && 
                        <div className={style.countriesSelect}>    
                        <label style={{marginInlineStart: 0}}>Country:</label>
                            <select className={style.selects} onChange={handlerCountrySelect} value="country">
                                <option value="">Select country...</option>
                                {allCountries?.map(country => {
                                    return(
                                        <option value={country.value} key={country.id}>
                                            {country.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        }
                        {errors.country && <p className={style.errors}>{errors.country}</p>}

                        {newActivity.country.length > 0 && newActivity.country.length < 4 &&
                            <p className={style.p}>You can add {5 - newActivity.country.length } countries more</p>
                        }
                        {newActivity.country.length === 4  && 
                            <p className={style.p}>You can add 1 country </p>
                        }
                    </div>

                </div>
                {newActivity.country.length > 0 && <form onSubmit={handlerSubmit} className={style.countriesContainer} >
                    <div className={style.titleCountriesContainer}>
                        <h2 className={style.titleCountries}>Countries Selected</h2>
                    </div>
                    <div className={style.countries}>
                    {newActivity.country.map((country) => {
                        return(
                                    <div className={style.country} key={country}>
                                        <h4>-  {country}</h4>
                                        <button onClick={deleteCountry} value={country} className={style.delete}> X </button>
                                    </div>
                            )
                        }
                        )}
                        {newActivity.country.length > 0 && newActivity.country.length < 4 &&
                            <p className={style.p}>You can add {5 - newActivity.country.length } countries more</p>
                        }
                        {newActivity.country.length === 4  && 
                            <p className={style.p}>You can add 1 country </p>
                        }
                        {newActivity.country.length === 5  &&
                            <p className={style.p}>You can't add more countries</p>
                        }
                        </div>
                        <div className={style.buttonContainer}>
                            <button className={style.button} disabled={disabled} type="submit">Create activity</button>
                        </div>
                    </form>
                }
            </div>
        </div>
    )
}

export default Form;
