import axios from "axios";
import { httpConfig, httpMethod, httpParam } from '../defines/netDefines'
import { timeout, baseURL } from "./config";
import { AxiosRequestConfig, AxiosResponse } from 'axios'

const { CancelToken } = axios

let baseConfig : httpConfig = {
    url: '/',
    methord: httpMethod.post,
    baseUrl: baseURL,
    timeOut: timeout,
    headers: {
        'content-type': 'text/plain'
    },
    params: {},
    withCredentials: true,
    test: 'test any types from interface in ts'
}

export const postRequest = (api: string, options: httpParam) => {
    if (typeof api == 'function') {
        return api
    }

    return (...rest: any[]) => {
        const data = rest[0] || {}
        const token = sessionStorage.getItem('token')
        let success: any = null
        let failure: any = null
        let config: any = null
        rest.forEach(element => {
            if (typeof element == 'function') {
                if (!success) {
                    success = element
                } else {
                    failure = element
                }
            }
            
            if (Object.prototype.toString.call(element) == '[object Object]') {
                config = element
            }
        });

        const hooks: any = {
            abort: null
        }
        const cancelToken = new CancelToken(c => {
            hooks.abort = c
        })

        // 如果是用的30上的mock的服务，那么就默认不带cookie到服务器
        if (options && (options.baseURL.indexOf('12602') !== -1)) {
            baseConfig.withCredentials = false
        } else {
            baseConfig.withCredentials = true
        }

        const axiosConfig : AxiosRequestConfig = {
            ...baseConfig,
            ...options,
            ...config,
            url: api,
            data: data,
            cancelToken: cancelToken
        }
        axios(axiosConfig).then((response: AxiosResponse) => {
            response.data
        }).catch(e => {

        }) 

    }
}

export const parseQueryString = (url: string) : any => {
    const queryObj : {[key: string] : any} = {}
    if (url.indexOf('?') !== -1) {
      const str = url.split('?')[1]
      const strs = str.split('&')
      strs.map((_, i) => {
        let data = strs[i].split('=')
        queryObj[data[0]] = data[1]
      })
    }
    return queryObj
  }

export const createApi = (api: string, options: httpParam) => {
    const queryObj = parseQueryString(window.location.href)
    let url = api
    if (queryObj.key) {
        url = `${api}?key=${queryObj.key}`
        if (queryObj.sourceName) {
            url = `${api}?key=${queryObj.key}&sourceName=${queryObj.sourceName}`
        }
    }
    return postRequest(`${url}`, options)
}