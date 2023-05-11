const { Router } = require('express');
const { getAllCountriesHandler, getCountriesByIdHandlers } = require('../handlers/countryHandler')

const countryRouter = Router()

countryRouter.get("/", getAllCountriesHandler);

countryRouter.get("/:id", getCountriesByIdHandlers);

module.exports = countryRouter;