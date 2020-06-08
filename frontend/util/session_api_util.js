export const signup = user => {
    // debugger;
    return $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user }
    }) 
}

export const login = user => {
    return $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
}

export const logout = () => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
}

export const getEmail = email => {
    ;
    return $.ajax({
        method: 'GET',
        url: `/api/users/email?email=${email}`
    })
}