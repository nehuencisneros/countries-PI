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



    // const array = []
    // //console.log(allActivities)
    // //console.log(allActivities)

    // let objeto = allActivities[0].dataValues.countries

    // for(let value of objeto){
    //     array.push(value.dataValues.name)
    // }

    // // allActivities[0].dataValues.countries.forEach((value, index) => {
    // //     value[index] = array[index]
    // // })  
  
    
    // //
    // // console.log(objeto)
    // // console.log(allActivities)
    // //const obj = allActivities[0].dataValues.countries
    // //console.log(obj)
    // // const array = []
    // // for(const country in obj){
    // //     console.log(obj)
    // //     array.push(obj[country])
    // // }
    // console.log(array)
