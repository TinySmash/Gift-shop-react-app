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
        default: 
            return state
    }
}