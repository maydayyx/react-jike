import axios from "axios";

// 根域名配置
// 超时时间
// 请求响应拦截器
const $f = axios.create({
    baseURL:'http://geek.itheima.net/v1_0',
    timeout:5000
})

// 请求拦截器
$f.interceptors.request.use((config)=>{
    return config
},(error)=>{
    return Promise.reject(error)
})

// 响应拦截器
$f.interceptors.response.use((response)=>{
    return response.data
},(error)=>{
    return Promise.reject(error)
})

export {$f}