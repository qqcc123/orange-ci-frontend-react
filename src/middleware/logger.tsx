import { Middleware, Dispatch, MiddlewareAPI } from 'redux'

const loggerMiddleware: Middleware = (store : MiddlewareAPI) => (next : Dispatch) => (action : any) => {
    console.log("---qqcc---loggerMiddleware---")
    return next(action)
}

export default loggerMiddleware