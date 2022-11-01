const initialState = {
    user : {
        isLoggedIn : false,
        userName : '',
        email : '',
        password : ''
    }
};

export default function(state = initialState, action){
    switch(action.type){
        case 'GET_USER':
            initialState.user = action.payload;
        case 'CHECK_USER':
            return{
                ...state
            }
        default: 
            return state
    }
}