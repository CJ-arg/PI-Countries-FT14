// constantes

import axios from "axios";

const dataFirst = {
  array: [],
};

export const GET_COUNTRIES_OK = "GET_COUNTRIES_OK";
export const NEXT_COUNTRIES_OK = "NEXT_COUNTRIES_OK";
export const IMG_COUNTRIES_OK = "IMG_COUNTRIES_OK";

// reducer
export default function countriesR(state = dataFirst, action) {
  switch (action.type) {
    case GET_COUNTRIES_OK:
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
getCountriesAction();
console.log(dataFirst);
