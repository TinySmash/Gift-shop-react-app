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
            switch(state.user.isLoggedIn){
                case false :
                    return null
                case true :
                    return state.user
            }
            
        default: 
            return state
    }
}