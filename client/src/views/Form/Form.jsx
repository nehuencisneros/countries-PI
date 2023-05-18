import { useState } from "react";

const Form = () => {

    const [newActivity, setNewActivity] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season:"",
        country: []
    })

    const handlerChange = (event) => {
        const activityProperty = event.target.name;
        const value = event.target.value;

        setNewActivity({...newActivity, [activityProperty]:value})
    }

    const handlerSubmit = (event) => {
        event.preventDefault()
        dispatchEvent()
    }

    return (
        <form onSubmit={handlerSubmit}>
            <div>
                <label>actividad: </label>
                <input type="text" 
                value={newActivity.name} 
                onChange={handlerChange}
                name="name"></input>
            </div>

            <div>
                <label>dificultad: </label>
                <input type="text" 
                value={newActivity.difficulty} 
                onChange={handlerChange}
                name="difficulty"></input>
            </div>

            <div>
                <label>duracion: </label>
                <input type="text" 
                value={newActivity.duration} 
                onChange={handlerChange}
                name="duration"></input>
            </div>

            <div>
                <label>estacion:  </label>
                <input type="text" 
                value={newActivity.season} 
                onChange={handlerChange}
                name="season"></input>
            </div>

            <div>
                <label>pais:     </label>
                <input type="text" 
                value={newActivity.country} 
                onChange={handlerChange}
                name="country"></input>
            </div>

            <button type="submit">crear</button>
        </form>
    )
}

export default Form;