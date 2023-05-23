import { GET_ALL_COUNTRIES, 
    POST_ACTIVITY, 
    GET_ALL_ACTIVITIES,
    GET_COUNTRY_BY_NAME,
    GET_COUNTRY_BY_ID,
    FILTER_BY_CONTINENT, 
    ALPHABETIC_ORDER,
    POPULATION_ORDER,
    FILTER_STATE} from "./action-types"

const initialState = {
    allCountries: [],
    activities: [],
    countries:[],
    country: [],
    filterPrev: 0,
    filter: 0,
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {


        case GET_ALL_COUNTRIES:
            return {
            ...state,
            allCountries: action.payload,
            countries: action.payload};


        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries
            if(action.payload === "All Continents"){
                return {...state, countries: allCountries};
            } 
            const filterCountries = allCountries.filter(element =>
                element.continent === action.payload)
            
            return {
            ...state, 
            countries: filterCountries,
            filter: filterCountries.length,
            filterPrev: state.filter}


        case ALPHABETIC_ORDER:
            let alphaOrder = state.countries
                if(action.payload === "from A to Z"){
                    alphaOrder = alphaOrder.sort((a,b) => {
                        if(a.name > b.name){ return 1; }
                        if(a.name < b.name){ return -1; }
                        return 0;
                    })
                } else {
                    alphaOrder = alphaOrder.sort((a,b) => {
                        if(a.name > b.name){ return -1; }
                        if(a.name < b.name){ return 1; }
                        return 0;
                    })
                }
            return {
            ...state,
            countries: alphaOrder}


        case POPULATION_ORDER:
            let popuOrder = state.countries
                if(action.payload === "Descendent"){
                    popuOrder = popuOrder.sort((a,b) => {
                        if(a.population > b.population){ return 1; }
                        if(a.population < b.population){ return -1; }
                        return 0;
                    })
                } else {
                    popuOrder = popuOrder.sort((a,b) => {
                        if(a.population > b.population){ return -1; }
                        if(a.population < b.population){ return 1; }
                        return 0;
                    })
                }
            return {
            ...state,
            countries: popuOrder}


        case GET_COUNTRY_BY_NAME:
            return{
            ...state,
            countries: action.payload}


        case GET_COUNTRY_BY_ID:
            return{
            ...state,
            country: action.payload};


        case POST_ACTIVITY:
            return {
                    ...state};


        case GET_ALL_ACTIVITIES:
            return {...state, activities: action.payload};


        default:
            return {...state};
    }
}





export default rootReducer;
