import axios from 'axios'

// 创建axios 实例
const service = axios.create({
    baseURL: process.env.BASE_API,  // api 的 base_url
    timeout: 5000  // 请求超时时间
})

// request 拦截器
service.interceptors.request.use(
    config => {
        // 这里可以自定义一些 config 配置
        return config
    },
    error => {
        // 这里处理一些请求出错的情况
        console.log(error)
        Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        // 这里处理一些 response 正常返回时的逻辑
        return res
    },
    error => {
        // 这里处理一些 response 出错时的逻辑
        return Promise.reject(error)
    }
)

export default service
