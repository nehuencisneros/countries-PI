import { GET_ALL_COUNTRIES, 
    POST_ACTIVITY, 
    GET_ALL_ACTIVITIES,
    GET_COUNTRY_BY_NAME } from "./action-types"

const initialState = {
    countries: [],
    activities: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_COUNTRIES:
            return {...state, countries: action.payload};

        case POST_ACTIVITY:
            return {...state};
            
        case GET_ALL_ACTIVITIES:
            return {...state, activities: action.payload};



        default:
            return {...state};
    }
}





export default rootReducer;