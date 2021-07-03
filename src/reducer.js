export const initialState = {
  user: null,
  model: [],
  videos: [],
  userName: "",
  logins: 0,
};


const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      
    case "UPDATE_MODELS":
      return { ...state, model: action.items };

    case "UPDATE_VIDEOS":
      return { ...state, videos: action.items };
    
    case "SET_USERNAME":
      return { ...state, userName: action.userName};

    case "INCREMENT_LOGIN":
      return {...state,login: action.login}
      
    default:
      return state;
  }
};

export default reducer;
