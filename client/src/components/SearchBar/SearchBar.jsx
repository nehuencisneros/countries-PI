import React, { useState } from "react";
import { getCountryByName } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [countryName, setCountryName] = useState("")
    const history = useHistory();

    const handlerSearch = (event) => {
        setCountryName(event.target.value)
    }

    const handlerSubmit = (event) => {
        event.preventDefault()
        dispatch(getCountryByName(countryName))
        setCountryName("")
        history.push('/detail')
    }

    return(
        <div>
            <form onSubmit={(event) => handlerSubmit(event)}>
                <input type="text"
                placeholder="Search country..."
                onChange={handlerSearch}
                value={countryName}
                />
            </form>
        </div>
    )
}

export default SearchBar;