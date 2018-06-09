import * as api from './api';

export const types = {
  FETCH_MEMBERS_SUCCESS: "FETCH_MEMBERS_SUCCESS",
  FETCH_MEMBERS_FAIL: "FETCH_MEMBERS_FAIL",
  SELECT_MEMBER: "SELECT_MEMBER",
  TOGGLE_LOADING_DATA: "TOGGLE_LOADING_DATA"
};

//actions creators
const receiveMembers = members => {
  return {
    type: types.FETCH_MEMBERS_SUCCESS,
    payload: { members: members }
  };
};

const failFetchVideos = error => {
  return {
    type: types.FETCH_MEMBERS_FAIL,
    payload: error
  };
};

const toggleLoadingData = flag => {
  return {
    type: types.TOGGLE_LOADING_DATA,
    payload: flag
  };
};

export const selectMember = member => {
  console.log("SELECT MEMBER ACTIONS")
  return {
    type: types.SELECT_MEMBER,
    payload: member
  }
}


//THUNKS
export const getMembers = () => {
  return dispatch => {
    dispatch(toggleLoadingData(true));
    api
      .fetchMembers()
      .then(
        response => {
          if (response) dispatch(receiveMembers(response));
        },
        error => {
          dispatch(failFetchMembers(error));
        }
      )
      .then(() => dispatch(toggleLoadingData(false)));
  };
};
