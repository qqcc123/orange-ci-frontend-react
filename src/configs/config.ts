
// 开发环境默认配置
let _serverIp: string = 'http://192.168.1.222'
let _port: string = '1111'
let _baseURL: string = `${_serverIp}:${_port}`
let _mockURL: string = 'http://localhost:1111/'

if (process.env.NODE_ENV === 'testing') { 
  _mockURL = 'http://localhost:1111/'
  _port = '1111'
  _baseURL = `${_serverIp}:${_port}`
} else if (process.env.NODE_ENV === 'production') { 
  _port = '1111'
  _serverIp = 'http://192.168.1.123'
  _baseURL = `${_serverIp}:${_port}`
}

export const set = 'set$'
export const brandName = 'React'
export const serverIp = _serverIp
export const path = '/mock'
export const timeout = '15000'
export const baseURL = _baseURL
export const mockURL = _mockURL
