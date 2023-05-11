const { getAllCountriesInfo, getCountryById, getCountryByName } = require('../controllers/countryController')

const getAllCountriesHandler = async (req, res) => {
    const { name } = req.query;

    try {

        if(name){

            const countryByName = await getCountryByName(name)

            if(countryByName.length !== 0){
                res.status(200).send(countryByName)
            } 
            else {
                throw Error ("El pais ingresado no existe")
            }
    
        } else {
            const allCountries = await getAllCountriesInfo()
            res.status(200).send(allCountries)
        }
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}

const getCountriesByIdHandlers = async (req, res) => {
    const { id } = req.params;
    
    try {
        const countryById = await getCountryById(id)

        if(countryById) {
            res.status(200).send(countryById)
        }
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}

module.exports = {
    getAllCountriesHandler,
    getCountriesByIdHandlers,
}