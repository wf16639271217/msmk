import request from "./request"
import address from './address'

export function sms_code(arg) {
    return request({
        url: address.smsCode,
        data: arg,
        method: "post"
    })
}

export function login(arg) {
    return request({
        url: address.smsCode,
        data: arg,
        method: "post"
    })
}