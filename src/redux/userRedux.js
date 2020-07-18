export const getUser  = ({ user}) => user;

const reducerName = 'user';
const createActionName = (name) => `app/${reducerName}/${name}`;

const LOGGED = createActionName('LOGGED');
const LOGOUT = createActionName('LOGGOUT');

export const logged = (payload) => ({ payload, type: LOGGED });
export const logout = (payload) => ({ payload, type: LOGOUT });

export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case LOGGED: {
      return {
        ...statePart,
        authenticated: true,
      };
    }
    case LOGOUT: {
      return {
        ...statePart,
        authenticated: false,
      };
    }
    default:
      return statePart;
  }
};
