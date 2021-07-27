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
  // console.log("la variable array de la Api", array.data);
  return array.data;
};
//get by id
router.get("/countries/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let detail = await Country.findAll({
      where: {
        alpha3Code: id,
      },
      include: { model: Activity },
    });
    console.log(detail);

    return res.json(detail);
  } catch (error) {
    console.log(error);
  }
});

router.get("/activities", async (req, res) => {
  try {
    let list = await Activity.findAll({});

    console.log(list);

    return res.json(list);
  } catch (error) {
    console.log(error);
  }
});

router.get("/countries", async (req, res) => {
  //constante con el query NAME
  const name = req.query.name;
  const filter = req.query.filter;
  const pop = req.query.pop;
  // guardo en un constante todo lo de la API
  const apiCountries = await data();
  const act = req.query.act;

  try {
    //si esta llena la DB no hace nada
    let full = await Country.findAll();
    //si no hay datos los creo
    if (!full.length) await Country.bulkCreate(apiCountries);
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
  } else if (filter) {
    try {
      let country = await Country.findAll({
        where: {
          region: filter,
        },
        limit: 6,
        offset: req.query.page,
        order: [[req.query.pop, req.query.order]],
        include: { model: Activity },
      });
      return res.json(country);
    } catch (error) {
      console.log(error);
    }
  } else if (act) {
    try {
      let country = await Country.findAll({
        limit: 6,
        offset: req.query.page,
        order: [[req.query.pop, req.query.order]],
        include: {
          model: Activity,
          where: {
            name: act,
          },
        },
      });
      return res.json(country);
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      let country = await Country.findAll({
        limit: 6,
        offset: req.query.page,
        order: [[req.query.pop, req.query.order]],
        include: { model: Activity },
      });
      return res.json(country);
    } catch (error) {
      console.log(error);
    }
  }
});
//ruta POST
// router.post("/activities", async (req, res) => {
//   const activitie = req.body;
//   // {name: golf, Dificultad: 3, Duración: 3hs, Temporada: winter}
//   try {
//     let newAct = await Activity.findOrCreate({
//       where: {
//         name: activitie.name,
//         level: activitie.level,
//         time: activitie.time,
//         season: activitie.season,
//       },
//     });
//     return res.json(newAct);
//   } catch (error) {
//     console.log(error);
//   }
// });
router.post("/activities", async (req, res) => {
  const activitie = req.body;
  // {name: golf, Dificultad: 3, Duración: 3, Temporada: winter}
  try {
    let [act, created] = await Activity.findOrCreate({
      where: {
        name: activitie.name,
        level: activitie.level,
        time: activitie.time,
        season: activitie.season,
      },
    });
    console.log(created);
    for (let i = 0; i < activitie.code.length; i++) {
      await act.addCountries(activitie.code[i]);
    }
    //seteo las relaciones
    // await act.addCountries(activitie.code);
    return res.json(act);
  } catch (error) {
    console.log(error);
  }
});

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;

// Ruta de creación de actividad turística: debe contener

// [ ] Un formulario controlado con los siguientes campos
// Nombre
// Dificultad
// Duración
// Temporada
// [ ] Posibilidad de seleccionar/agregar varios países en simultaneo
// [ ] Botón/Opción para crear una nueva actividad turística
