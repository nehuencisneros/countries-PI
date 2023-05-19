import CardContainer from "../../components/CardContainer/CardContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries,filterCountriesByContinent,alphabeticOrder } from "../../redux/actions";
import Filters from "../../components/Filters/Filters";
import style from "./Home.module.css"


const Home = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const filter = useSelector((state) => state.filter)
    
    
    useEffect(()=>{
        dispatch(getAllCountries())
        console.log("en el home" )
    },[dispatch]);
    

    return (
        <div className={style.block}>
            <div className={style.filtersBlock}>
                <Filters/>
            </div>
            <div className={style.cardContainerBlock}>
                <CardContainer/>
            </div>
        </div>
    )
}

export default Home;