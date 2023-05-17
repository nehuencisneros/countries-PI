import Card from "../Card/Card";
import style from "./CardContainer.module.css"
import { useSelector } from "react-redux";

const CardContainer = () => {
	const countries = useSelector(state => state.countries)

    return(
        <div className={style.container}>
            {countries.map(country => {
                return <Card
                    id={country.id}
                    flag={country.flag}
                    name={country.name}
                    continent={country.continent}
					
                />
            })}
        </div>
    );
}

export default CardContainer;