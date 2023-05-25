import { GET_ALL_COUNTRIES, 
    POST_ACTIVITY, 
    GET_ALL_ACTIVITIES,
    GET_COUNTRY_BY_NAME,
    GET_COUNTRY_BY_ID,
    FILTER_BY_CONTINENT, 
    FILTER_BY_ACTIVITY,
    ALPHABETIC_ORDER,
    POPULATION_ORDER} from "./action-types"

const initialState = {
    allCountries: [],
    allActivities: [],
    countries:[],
    country: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {


        case GET_ALL_COUNTRIES:
            return {
            ...state,
            allCountries: action.payload,
            countries: action.payload};


        case GET_ALL_ACTIVITIES:
            return {
            ...state, 
            allActivities: action.payload};


        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries
            if(action.payload === "All Continents"){
                return {...state, countries: allCountries};
            } 
            const filterCountries = allCountries.filter(element =>
                element.continent === action.payload)
            
            return {
            ...state, 
            countries: filterCountries};


        case FILTER_BY_ACTIVITY:
            const countries = state.allCountries
            const allActivities = state.allActivities
            const activity = action.payload
            const actMatch = []
            let countriesFinal = []

            if(activity === "Select activity"){
                countriesFinal = countries
            } else {

                if(activity === "All activities"){  
                    allActivities.map((element) => {
                        actMatch.push(element.countries) 
                    })                
                } else {
                    allActivities.map((element) => {
                        if(element.name === activity){ 
                            actMatch.push(element.countries) 
                    }})
                }
                
                const actMatchInside = []
                
                for(let i = 0; i < actMatch.length; i++){
                    actMatch[i].map(element => {
                        actMatchInside.push(element.name)
                    })
                }
                
                const countriesNames = [... new Set(actMatchInside)]
                
                for(let name of countriesNames){
                    countriesFinal.push(countries.find((element) => element.name === name))
                };
            
            }
            return{
                ...state,
                countries: countriesFinal
                };


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
            countries: alphaOrder};


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
            countries: popuOrder};


        case GET_COUNTRY_BY_NAME:
            return{
            ...state,
            countries: action.payload,
            country: action.payload};


        case GET_COUNTRY_BY_ID:
            return{
            ...state,
            country: action.payload};


        case POST_ACTIVITY:
            return {
                    ...state};


        default:
            return {...state};
    }
}


export default rootReducer;
