import { createApi } from '../configs/ajaxBase'
import { mockURL, path } from '../configs/config'
import { httpParam } from '../defines/netDefines'

const prefix = 'usercenter'
const option: httpParam = { 
    baseURL: mockURL 
}

export const login = createApi(`${path}/${prefix}/login`, option) //登录