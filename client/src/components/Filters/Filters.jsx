import React, {useState} from "react"
import { useDispatch } from "react-redux"
import {filterCountriesByContinent} from "../../redux/actions"
import style from "./Filters.module.css"

const Filters = () => {
    
    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(1)
    //const [countriesPage, setCountriesPage] = useState(12)

    const handlerContinent = (event) => {
        console.log(event.target.name)
        dispatch(filterCountriesByContinent(event.target.name))
        setCurrentPage(1)
        //setCountriesPage(12)
    }

    // const handlerContinent = (event) => {
    //     console.log(event.target.value)
    //     dispatch(filterCountriesByContinent(event.target.value))
    //     setCurrentPage(1)
    // }

    return(
        <div className={style.filters}>
            {/* <select onChange={handlerContinent}>
                <option value="All Continents">All Continents</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select> */}

            <label>
                <input type="checkbox"
                    name="All Continents"
                    onChange={handlerContinent}/>
            All Continents</label>

            <label> 
                <input type="checkbox"
                    name="Europa"
                    onChange={handlerContinent}/>
                europa</label>

            <label>
                <input type="checkbox"
                    name="Africa"
                    onChange={handlerContinent}/>
            Africa</label>

            <label>
                <input type="checkbox"
                    name="America"
                    onChange={handlerContinent}/>
            America</label>

            <label>
                <input type="checkbox"
                    name="Asia"
                    onChange={handlerContinent}/>
            Asia</label>

            <label>
                <input type="checkbox"
                    name="Oceania"
                    
                    onChange={handlerContinent}/>
            Oceania</label>




        </div>
    )
}

export default Filters



            

