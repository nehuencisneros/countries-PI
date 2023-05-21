import React from "react"
import style from "./Filters.module.css"
import PopulationOrder from "./FilterBy/PopulationOrder"
import AlphabeticOrder from "./FilterBy/AlphabeticOrder"
import Continents from "./FilterBy/Continents"

const Filters = () => {
    
    return(
            <div className={style.filters}>

                <div className={style.continents}>
                    <Continents/>
                </div>

                <div className={style.alphabetic}>
                    <AlphabeticOrder/>
                </div>

                <div className={style.population}>
                    <PopulationOrder/>
                </div>
                
            </div>
    )
}

export default Filters