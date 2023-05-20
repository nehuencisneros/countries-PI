import CardContainer from "../../components/CardContainer/CardContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom"
import { getAllCountries,filterCountriesByContinent,alphabeticOrder } from "../../redux/actions";
import Filters from "../../components/Filters/Filters";
import style from "./Home.module.css"

const Home = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    
    useEffect(()=>{
        dispatch(getAllCountries())
    },[dispatch]);

    return (
        <div className={style.block}>
            <div className={style.filtersBlock}>
            {location.pathname === "/home" && <Filters/>}    
            </div>
            <div className={style.cardContainerBlock}>
                <CardContainer/>
            </div>
        </div>
    )
}

export default Home;