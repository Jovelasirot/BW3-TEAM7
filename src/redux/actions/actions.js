export const ADD_USER_DATA = "ADD_USER_DATA";
export const TURN_OFF_SPINNER = "TURN_OFF_SPINNER";
export const TURN_ON_SPINNER = "TURN_ON_SPINNER";

export const UPDATE_USER_SUCCESS = " UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = " UPDATE_USER_FAILURE";

const userEndPoint = "https://striveschool-api.herokuapp.com/api/profile/me";
const pasqualetoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzNGU4YzI0ZjYwNTAwMTkzN2Q0ODMiLCJpYXQiOjE3MDgzNDc3NDcsImV4cCI6MTcwOTU1NzM0N30.mthqNljgtCYQEBuKoZKcMpN6a22wDf15iDkgXjJsAoY";
const jovelToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzYWEzMzI0ZjYwNTAwMTkzN2Q0YmEiLCJpYXQiOjE3MDgzNzA0ODMsImV4cCI6MTcwOTU4MDA4M30.jqoAheaxMJoqyttRxskMe0OT7NdOmGfNE_i-sfS_sZo";
const michelaToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTZjNzI0ZjYwNTAwMTkzN2Q0NmMiLCJpYXQiOjE3MDgzMzI3NDQsImV4cCI6MTcwOTU0MjM0NH0.iLEv5uw64zS02f1yE-pYpnFtV3SUF3TBPtkQgQrr8ik";
const robertaToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTE1YTI0ZjYwNTAwMTkzN2Q0NTAiLCJpYXQiOjE3MDgzMzEzNTQsImV4cCI6MTcwOTU0MDk1NH0.lLMwELubthCjSB0pm9ge5Sboz8l11VFsHgHTETuJSOs";
const filippoToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTI0MTI0ZjYwNTAwMTkzN2Q0NjAiLCJpYXQiOjE3MDgzMzE1ODUsImV4cCI6MTcwOTU0MTE4NX0.Th8sgbTW3CgZXXpWkdeUdUQLB-SZvMattf9ctCL5H8M";

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

export const editData = (userId, expId, token, newData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(
        ` https://striveschool-api.herokuapp.com/api/profile/65d30da224f605001937d44b/picture `,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jovelToken}`,
          },
          body: JSON.stringify(newData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Experience updated successfully:", data);
        dispatch({ type: UPDATE_USER_SUCCESS });
      } else {
        console.log("Error updating experience");
        dispatch({ type: UPDATE_USER_FAILURE });
      }
    } catch (error) {
      console.error("Error:", error);
      dispatch({ type: UPDATE_USER_FAILURE });
    } finally {
      dispatch({ type: TURN_OFF_SPINNER });
    }
  };
};
