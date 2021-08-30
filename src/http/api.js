import request from "./request"
import address from './address'

// 发送验证码的请求
export function sms_code(arg) {
    return request({
        url: address.smsCode,
        data: arg,
        method: "post"
    })
}

// 登陆的请求
export function login(arg) {
    return request({
        url: address.login,
        data: arg,
        method: "post"
    })
}

//  设置登陆密码/修改
export function setPassword(arg) {
    return request({
        url: address.password,
        data: arg,
        method: "post"
    })
}



// 首页底部tabbar的请求
export function bottom(arg) {
    return request({
        url: address.bottom,
        data: arg,
        method: "get"
    })
}

// 首页头部轮播图数据
export function index_banner(arg) {
    return request({
        url: address.banner,
        data: arg,
        method: "get"
    })
}

// 首页大威天龙的数据
export function nav(arg) {
    return request({
        url: address.nav,
        data: arg,
        method: "get"
    })
}

// 首页资深讲师
export function appIndex(arg) {
    return request({
        url: address.appIndex,
        data: arg,
        method: "get"
    })
}