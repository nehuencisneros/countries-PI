const { Country, Activity } = require('../db')
const { getAllCountriesInfo } = require('./countryController')

const getAllActivities = async () => {

    let allActivities = await Activity.findAll({
        include : {
            model: Country,
            attributes: [ "name"],
            through: {
                attributes:[],
            }
        }
    })
    return allActivities
} 

const createNewActivity = async (name, difficulty, duration, season, country) => {
    await getAllCountriesInfo()

    const countrySelected = await Country.findAll({
        where: { name : country }
    })

    const repeatActivity = await Activity.findOne({ 
        where: { 
            name: name, 
            difficulty: difficulty, 
            duration: duration,
            season: season 
        } 
    });

    if(!repeatActivity){
        const newActivity = await Activity.create({
            name, 
            difficulty, 
            duration, 
            season,
        });
        const activityCountry = await newActivity.addCountry(countrySelected)

        return activityCountry 
    } else {
        const activityCountry = await repeatActivity.addCountry(countrySelected)

        return activityCountry;
    }
}


module.exports = {
    getAllActivities,
    createNewActivity,
}