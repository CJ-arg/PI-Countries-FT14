const { Router } = require("express");
//importo el axios que instale
const axios = require("axios").default;
//traigo las tablas de la BD
const { Country, Activity, countries_activities } = require("../db");
const CountriesRoutes = require("./countriesR");
const ActivitiesRoutes = require("./activitiesR");

//importo operadores de sequelize
const { Op } = require("sequelize");

// Importar todos los routers;
// const getAll = require("./GetAll");
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
//GET ALL TRAIGO LA DATA DE LA API

const data = async () => {
  const array = await axios.get("https://restcountries.eu/rest/v2/all");
  console.log("la variable array de la Api", array.data);
  return array.data;
};

router.get("/countries", async (req, res) => {
  //constante con el query NAME
  const name = req.query.name;
  // guardo en un constante todo lo de la API
  const apiCountries = await data();

  try {
    //si esta llena la DB no hace nada
    let full = await Country.findAll();
    //si no hay datos los creo
    if (!full.lenght) await Country.bulkCreate(apiCountries);
  } catch (error) {
    console.log(error);
  }
  if (name) {
    try {
      let country = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: "%" + name + "%",
          },
        },
      });
      return res.json(country);
    } catch (error) {
      console.log(error);
    }
  } else if (req.query.filter) {
    try {
      let country = await Country.findAll({
        where: {
          status: req.query.filter,
        },
        limit: 10,
        offset: req.query.page,
        order: [["name", req.query.order]],
        include: { model: Activity },
      });
      return res.json(country);
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      let country = await Country.findAll({
        limit: 12,
        // offset: req.query.page,
        // order: [["name", req.query.order]],
        // include: { model: Activity },
      });
      return res.json(country);
    } catch (error) {
      console.log(error);
    }
  }
});

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
