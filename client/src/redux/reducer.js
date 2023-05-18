import { GET_ALL_COUNTRIES, 
    POST_ACTIVITY, 
    GET_ALL_ACTIVITIES,
    GET_COUNTRY_BY_NAME,
    FILTER_BY_CONTINENT } from "./action-types"

const initialState = {
    allCountries: [],
    activities: [],
    countries:[]
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_COUNTRIES:
            return {...state,
                allCountries: action.payload,
                countries: action.payload};

        case POST_ACTIVITY:
            return {...state};
            
        case GET_ALL_ACTIVITIES:
            return {...state, activities: action.payload};

        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries
            if(action.payload === "All Continents"){
                return {...state, countries: allCountries};
            } 
            const filterCountries = allCountries.filter(element =>
                element.continent === action.payload)
            
            return {...state, countries: filterCountries};

        default:
            return {...state};
    }
}





export default rootReducer;