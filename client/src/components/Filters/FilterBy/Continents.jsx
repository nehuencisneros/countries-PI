import React, { useState } from "react"
import { useDispatch }  from "react-redux"
import { filterCountriesByContinent} from "../../../redux/actions"
import style from "./Selects.module.css"

const Continents = () => {
    const dispatch = useDispatch()
    const [_currentPage,setCurrentPage] = useState(1)

    const values = ["All Continents", "Africa", "Americas", "Asia", "Europe", "Oceania"]

    const handlerContinent = (event) => {
        dispatch(filterCountriesByContinent(event.target.value))
        setCurrentPage(1)
    }

    return(
        <select className={style.selects} onChange={handlerContinent}>
            {values?.map((element,index) => {
                return(
                    <option value={element} key={index}>
                        {element}
                    </option>
                )
            })}
        </select>
    )
}

export default Continents