import { createContext, useReducer } from 'react';
import { userReducer } from '../reducers/userReducer';

// Initialize the state
const INITIAL_STATE = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {},
  error: {},
};

// Create the context
export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
