import React, { useState } from "react"
import { useDispatch }  from "react-redux"
import { filterCountriesByContinent} from "../../../redux/actions"
import style from "./Selects.module.css"

const Continents = () => {

    const dispatch = useDispatch()
    const [currentPage,setCurrentPage] = useState(1)

    const handlerContinent = (event) => {
        dispatch(filterCountriesByContinent(event.target.value))
        setCurrentPage(1)
    }

    return(
        <select className={style.selectContinent} onChange={handlerContinent}>
            <option value="All Continents">All Continents</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    )
}

export default Continents