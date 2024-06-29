import {$f} from "@/utils/index.js";

function loginAPI(formData) {
    return $f({
        url: '/authorizations', method: 'POST', data: formData
    })
}

function userInfoAPI() {
    return $f({
        url: '/user/profile',
        method: 'GET',
    })
}

export {
    loginAPI,
    userInfoAPI
}
