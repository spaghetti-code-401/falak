import { useContext, useReducer, createContext, useEffect } from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('socialUser')) || null,
  isFetching: false,
  error: false
};

export const AuthContext = createContext(INITIAL_STATE);

// custom hook
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('socialUser', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;