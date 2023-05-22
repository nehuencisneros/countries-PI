import CardContainer from "../../components/CardContainer/CardContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import style from "./Home.module.css"
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getAllCountries())
    },[dispatch]);
    
    return (
        <div className={style.block}>
            <div>
                <NavBar/>
                <CardContainer/>
            </div>
        </div>
    )
}

export default Home;