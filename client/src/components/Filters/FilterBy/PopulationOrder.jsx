import React, { useState } from "react"
import { useDispatch }  from "react-redux"
import { populationOrder} from "../../../redux/actions"
import style from "./Selects.module.css"

const PopulationOrder = () => {
    
    const dispatch = useDispatch()
    const [_currentPage,setCurrentPage] = useState(1)

    const handlePopulation = (event) => {
        dispatch(populationOrder(event.target.value))
        setCurrentPage(1)
    }

    return(
        <select className={style.selectAlphaPopu} onChange={handlePopulation}>
            <option value="Population Order">Population Order</option>
            <option value="Ascendent">from (↑) to (↓)</option>
            <option value="Descendent">from (↓) to (↑)</option>
        </select>
    )
}

export default PopulationOrder