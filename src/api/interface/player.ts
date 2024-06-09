import { request } from '../../utils/request';
import { PageQuery } from "../schema/player"
import { UpdateCommand as UserBasicinfoUpdateCommand } from "../schema/basicinfo"
import { UpdateCommand as UserPhoneUpdateCommand } from "../schema/phone"
import { AdjustCommand as UserBalanceAdjustCommand } from "../schema/balance"
import { ApproveCommand as UserKycApproveCommand } from "../schema/kyc"
import { RejectCommand as UserKycRejectCommand } from "../schema/kyc"
import { Profile } from "../schema/player"
import { UpdateCommand as UserLoginpwdUpdateCommand } from "../schema/loginpwd"
import { UpdateCommand as UserEmailUpdateCommand } from "../schema/email"
import { Kyc } from "../schema/kyc"
export async function getProfile() {
  return await request<Profile>({
    url: '/profile',
    method: 'GET',
    ignoreAuth: false,
  });
}

export async function updateBasicInfo(
  pathVariables: { 
	id: string,
  },data: UserBasicinfoUpdateCommand) {
    return await request({
        url: '/player/{id}/basic-info',
        method: 'PUT',data,pathVariables,
		ignoreAuth: false,
    })
}
export async function updateLoginPassword(
  pathVariables: { 
	id: string,
  },data: UserLoginpwdUpdateCommand) {
    return await request({
        url: '/player/{id}/login-password',
        method: 'PUT',data,pathVariables,
		ignoreAuth: false,
    })
}
export async function updatePhone(
  pathVariables: { 
	id: string,
  },data: UserPhoneUpdateCommand) {
    return await request({
        url: 'player/{id}/phone',
        method: 'PUT',data,pathVariables,
		ignoreAuth: false,
    })
}
export async function updateEmail(
  pathVariables: { 
	id: string,
  },data: UserEmailUpdateCommand) {
    return await request({
        url: 'player/{id}/email',
        method: 'PUT',data,pathVariables,
		ignoreAuth: false,
    })
}
export async function getKyc(
  pathVariables: { 
	id: string,
  },) {
    return await request<Kyc>({
        url: '/player/{id}/kyc',
        method: 'GET',pathVariables,
		ignoreAuth: false,
    })
}
export async function approveKyc(
  pathVariables: { 
	id: string,
  },data: UserKycApproveCommand) {
    return await request({
        url: '/player/{id}/kyc/approve',
        method: 'POST',data,pathVariables,
		ignoreAuth: false,
    })
}
export async function rejectKyc(
  pathVariables: { 
	id: string,
  },data: UserKycRejectCommand) {
    return await request({
        url: '/player/{id}/kyc/reject',
        method: 'POST',data,pathVariables,
		ignoreAuth: false,
    })
}
export async function adjustBalance(
  pathVariables: { 
	id: string,
  },data: UserBalanceAdjustCommand) {
    return await request({
        url: '/player/{id}/balance',
        method: 'POST',data,pathVariables,
		ignoreAuth: false,
    })
}
