import React from "react";
import style from "./Paginate.module.css"

const Paginate = ({countriesPage, allCountries, paginate}) => {
    const pageNumbers = [];

    for(let i = 0; i <= Math.ceil(allCountries/countriesPage); i++){
        pageNumbers.push(i)
    }

    return(
        <nav>
            <ul className={style.paginate}>
                {pageNumbers && pageNumbers.map(number => (
                        <div key={number}>
                            <button onClick={() => paginate(number)}>{number}</button>
                        </div>
                        )
                    )
                }
            </ul>
        </nav>
    )
}

export default Paginate