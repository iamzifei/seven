import * as actions from "components/Loader/LoaderActions";
import callApi, { REQUEST_GET } from "utils/apiCaller";

export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

const loadUserSuccess = data => {
  return {
    type: GET_USER_SUCCESS,
    data
  };
};

const loadUserFailed = error => {
  return {
    type: GET_USER_FAILED,
    data: error
  };
};

export const getUsers = () => dispatch => {
  dispatch(actions.startLoading());
  return callApi("?results=20", REQUEST_GET)
    .then(res => {
      if (res && res.error) {
        dispatch(loadUserFailed(res.error));
      } else {
        dispatch(loadUserSuccess(res.results));
      }
      dispatch(actions.endLoading());
    })
    .catch(res => {
      dispatch(loadUserFailed(res.message));
      dispatch(actions.endLoading());
    });
};
