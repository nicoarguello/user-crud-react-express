let initialState = {
    UsersList: [],
};


const rootReducer = (state=initialState,action)=>{

    switch (action.type) {
        case 'FET_ALL_USERS':
            return {
                ...state,UsersList: action.payload
            }
        default:
            return {...state}
    }

}
export default rootReducer;
