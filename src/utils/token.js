const getToken = () => {
   return  localStorage.getItem('token')
}

const changeToken = (token) => {
    localStorage.setItem('token',token)
}

const removeToken = () => {
    localStorage.removeItem('token')
}

export {
    changeToken,
    getToken,
    removeToken
}