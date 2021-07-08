import axios from "axios";
import { dataFirst } from "./reducer";

//constantes
export const GET_COUNTRIES_OK = "GET_COUNTRIES_OK";
export const NEXT_COUNTRIES_OK = "NEXT_COUNTRIES_OK";
export const IMG_COUNTRIES_OK = "IMG_COUNTRIES_OK";

// actions
export const getCountriesAction = () => async(dispatch) =>
