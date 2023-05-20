import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { getCountryById } from "../../redux/actions";

const Detail = () => {
    const countries = useSelector((state) => state.country);
    //const location = useLocation()

    

    return (
        <div>
    
        <h1>esta es la vista de Detail</h1>

        {countries.map(country => {
                    return <Card
                        id={country.id}
                        flag={country.flag}
                        name={country.name}
                        continent={country.continent}
                        
                    />
                })}
        </div>
    )
}

export default Detail;