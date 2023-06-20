import { postRequestRes } from '../defines/funDefines'

export const createAjaxAction = (postFunc: postRequestRes, startAction: any, endAction: any) => 
    (request: any = {}, resolve: any, reject: any, config: any) => 
    (dispatch: any) => {
        if (startAction) {
            dispatch(startAction({req: request, res: {}}))
        }

        const _resolve = (response: any) => {
            if (endAction) {
                dispatch(endAction({req: request, res: response}))
            }

            if (resolve) {
                resolve(response)
            }
        }

        return postFunc(request, _resolve, reject, config)
}