import CardContainer from "../../components/CardContainer/CardContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import style from "./Home.module.css"

const Home = () => {
    const dispatch = useDispatch()
    const dependencia = useSelector(state => state.allCountries)
    
    useEffect(()=>{
        dispatch(getAllCountries(dependencia))
    },[dispatch]);
    
    return (
        <div className={style.block}>
            <div>
                <CardContainer/>
            </div>
        </div>
    )
}

export default Home;