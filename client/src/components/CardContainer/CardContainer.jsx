import Card from "../Card/Card";
import style from "./CardContainer.module.css"
import { useSelector } from "react-redux";
import Paginate from "../Paginate/Paginate";
import React, { useState } from "react";

const CardContainer = () => {
	const countries = useSelector((state) => state.countries);

    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPage, setCountriesPage] = useState(12)
    const indexLastCountry = currentPage * countriesPage
    const indexFirstCountry = indexLastCountry - countriesPage
    const currentCountries = countries.slice(indexFirstCountry, indexLastCountry);
    
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return(
        <div>
            <div className={style.container}>
                
            
                {currentCountries.map(country => {
                    return <Card
                        id={country.id}
                        flag={country.flag}
                        name={country.name}
                        continent={country.continent}
                        
                    />
                })}

                
            </div>
            <Paginate 
                    countriesPage={countriesPage}
                    allCountries={countries.length}
                    paginate = {paginate}
            />
        </div>
    );
}

export default CardContainer;