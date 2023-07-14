import style from "./Card.module.css"

const Card = (props) => {
    return(
        <div className={style.card} key={props.id}>
            <img className={style.flag} src={props.flag} alt={props.name}/>
            <h3 className={style.titulo}>{props.name}</h3>
            <h4 className={style.continente}>Continent: {props.continent}</h4>
        </div>
    )
}

export default Card;