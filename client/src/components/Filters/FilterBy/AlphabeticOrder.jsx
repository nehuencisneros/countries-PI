import React, { useState } from "react"
import { useDispatch }  from "react-redux"
import { alphabeticOrder} from "../../../redux/actions"

const AlphabeticOrder = () => {

    const dispatch = useDispatch()
    const [currentPage,setCurrentPage] = useState(1)

    const handlerAlphabetic = (event) => {
        dispatch(alphabeticOrder(event.target.value))   
        setCurrentPage(1) 
    }

    return(
        <select onChange={handlerAlphabetic}>
            <option value="Alphabetic Order">Alphabetic Order</option>
            <option value="from A to Z">from A to Z</option>
            <option value="from Z to A">from Z to A</option>
        </select>
    )
}

export default AlphabeticOrder