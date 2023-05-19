import style from "./Card.module.css"

const Card = (props) => {
    return(
        <div className={style.card}>
            <img className={style.flag} src={props.flag} alt={props.name}/>
            <h3>{props.name}</h3>
            <p>Continent: {props.continent}</p>
        
        </div>
    )
}

export default Card;