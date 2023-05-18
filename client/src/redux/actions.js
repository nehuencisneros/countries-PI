import axios from 'axios';
import { GET_ALL_COUNTRIES,
    GET_ALL_ACTIVITIES,
    POST_ACTIVITY,
    // GET_COUNTRY_BY_ID,
    GET_COUNTRY_BY_NAME,
    FILTER_BY_CONTINENT,
    // ORDER_BY_NAME
} from './action-types';

const URL_COUNTRIES = "http://localhost:3001/countries"
const URL_ACTIVITIES = "http://localhost:3001/activities"

export const getAllCountries = () => {
    return async function (dispatch) {
        const apiData = await axios.get(URL_COUNTRIES);
        const countries = apiData.data;
        dispatch({
            type: GET_ALL_COUNTRIES,
            payload: countries
        })
    }
}

export const getCountryByName = (name) => {
    return async function (dispatch) {
        const countryData = await axios.get(`${URL_COUNTRIES}?name=${name}`);
        const country = countryData.data;
        dispatch({
            type: GET_COUNTRY_BY_NAME,
            payload: country
        })
    }
    
}

export const postActivity = (newActivity) => {
    return async function (dispatch){
        const apiData = await axios.post(URL_ACTIVITIES, newActivity)
        const activities = apiData.data
        dispatch({
            type: GET_ALL_ACTIVITIES,
            payload: activities
        })
    }
    
}

export const getAllActivities = () => {
    return async function (dispatch){
        const apiData = await axios.get(URL_ACTIVITIES)
        const activity = apiData.data
        dispatch({
            type: POST_ACTIVITY,
            payload:activity
        })
    }
    
}

export const filterCountriesByContinent = (payload) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload
    }
}

