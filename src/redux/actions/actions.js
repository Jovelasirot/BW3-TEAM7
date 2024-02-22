import { useSelector } from "react-redux";

export const ADD_USER_DATA = "ADD_USER_DATA";
export const TURN_OFF_SPINNER = "TURN_OFF_SPINNER";
export const TURN_ON_SPINNER = "TURN_ON_SPINNER";
export const CURRENT_TOKEN = "CURRENT_TOKEN";
export const RESET_USER_DATA = "RESET_USER_DATA";
export const UPDATE_USER_POST = " UPDATE_USER_POST";
export const ADD_USER_POST = "ADD_USER_POST";
export const RESET_POST_DATA = "RESET_POST_DATA";
export const DELETE_USER_POST = "DELETE_USER_POST";
export const SAVE_HOME_POST = "SAVE_HOME_POST";
export const ADD_HOMEPAGE_POST = "ADD_HOMEPAGE_POST";
export const SAVE_ALL_JOBS = "SAVE_ALL_JOBS";
export const SAVE_CATEGORY_JOBS = "SAVE_CATEGORY_JOBS";
export const ADD_ALL_USERS_DATA = "ADD_ALL_USERS_DATA";

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

export const deleteUserPost = (id, token, experience) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${experience}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: DELETE_USER_POST, payload: data });
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

export const saveHomePost = (token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        const array = data.slice(-10);
        array.reverse();
        console.log("array", array);
        dispatch({ type: SAVE_HOME_POST, payload: array });
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
const editImage = (id, token, image) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: image,
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("image", data);
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

export const addHomePagePost = (token, text, image) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(text),
        }
      );
      if (response.ok) {
        const data = await response.json();
        dispatch(editImage(data._id, token, image));
        console.log("data", data);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: TURN_OFF_SPINNER });
    }
  };
};

export const saveAllJobs = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const { data } = await response.json();
        const array = data.filter((post, id) => id < 50);
        console.log("data", array);
        dispatch({ type: SAVE_ALL_JOBS, payload: array });
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

export const saveCategoryJobs = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?category=dev&limit=10`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const { data } = await response.json();
        const array = data.filter((post, id) => id < 50);
        console.log("data", array);
        dispatch({ type: SAVE_CATEGORY_JOBS, payload: data });
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

export const deletePost = (postId, userToken) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
      } else {
        console.log("Error");
        alert("Puoi eliminare solo i tuoi post");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchAllUser = (token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        const lastUsersData = data.slice(-40);
        dispatch({ type: ADD_ALL_USERS_DATA, payload: lastUsersData });
        console.log("tutti i profili", lastUsersData);
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
