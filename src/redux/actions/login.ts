import { createAction } from "@reduxjs/toolkit";
import { createAjaxAction } from "../../configs/common";
import * as common from '../../api/apiManager'

export const requestLogin = createAction('request_login')
export const recevieLogin = createAction('receive_login')
export const login = createAjaxAction(common.login, requestLogin, recevieLogin)