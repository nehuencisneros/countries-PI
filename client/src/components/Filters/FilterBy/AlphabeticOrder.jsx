import React, { useState } from "react"
import { useDispatch }  from "react-redux"
import { alphabeticOrder} from "../../../redux/actions"
import style from "./Selects.module.css"

const AlphabeticOrder = () => {

    const dispatch = useDispatch()
    const [_currentPage,setCurrentPage] = useState(1)

    const values = ["from A to Z", "from Z to A"]

    const handlerAlphabetic = (event) => {
        dispatch(alphabeticOrder(event.target.value))   
        setCurrentPage(1) 
    }

    return(
        <select className={style.selectAlphaPopu} onChange={handlerAlphabetic}>
            <option>Alphabetic Order</option>
                {values?.map((element, index) => {
                    return(
                        <option value={element} key={index}>
                            {element}
                        </option>
                    )
                })}
        </select>
    )
}

export default AlphabeticOrder;