import CardContainer from "../../components/CardContainer/CardContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import style from "./Home.module.css"

const Home = () => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getAllCountries())
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