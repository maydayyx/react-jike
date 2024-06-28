import axios from "axios";
import {getToken, removeToken} from "@/utils/token.js";
import router from "@/router/index.jsx";
import {message} from "antd";
// 根域名配置
// 超时时间
// 请求响应拦截器
const $f = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 5000
})

// 请求拦截器
$f.interceptors.request.use((config) => {
    const token = getToken()
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
}, (error) => {
    return Promise.reject(error)
})

// 响应拦截器
$f.interceptors.response.use((response) => {
    return response.data
}, async (error) => {
    switch (error.response.status) {
        case 401 :
            removeToken()
            await message.error('Token失效')
            router.navigate('/login')
    }
    return Promise.reject(error)
})

export {$f}