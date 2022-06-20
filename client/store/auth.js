import axios from 'axios';
import history from '../history';

const TOKEN = 'token';

const SET_AUTH = 'SET_AUTH';

const setAuth = (auth) => ({ type: SET_AUTH, auth });

// Thunk Creators
export const me = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    const res = await axios.get('/auth/me', {
      headers: {
        authorization: token,
      },
    });
    return dispatch(setAuth(res.data));
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post(`/auth/login`, { email, password });
    window.localStorage.setItem(TOKEN, res.data.token);
    dispatch(me());
    history.push('./home');
  } catch (authError) {
    return dispatch(setAuth({ error: authError }));
  }
};

export const signup =
  (firstName, lastName, email, password) => async (dispatch) => {
    try {
      const res = await axios.post(`/auth/signup`, {
        email,
        password,
        firstName,
        lastName,
      });
      window.localStorage.setItem(TOKEN, res.data.token);
      dispatch(me());
      history.push('./home');
    } catch (authError) {
      return dispatch(setAuth({ error: authError }));
    }
  };

export const logout = () => {
  debugger
  window.localStorage.removeItem(TOKEN);
  debugger
  history.push('/login');
  return {
    type: SET_AUTH,
    auth: {},
  };
};

// Reducer
export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;

    default:
      return state;
  }
}
