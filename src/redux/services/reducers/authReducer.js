import { LOGIN, LOGOUT, UPDATE } from "../actions/type";

const initialState = {
  isAuthenticated: false,
  token: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case LOGOUT:
      return initialState
    case UPDATE:
      return {
        ...state,
        user: action.payload.user
      }
    default:
      return state;
  }
}
