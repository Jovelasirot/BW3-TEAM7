export const ADD_USER_DATA = "ADD_USER_DATA";
export const TURN_OFF_SPINNER = "TURN_OFF_SPINNER";
export const TURN_ON_SPINNER = "TURN_ON_SPINNER";

export const UPDATE_USER_SUCCESS = " UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = " UPDATE_USER_FAILURE";

const userEndPoint = "https://striveschool-api.herokuapp.com/api/profile/me";

export const addUserData = (token) => {
  return async (dispatch) => {
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
        dispatch({ type: ADD_USER_DATA, payload: data });
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: UPDATE_USER_SUCCESS });
      dispatch({ type: UPDATE_USER_SUCCESS });
      dispatch({ type: UPDATE_USER_SUCCESS });
    }
  };
};
