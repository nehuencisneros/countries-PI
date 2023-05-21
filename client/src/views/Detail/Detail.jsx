import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { getCountryById, getCountryByName } from "../../redux/actions";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

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
    
            <h1>esta es la vista de Detail</h1>

            {  country ?     
                <h1>id={country.id}</h1> : <h1>country no esta</h1>
                            
                            // flag={country.flag}
                        // name={country.name}
                        // continent={country.continent}
                        
                
                }
        </div>
    )
}

export default Detail;