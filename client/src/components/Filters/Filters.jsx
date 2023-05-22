import React from "react"
import style from "./Filters.module.css"
import PopulationOrder from "./FilterBy/PopulationOrder"
import AlphabeticOrder from "./FilterBy/AlphabeticOrder"
import Continents from "./FilterBy/Continents"
import SearchBar from "../SearchBar/SearchBar"

const Filters = () => {
    
    return(
            <div className={style.filters}>
                <div className={style.continents}>
                    <Continents/>
                </div>

                <div className={style.searchBar}>
                    <SearchBar/>
                </div>

                <div className={style.alphaPopu}> 
                    <AlphabeticOrder/>
                    <PopulationOrder/>
                </div>
                
            </div>
    )
}

export default Filters