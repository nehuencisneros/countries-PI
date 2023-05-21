import React, { useState } from "react"
import { useDispatch }  from "react-redux"
import { populationOrder} from "../../../redux/actions"

const PopulationOrder = () => {
    
    const dispatch = useDispatch()
    const [currentPage,setCurrentPage] = useState(1)

    const handlePopulation = (event) => {
        dispatch(populationOrder(event.target.value))
        setCurrentPage(1)
    }

    return(
        <select onChange={handlePopulation}>
            <option value="Population Order">Population Order</option>
            <option value="Ascendent">from (↑) to (↓)</option>
            <option value="Descendent">from (↓) to (↑)</option>
        </select>
    )
}

export default PopulationOrder