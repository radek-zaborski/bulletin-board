export const getUser  = ({ user}) => user;

const reducerName = 'user';
const createActionName = (name) => `app/${reducerName}/${name}`;

const LOGIN = createActionName('LOGIN');
const LOGOUT = createActionName('LOGOUT');

export const login = (payload) => ({ payload, type: LOGIN });
export const logout = (payload) => ({ payload, type: LOGOUT });

export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...statePart,
        auth: true,
      };
    }
    case LOGOUT: {
      return {
        ...statePart,
        auth: false,
      };
    }
    default:
      return statePart;
  }
};
