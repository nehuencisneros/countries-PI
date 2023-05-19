const axios = require('axios');
const { Country, Activity } = require('../db')
const { Op } = require('sequelize')

let getAllCountriesInfo = async () => {

    let allData = await Country.findAll();

    if (!allData.length) {

        const apiUrl = await axios.get("https://restcountries.com/v3/all");

        const allCountriesApi = await apiUrl.data?.map( apiCountry => {
                return {
                    id: apiCountry.cca3,
                    name: apiCountry.name.common,
                    flag: apiCountry.flags[1],
                    continent: apiCountry.region,
                    capital: apiCountry.capital ? apiCountry.capital[0] : 'Undefined capital city',
                    subregion: apiCountry.subregion ? apiCountry.subregion : 'Undefinded Subregion',
                    area: apiCountry.area,
                    population: apiCountry.population,
                }
        });
        console.log("cargo la bdd") ///////////////////////////////////////////////////////////////////////////////////////////////////////////
        await Country.bulkCreate(allCountriesApi)
    }

    allData = await Country.findAll({        
        include : {
            model: Activity,
            attributes: [ "name", "difficulty", "duration", "season"],
            through: {
                attributes:[],
            }
        }
    });

    return allData;
}

const getCountryById = async (id) => {

    await getAllCountriesInfo()

    if(id.length > 3){
        return "por favor igrese un id de 3 caracteres";
    }

    id = id.toUpperCase()

    const idCountry = await Country.findByPk(
        id,
        { include : {
            model: Activity,
            attributes: [ "name", "difficulty", "duration", "season"],
            through: {
                attributes:[],
            }
        }}
    );

    if(idCountry){
        return idCountry;
    }

    return "por favor igrese un id correcto";
}

const getCountryByName = async (name) => {
    
    await getAllCountriesInfo()

    const nameCountry = await Country.findAll({
        where: {
            name: {
                [Op.iLike] : `%${name}%`
            }
        },
        include : [Activity] 
    });

    if(nameCountry){
        return nameCountry;
    } else {
        return "ese pais no existe";
    }
}


module.exports = {
    getAllCountriesInfo,
    getCountryById,
    getCountryByName
}