import React, { useState } from "react"
import { useDispatch }  from "react-redux"
import { filterCountriesByContinent, alphabeticOrder, populationOrder, stateFilter} from "../../redux/actions"
import style from "./Filters.module.css"

const Filters = () => {
    const dispatch = useDispatch()
    const [currentPage,setCurrentPage] = useState(1)

    const handlerContinent = (event) => {
        
        dispatch(filterCountriesByContinent(event.target.value))
        setCurrentPage(1)
    }

    const handlerAlphabetic = (event) => {

        dispatch(alphabeticOrder(event.target.value))   
        setCurrentPage(1) 
    }

    const handlePopulation = (event) => {

        dispatch(populationOrder(event.target.value))
        setCurrentPage(1)
    }

    return(
        <div className={style.filters}>

            <select onChange={handlerContinent} className={style.continents}>
                <option value="All Continents">All Continents</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>

            <select onChange={handlerAlphabetic} className={style.alphabetic}>
                <option value="Alphabetic Order">Alphabetic Order</option>
                <option value="from A to Z">from A to Z</option>
                <option value="from Z to A">from Z to A</option>
            </select>

            <select onChange={handlePopulation} className={style.population}>
                <option value="Population Order">Population Order</option>
                <option value="Ascendent">from (↑) to (↓)</option>
                <option value="Descendent">from (↓) to (↑)</option>
            </select>

        </div>
    )
}

export default Filters