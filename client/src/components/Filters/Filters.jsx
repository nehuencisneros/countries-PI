import React from "react"
import style from "./Filters.module.css"
import PopulationOrder from "./FilterBy/PopulationOrder"
import AlphabeticOrder from "./FilterBy/AlphabeticOrder"
import Continents from "./FilterBy/Continents"
import Activities from "./FilterBy/Activities"

const Filters = () => {
    
    return(
            <div className={style.filters}>
                <div className={style.continents}>
                    <Continents/>
                </div>

                <div className={style.activities}>
                    <Activities/>
                </div>

                <div className={style.orders}> 
                    <AlphabeticOrder/>
                    <PopulationOrder/>
                </div>
                
            </div>
    )
}

export default Filters