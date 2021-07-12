const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        isFetching: true,
        error: false
      };

    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        isFetching: false,
        error: false
      };

    case 'LOGIN_FAILURE':
      console.log(action.payload);
      return {
        user: null,
        isFetching: false,
        error: action.payload
      };

    case 'FOLLOW':
      console.log(action.payload);
      return {
        ...state,
        user: {
          ...state.user,
          following: [...state.user.following, action.payload]
        }
      };

    case 'UNFOLLOW':
      console.log(action.payload);
      return {
        ...state,
        user: {
          ...state.user,
          following: state.user.following.filter((f) => f !== action.payload)
        }
      };

    default:
      return state;
  }
};

export default AuthReducer;