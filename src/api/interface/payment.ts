import { request } from '../../utils/request';
import { UpdateProviderCommand as PaymentResourceUpdateProviderCommand } from "../schema/resource"
import { UpdateProviderBalanceCommand as PaymentResourceUpdateProviderBalanceCommand } from "../schema/resource"
import { RechargeChannel } from "../schema/resource"
import { CreateRechargeChannelCommand as PaymentResourceCreateRechargeChannelCommand } from "../schema/resource"
import { CreateWithdrawChannelCommand as PaymentResourceCreateWithdrawChannelCommand } from "../schema/resource"
import { UpdateWithdrawChannelCommand as PaymentResourceUpdateWithdrawChannelCommand } from "../schema/resource"
import { Provider } from "../schema/resource"
import { CreateProviderCommand as PaymentResourceCreateProviderCommand } from "../schema/resource"
import { UpdateRechargeChannelCommand as PaymentResourceUpdateRechargeChannelCommand } from "../schema/resource"
import { WithdrawChannel } from "../schema/resource"
export async function getPaymentProviders() {
    return await request<Provider[]>({
        url: '/payment/providers',
        method: 'GET',
		ignoreAuth: false,
    })
}
export async function createProvider(data: PaymentResourceCreateProviderCommand) {
    return await request<string>({
        url: '/payment/provider',
        method: 'POST',data,
		ignoreAuth: false,
    })
}
export async function updateProvider(
  pathVariables: { 
	id: string,
  },data: PaymentResourceUpdateProviderCommand) {
    return await request({
        url: '/payment/provider/{id}',
        method: 'PATCH',data,pathVariables,
		ignoreAuth: false,
    })
}
export async function updateProviderBalance(
  pathVariables: { 
	id: string,
  },data: PaymentResourceUpdateProviderBalanceCommand) {
    return await request({
        url: '/payment/provider/{id}/balances',
        method: 'PATCH',data,pathVariables,
		ignoreAuth: false,
    })
}
export async function deleteProvider(
  pathVariables: { 
	id: string,
  },) {
    return await request({
        url: '/payment/provider/{id}',
        method: 'DELETE',pathVariables,
		ignoreAuth: false,
    })
}
export async function getRechargeChannels() {
    return await request<RechargeChannel[]>({
        url: '/payment/recharge-channels',
        method: 'GET',
		ignoreAuth: false,
    })
}
export async function createRechargeChannel(data: PaymentResourceCreateRechargeChannelCommand) {
    return await request<string>({
        url: '/payment/recharge-channel',
        method: 'POST',data,
		ignoreAuth: false,
    })
}
export async function updateRechargeChannel(
  pathVariables: { 
	id: string,
  },data: PaymentResourceUpdateRechargeChannelCommand) {
    return await request({
        url: '/payment/recharge-channel/{id}',
        method: 'PATCH',data,pathVariables,
		ignoreAuth: false,
    })
}
export async function deleteRechargeChannel(
  pathVariables: { 
	id: string,
  },) {
    return await request({
        url: '/payment/recharge-channel/{id}',
        method: 'DELETE',pathVariables,
		ignoreAuth: false,
    })
}
export async function getWithdrawChannels() {
    return await request<WithdrawChannel[]>({
        url: '/payment/withdraw-channels',
        method: 'GET',
		ignoreAuth: false,
    })
}
export async function createWithdrawChannel(data: PaymentResourceCreateWithdrawChannelCommand) {
    return await request<string>({
        url: '/payment/withdraw-channel',
        method: 'POST',data,
		ignoreAuth: false,
    })
}
export async function updateWithdrawChannel(
  pathVariables: { 
	id: string,
  },data: PaymentResourceUpdateWithdrawChannelCommand) {
    return await request({
        url: '/payment/withdraw-channel/{id}',
        method: 'PATCH',data,pathVariables,
		ignoreAuth: false,
    })
}
export async function deleteWithdrawChannel(
  pathVariables: { 
	id: string,
  },) {
    return await request({
        url: '/payment/withdraw-channel/{id}',
        method: 'DELETE',pathVariables,
		ignoreAuth: false,
    })
}
