import CardContainer from "../../components/CardContainer/CardContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCountries } from "../../redux/actions";

const Home = () => {
    const dispatch = useDispatch();

    

    useEffect(()=>{
        dispatch(getAllCountries())
    },[]);

    return (
        <>
            <h1>esta es la vista de home</h1>
            <CardContainer/>
        </>
    )
}

export default Home;