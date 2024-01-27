export const SET_AUTH = 'SET_AUTH';

export const setAuth = (user, token) => ({
  type: SET_AUTH,
  payload: { user, token },
});