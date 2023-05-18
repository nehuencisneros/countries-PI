import CardContainer from "../../components/CardContainer/CardContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCountries())
    },[]);


    return (
        <>
            <SearchBar/> 
            <CardContainer/>
        </>
    )
}

export default Home;