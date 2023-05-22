import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom"
import Card from "../Card/Card";
import style from "./CardContainer.module.css"
import Paginate from "../Paginate/Paginate";
import Filters from "../Filters/Filters";
import { getAllCountries} from "../../redux/actions"

const CardContainer = () => {
    const dispatch = useDispatch();
    const dependencia = useSelector(state => state)
    const location = useLocation()

    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPage] = useState(10)
    const indexLastCountry = currentPage * countriesPage
    const indexFirstCountry = indexLastCountry - countriesPage
    const currentCountries = dependencia.countries.slice(indexFirstCountry, indexLastCountry);   
    
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    console.log(currentCountries.length)
    
    useEffect(()=>{
        dispatch(getAllCountries(dependencia.countries))
    },[dispatch]);

    
    return(
        <div classname={style.containerCard}>            
            <div className={style.filters}>
                {location.pathname === "/home" && <Filters/>}    
            </div>
            
            <div className={style.container}>
                {currentCountries.map(country => {
                    return( 
                        <Link className={style.link} to={`/home/${country.id}`} >
                            <Card
                                key={country.id}
                                flag={country.flag}
                                name={country.name}
                                continent={country.continent}
                            />
                        </Link>
                    )
                })}
            </div>
            <Paginate 
                    countriesPage={countriesPage}
                    allCountries={dependencia.countries.length}
                    paginate={paginate}
                    currentpage={currentPage}
            />

            
        </div>
    );
}

export default CardContainer;