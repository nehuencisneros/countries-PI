import Card from "../Card/Card";
import style from "./CardContainer.module.css"
import { useSelector, useDispatch } from "react-redux";
import Paginate from "../Paginate/Paginate";
import React, { useState, useEffect } from "react";
import { getAllCountries} from "../../redux/actions"

const CardContainer = () => {
    const dispatch = useDispatch();
	const countries = useSelector((state) => state.countries);
    const dependencia = useSelector(state => state)

    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPage, setCountriesPage] = useState(10)
    const indexLastCountry = currentPage * countriesPage
    const indexFirstCountry = indexLastCountry - countriesPage
    const currentCountries = countries.slice(indexFirstCountry, indexLastCountry);   
    
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    
    useEffect(()=>{
        dispatch(getAllCountries(countries))
    },[dispatch]);

    
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