export const ADD_USER_DATA = "ADD_USER_DATA";
export const TURN_OFF_SPINNER = "TURN_OFF_SPINNER";
export const TURN_ON_SPINNER = "TURN_ON_SPINNER";

const userEndPoint = "https://striveschool-api.herokuapp.com/api/profile/me";
const pasqualetoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzNGU4YzI0ZjYwNTAwMTkzN2Q0ODMiLCJpYXQiOjE3MDgzNDc3NDcsImV4cCI6MTcwOTU1NzM0N30.mthqNljgtCYQEBuKoZKcMpN6a22wDf15iDkgXjJsAoY";
const jovelToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMGRhMjI0ZjYwNTAwMTkzN2Q0NGIiLCJpYXQiOjE3MDgzMzA0MDIsImV4cCI6MTcwOTU0MDAwMn0.LYG5z94VApAqELv2LvNngtihtlh6Kyrv-RHbX7gxv0M";
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
      dispatch({ type: TURN_OFF_SPINNER });
    }
  };
};
