import { GET_ALL_COUNTRIES,
    GET_COUNTRY_BY_NAME } from "./action-types"

const initialState = {
    countries: [],
    country: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_COUNTRIES:
            return {...state, countries: action.payload};
        case GET_COUNTRY_BY_NAME:
            return {...state, country: action.payload};

        default:
            return {...state};
    }
}



export default rootReducer;