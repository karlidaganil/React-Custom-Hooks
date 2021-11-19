import { useReducer, useEffect } from "react";
import axios from "axios";

const ACTIONS = {
  API_REQUEST: "API_REQUEST",
  FETCH_DATA: "FETCH_DATA",
  ERROR: "ERROR",
};

const initialState = {
  data: null,
  loading: false,
  error: null,
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.API_REQUEST:
      return { ...state, loading: true };
    case ACTIONS.FETCH_DATA:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case ACTIONS.ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
  }
};

const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: ACTIONS.API_REQUEST });
    axios
      .get(url)
      .then((res) => {
        dispatch({ type: ACTIONS.FETCH_DATA, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.ERROR });
      });
  }, [url]);
  return state;
};

export default useFetch;
