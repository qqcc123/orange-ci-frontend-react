import * as http from 'http'

export enum httpMethod {
    'post',
    'get',
    'delete'
}

export interface httpConfig {
    url: string,

    methord: httpMethod,

    baseUrl: string,

    headers: http.IncomingHttpHeaders,

    params: object,

    timeOut: string,

    withCredentials: boolean,

    //上述类型必须为任意类型的子类型
    [key: string] : string | httpMethod | http.IncomingHttpHeaders | object | boolean,  
}

export interface httpParam {
    baseURL: string
}