const { Country, Activity } = require('../db')
const { getAllCountriesInfo } = require('./countryController')
const { Op } = require('sequelize')

const getAllActivities = async () => {

    const allActivities = await Country.findAll({
        where: {
            activities : {
                [Op.ne]:null,
            }
        }
    })

    

    return allActivities
    
} 

const createNewActivity = async (name, difficulty, duration, season, country) => {
    await getAllCountriesInfo()

    const newActivity = await Activity.create({
        name, 
        difficulty, 
        duration, 
        season
    });

    const countrySelected = await Country.findAll({
        where: {
            name : country
        }
    })

    const done = await newActivity.addCountry(countrySelected)


    return done;
}




module.exports = {
    getAllActivities,
    createNewActivity,
}