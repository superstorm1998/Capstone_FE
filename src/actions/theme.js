import axios from "../utils/axios";
import toastr from "toastr";

export function setShowCustomColor(isShow) {
  return dispatch => {
    dispatch({
      type: "SET_SHOW_CUSTOM_COLOR",
      payload: isShow
    });
  };
}

export function getNavItems() {
  return async dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    try {
      const data = await axios({
        url: "/navItem/findAll"
      });
      dispatch({
        type: "GET_NAV_ITEMS",
        payload: data.data
      });
      dispatch({
        type: "CLOSE_LOADING"
      });
    } catch (error) {
      dispatch({
        type: "CLOSE_LOADING"
      });
      toastr.error(`Unable to get nav items`, "Error");
    }
  };
}

export function getAllThemes() {
  return async dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    try {
      const data = await axios({
        url: "/theme/findAll"
      });
      dispatch({
        type: "GET_ALL_THEME",
        payload: data.data
      });
      dispatch({
        type: "CLOSE_LOADING"
      });
    } catch (error) {
      dispatch({
        type: "CLOSE_LOADING"
      });
      toastr.error(`Unable to get themes`, "Error");
    }
  };
}

export function getAllThemesAdmin() {
  return async dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    try {
      const data = await axios({
        url: "/theme/findAll"
      });
      dispatch({
        type: "CLOSE_LOADING"
      });
      if (data.status === 200) {
        dispatch({
          type: "SET_ALL_THEMES",
          payload: data.data
        });
      } else {
        toastr.error(`Unable to get themes`, "Error");
      }
    } catch (error) {
      dispatch({
        type: "CLOSE_LOADING"
      });
      toastr.error(`Unable to get themes`, "Error");
    }
  };
}
