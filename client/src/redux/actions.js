import axios from 'axios';
import { GET_ALL_COUNTRIES,
    GET_ALL_ACTIVITIES,
    POST_ACTIVITY,
    GET_COUNTRY_BY_ID,
    GET_COUNTRY_BY_NAME,
    FILTER_BY_CONTINENT,
    ALPHABETIC_ORDER,
    POPULATION_ORDER,
    FILTER_STATE, 
    FILTER_BY_ACTIVITY} from './action-types';

const URL_COUNTRIES = "http://localhost:3001/countries"
const URL_ACTIVITIES = "http://localhost:3001/activities"

export const getAllCountries = () => {
    return async function (dispatch) {
        try {
            const apiData = await axios.get(URL_COUNTRIES);
            const countries = apiData.data;

            dispatch({
                type: GET_ALL_COUNTRIES,
                payload: countries})

        } catch (error) {
            console.log(error)
        }
    }
}


export const getAllActivities = () => {
    return async function (dispatch){
        try {
            const apiData = await axios.get(URL_ACTIVITIES)
            const activity = apiData.data

            dispatch({
                type: GET_ALL_ACTIVITIES,
                payload:activity})
        } catch (error) {
            console.log(error)
        }
    }
}


export const getCountryByName = (name) => {
    return async function (dispatch) {
        try {
            const countryData = await axios.get(`${URL_COUNTRIES}?name=${name}`);
            const country = countryData.data;
            
            dispatch({
                type: GET_COUNTRY_BY_NAME,
                payload: country});

        } catch (error) {
            alert("country not found")
        }
    }
}


export const getCountryById = (id) => {
    return async function (dispatch) {
        try {
            const countryData = await axios.get(`${URL_COUNTRIES}/${id}`);
            const country = countryData.data;
            dispatch({
                type: GET_COUNTRY_BY_ID,
                payload: country});

        } catch (error) {
            console.log(error)
        }
    }
}


export const filterCountriesByContinent = (continent) => {

    return {
        type: FILTER_BY_CONTINENT,
        payload: continent
    }
}


export const filterCountriesByActivities = (activity) => {
    return {
        type: FILTER_BY_ACTIVITY,
        payload: activity
    }
}


export const alphabeticOrder = (payload) => {
    return {
        type: ALPHABETIC_ORDER,
        payload
    }
}


export const populationOrder = (payload) => {
    return {
        type: POPULATION_ORDER,
        payload
    }
}


export const stateFilter = () => {
    return{
        type: FILTER_STATE
    }
}


export const createActivity = (newActivity) => {
    return async function (dispatch){
        const apiData = await axios.post(URL_ACTIVITIES, newActivity)
        const activity = apiData.data

            dispatch({
            type: POST_ACTIVITY,
            payload: activity})
        
    }
}