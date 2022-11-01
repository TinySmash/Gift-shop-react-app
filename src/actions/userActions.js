export const getUser = (user) => {
    return {
        type : 'GET_USER',
        payload : user,
    }
}

export const checkUser = () => {
    return {
        type : 'CHECK_USER',
        payload : null
    }
}