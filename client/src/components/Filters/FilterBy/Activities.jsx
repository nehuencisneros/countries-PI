import React, { useEffect, useState } from "react"
import { useDispatch, useSelector }  from "react-redux"
import { filterCountriesByActivities, getAllActivities, getAllCountries} from "../../../redux/actions"
import style from "./Selects.module.css"

const Activities = () => {
    const dispatch = useDispatch()
    const [_currentPage,setCurrentPage] = useState(1)
    const dependencia = useSelector((state) => state)

    useEffect(() => {
        dispatch(getAllActivities())
        dispatch(getAllCountries(dependencia.countries))
    },[dispatch])

    let values = dependencia.allActivities

    values = values.map(element => element.name)

    const onlyValues = [...new Set(values)]

    const handlerActivity = (event) => {
        dispatch(filterCountriesByActivities(event.target.value))
        setCurrentPage(1)
    }

    return(
        <select className={style.selects} onChange={handlerActivity}>
            <option className={style.option} value="Select activity">Select activity</option>
            <option className={style.option} value="All activities">All activities</option>
                {onlyValues?.map((activity,index) => {
                    return(
                        <option className={style.option} value={activity} key={index}>
                            {activity}
                        </option>
                    )
                })}
        </select>
    )
}
export default Activities;
