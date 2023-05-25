import React, { useEffect, useState } from "react"
import { useDispatch, useSelector }  from "react-redux"
import { filterCountriesByActivities, getAllActivities, getAllCountries} from "../../../redux/actions"
import style from "./Selects.module.css"

const Activities = () => {
    const dispatch = useDispatch()
    const [currentPage,setCurrentPage] = useState(1)
    const dependencia = useSelector((state) => state)

    useEffect(() => {
        dispatch(getAllActivities())
        dispatch(getAllCountries(dependencia.countries))
        console.log("entre aca")
    },[dispatch])

    const values = dependencia.allActivities

    const handlerActivity = (event) => {
        dispatch(filterCountriesByActivities(event.target.value))
        setCurrentPage(1)
    }

    return(
        <select className={style.selects} onChange={handlerActivity}>
            <option value="Select activity">Select activity</option>
            <option value="All activities">All activities</option>
            {values?.map((activity,index) => {
                return(
                    <option value={activity.name} key={index}>
                        {activity.name}
                    </option>
                )
            })}
        </select>
    )
}

export default Activities;
