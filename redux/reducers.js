import { LOGOUT } from './action';

export const userInitialState = {};

export function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case LOGOUT: {
      return {};
    }
    default:
      return state;
  }
}
