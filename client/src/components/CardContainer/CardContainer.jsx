import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom"
import Card from "../Card/Card";
import style from "./CardContainer.module.css"
import Paginate from "../Paginate/Paginate";
import PageNumbers from "../Paginate/pageNumbers";
import Filters from "../Filters/Filters";
import NavBar from "../NavBar/NavBar";
import { getAllActivities, getAllCountries} from "../../redux/actions"

const CardContainer = () => {
    const dispatch = useDispatch();
    const dependencia = useSelector(state => state)
    const location = useLocation()

    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPage] = useState(10)
    const indexLastCountry = currentPage * countriesPage
    const indexFirstCountry = indexLastCountry - countriesPage
    const currentCountries = dependencia.countries.slice(indexFirstCountry, indexLastCountry);   
    const cantCountries = dependencia.countries.length
    
    const arrayPages = PageNumbers(countriesPage, cantCountries)
    const cantPages = arrayPages.length

    useEffect(()=>{
        dispatch(getAllCountries(dependencia.countries))
        dispatch(getAllActivities())
    },[dispatch]);

    if(currentPage > cantPages){
        setCurrentPage(1)
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber) 
    }

    return(
        <div classname={style.containerCard}>       
            <NavBar/>     
            <div className={style.filters}>
                {location.pathname === "/home" && <Filters/>}    
            </div>
            { currentCountries.length < 6 ? <div className={style.containerExtend}> 
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
                :
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
            }
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