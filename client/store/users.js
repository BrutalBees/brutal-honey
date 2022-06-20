import axios from "axios";

const token = window.localStorage.getItem('token');

const SET_USERS = 'SET_USERS';

const setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  }
};

export const fetchUsers = () => {
  return async (dispatch) => {
    const { data: users } = await axios.get('/api/users', {
      headers: {
        authorization: token
      }
    });
    dispatch(setUsers(users));
  }
};

export default (state = [], action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    default:
      return state;
  }
};
