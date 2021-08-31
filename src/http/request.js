import axios from 'axios'
import { baseApi } from '@/config'
import { Toast } from 'vant'
import store from "@/store"


// 基础配置
const service = axios.create({
    baseURL: baseApi, // url = base api url + request url
    // withCredentials: true, // send cookies when cross-domain requests 请求是否携带Cookies
    timeout: 5000 // request timeout
})

let loading;

// 请求拦截
service.interceptors.request.use(config => {
    loading = Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 3000, // 持续展示 toast
    });
    config.headers['Authorization'] = 'Bearer ' + store.state.remember_token
    return config
})

// 响应拦截
service.interceptors.response.use(res => {
    loading.clear();
    return Promise.resolve(res.data)
}, error => {
    Toast.clear()
    console.log('err' + error) // for debug
    return Promise.reject(error)
})

export default service