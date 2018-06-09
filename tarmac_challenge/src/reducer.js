import { types } from "./actions";

const initialState = {
  members : [],
  memberSelected: null,
  loading: false
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_LOADING_DATA:
      return { ...state, loading: action.payload };
    case types.FETCH_MEMBERS_SUCCESS:
      const members = [...action.payload.members];
      return {
        ...state,
        members: members
      };
    case types.SELECT_MEMBER:
      return {...state, memberSelected: {...action.payload}};
    default:
      return state;
  }
}
