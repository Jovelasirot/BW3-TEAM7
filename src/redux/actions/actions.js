import { useSelector } from "react-redux";

export const ADD_USER_DATA = "ADD_USER_DATA";
export const TURN_OFF_SPINNER = "TURN_OFF_SPINNER";
export const TURN_ON_SPINNER = "TURN_ON_SPINNER";
export const CURRENT_TOKEN = "CURRENT_TOKEN";
export const RESET_USER_DATA = "RESET_USER_DATA";
export const UPDATE_USER_POST = " UPDATE_USER_POST";
export const ADD_USER_POST = "ADD_USER_POST";
export const RESET_POST_DATA = "RESET_POST_DATA";

const userEndPoint = "https://striveschool-api.herokuapp.com/api/profile/me";

export const addUserData = (token) => {
  return async (dispatch) => {
    dispatch({ type: RESET_USER_DATA });
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(userEndPoint, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data._id);

        dispatch({ type: ADD_USER_DATA, payload: data });
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: TURN_OFF_SPINNER });
      dispatch({ type: CURRENT_TOKEN, payload: token });
    }
  };
};

export const addUserPost = (id, token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(id, data);

        // dispatch({ type: RESET_POST_DATA });
        dispatch({ type: UPDATE_USER_POST, payload: data });
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: TURN_OFF_SPINNER });
    }
  };
};

export const newUserPost = (id, token, experience) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(experience),
        }
      );
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: ADD_USER_POST, payload: data });
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: TURN_OFF_SPINNER });
    }
  };
};
