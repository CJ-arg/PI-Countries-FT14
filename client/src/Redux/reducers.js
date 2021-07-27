// constantes

import axios from "axios";

const dataFirst = {
  array: [],
  arrayAct: [],
  arrayDetail: [],
};

export const GET_COUNTRIES_OK = "GET_COUNTRIES_OK";
export const GET_DETAILS_OK = "GET_DETAILS_OK";
export const GET_NAME_OK = "GET_NAME_OK";
export const GET_POP_OK = "GET_POP_OK";
export const GET_ACT_OK = "GET_ACT_OK";

// reducer
export default function countriesR(state = dataFirst, action) {
  switch (action.type) {
    case GET_COUNTRIES_OK:
      return { ...state, array: action.payload };
    case GET_NAME_OK:
      return { ...state, array: action.payload };
    case GET_POP_OK:
      return { ...state, array: action.payload };
    case GET_DETAILS_OK:
      return { ...state, arrayDetail: action.payload };
    case GET_ACT_OK:
      return { ...state, arrayAct: action.payload };

    default:
      return state;
  }
}

// acciones
export const getCountriesAction =
  (page, order, filter, pop, act) => async (dispatch, getState) => {
    try {
      const res = await axios(
        "http://localhost:3001/countries" +
          "?page=" +
          page +
          "&order=" +
          order +
          "&filter=" +
          filter +
          "&pop=" +
          pop +
          "&act=" +
          act
      );
      // const res = await axios.get("http://localhost:3001/countries");
      // console.log("la variable array de la Api", res);
      dispatch({ type: GET_COUNTRIES_OK, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
// getCountriesAction();
export const getActivities = () =>
  async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/activities");
      console.log("la lista act", json);
      dispatch({ type: GET_ACT_OK, payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
export const getCountryName = (name) =>
  async function (dispatch) {
    try {
      var json = await axios.get(
        "http://localhost:3001/countries?name=" + name
      );
      dispatch({ type: GET_NAME_OK, payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
// export const getCountryPop = (pop) =>
//   async function (dispatch) {
//     try {
//       var json = await axios.get("http://localhost:3001/countries?pop=" + pop);
//       dispatch({ type: GET_POP_OK, payload: json.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };
export const getCountryDetails = (id) =>
  async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/countries/" + id);
      dispatch({ type: GET_DETAILS_OK, payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };

export const postAct = (name, level, time, season, code) =>
  async function (dispatch) {
    try {
      var json = await axios.post("http://localhost:3001/activities", {
        name: name,
        level: level,
        time: time,
        season: season,
        code: [code],
      });
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };
