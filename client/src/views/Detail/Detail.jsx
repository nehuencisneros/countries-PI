import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { getCountryById, getCountryByName } from "../../redux/actions";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";

const Detail = () => {
    const country = useSelector((state) => state.country);
    const location = useLocation()
    const dispatch = useDispatch()

    const idRoute = location.pathname.split("/")
    const idCountry = idRoute[2]
    
    useEffect(() => {
        dispatch(getCountryById(idCountry))
    },[dispatch])

    return (
        <div>
            <NavBar></NavBar>
            {  country.length !== 0 ?
                <h1>{country.name}</h1> : <h1>el pais no existe</h1>
                
                
                }
        </div>
    )
}

export default Detail;