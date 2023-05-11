const { Router } = require('express');
const { getAllActivitiesHandler, postNewActivityHandler } = require('../handlers/activityHandler')


const activityRouter = Router()

activityRouter.get("/", getAllActivitiesHandler);

activityRouter.post("/", postNewActivityHandler);

module.exports = activityRouter;