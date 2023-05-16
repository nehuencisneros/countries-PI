import style from "./Card.module.css"

const Card = (props) => {
    return(
        <div className={style.card}>
            <h3>{props.name}</h3>
            <p>Capital: {props.capital}</p>
            <p>Population: {props.population}</p>
            <img className={style.flag} src={props.flag} alt={props.name}/>
        </div>
    )
}

export default Card;