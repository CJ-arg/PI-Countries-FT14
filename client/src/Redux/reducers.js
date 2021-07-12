// constantes

import axios from "axios";

const dataFirst = {
  array: [],
  arrayForm: [],
  arrayDetail: [],
};

export const GET_COUNTRIES_OK = "GET_COUNTRIES_OK";
export const NEXT_COUNTRIES_OK = "NEXT_COUNTRIES_OK";
export const IMG_COUNTRIES_OK = "IMG_COUNTRIES_OK";
export const GET_NAME_OK = "GET_NAME_OK";

// reducer
export default function countriesR(state = dataFirst, action) {
  switch (action.type) {
    case GET_COUNTRIES_OK:
      return { ...state, array: action.payload };
    case GET_NAME_OK:
      return { ...state, array: action.payload };
    default:
      return state;
  }
}

// acciones
export const getCountriesAction =
  (page, order, filter) => async (dispatch, getState) => {
    try {
      // const res = await axios(
      //   "http://localhost3001/countries"
      //   // ?page=" +
      //   //   page +
      //   //   "&order=" +
      //   //   order +
      //   //   "&filter" +
      //   //   filter
      // );
      const res = await axios.get("http://localhost:3001/countries");
      console.log("la variable array de la Api", res.data);
      dispatch({ type: GET_COUNTRIES_OK, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
// getCountriesAction();

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
