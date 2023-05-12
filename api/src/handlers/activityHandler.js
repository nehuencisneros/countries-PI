const { getAllActivities, createNewActivity } = require('../controllers/activityControllers')

const getAllActivitiesHandler = async (req,res) => {

    try {
        const allActivities = await getAllActivities()
        res.status(200).send(allActivities)
    } catch (error) {
        res.status(400).send({error:error.message})
    }
        
}

const postNewActivityHandler = async (req, res) => {
    const { name, difficulty, duration, season, country } = req.body

    try {
        const newActivity = await createNewActivity(name, difficulty, duration, season, country)
        res.status(200).send(newActivity)

    } catch (error) {
        res.status(400).send({error:error.message})
    }

}

module.exports = {
    getAllActivitiesHandler,
    postNewActivityHandler
}