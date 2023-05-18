import CardContainer from "../../components/CardContainer/CardContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import Filters from "../../components/Filters/Filters";
import style from "./Home.module.css"

const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCountries())
    },[]);


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