import React, { useState } from "react";
import { getCountryByName } from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css"
import { useHistory } from "react-router-dom";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [countryName, setCountryName] = useState("");
    const [currentPage,setCurrentPage] = useState(1)
    const history = useHistory()

    const handlerSearch = (event) => {
        const name = event.target.value
        setCountryName(name)
    }

    const handlerSubmit = (event) => {
        event.preventDefault()
        dispatch(getCountryByName(countryName))
        setCountryName("")
        history.push("/home")
        setCurrentPage(1)
    }

    return(
        <div>
            <form onSubmit={(event) => handlerSubmit(event)}>
                <input 
                className={style.inputSearchBar}
                type="text"
                placeholder="Search country..."
                onChange={handlerSearch}
                value={countryName}
                />
            </form>
        </div>
    )
}

export default SearchBar;