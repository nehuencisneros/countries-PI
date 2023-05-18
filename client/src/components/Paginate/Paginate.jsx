import React from "react";
import style from "./Paginate.module.css"

const Paginate = ({countriesPage, allCountries, paginate}) => {
    const pageNumbers = [];

    for(let i = 0; i <= Math.ceil(allCountries/countriesPage); i++){
        if(i === (Math.ceil(allCountries/countriesPage)-1)){
            pageNumbers.push(i+1)
            break
        } else {
        pageNumbers.push(i+1)
        }
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