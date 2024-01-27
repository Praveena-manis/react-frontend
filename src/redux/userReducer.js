const initialState={
    user:{},
    token: null,
    ok: false,
};
export const userReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isAdmin: action.payload.isAdmin,
            };
        case "LOGIN_ERROR":
            return initialState;
         case 'CHECK_AUTH':
      return {
        ...state,
        ok: action.payload.ok,
      };
        default:
            return state;
    }

}