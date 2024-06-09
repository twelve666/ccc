// @ts-nocheck
import { currency } from "./types"
import { BaseDoc } from "./mongox"

export type UpdateRechargeChannelCommand = {
  name?: string
  displayName?: string
  currency?: currency
  icon?: string
  method?: rechargeMethod
  limitMin?: string
  limitMax?: string
  enabled?: boolean
  sort?: number
} 

export type CreateWithdrawChannelCommand = {
  limitMin: string
  limitMax: string
  enabled?: boolean
  name?: string
  currency?: currency
  icon?: string
  sort?: number
} 

export type UpdateWithdrawChannelCommand = {
  currency?: currency
  icon?: string
  sort?: number
  limitMin?: string
  limitMax?: string
  enabled?: boolean
  name?: string
} 

export type WithdrawChannel = {
  sort?: number
  limitMin: string
  limitMax: string
  enabled?: boolean
  name: string
  currency?: currency
  icon?: string
}  & BaseDoc

export type CreateProviderCommand = {
  name?: string
  enabled?: boolean
  rechargeConfigs?: Record<string, RechargeConfig>
  withdrawConfigs?: Record<string, WithdrawConfig>
} 

export type CreateRechargeChannelCommand = {
  displayName?: string
  currency?: currency
  sort?: number
  enabled?: boolean
  name?: string
  method?: rechargeMethod
  limitMin: string
  limitMax: string
  icon?: string
} 

export type WithdrawConfig = {
  enabled?: boolean
  limitMin: string
  limitMax: string
  priority?: number
} 

export type UpdateProviderBalanceCommand = {
  balance: string
  availableBalance: string
} 

export type Provider = {
  balance: string
  enabled?: boolean
  rechargeConfigs?: Record<string, RechargeConfig>
  withdrawConfigs?: Record<string, WithdrawConfig>
  name: string
  availableBalance: string
}  & BaseDoc

export type UpdateProviderCommand = {
  enabled?: boolean
  rechargeConfigs?: Record<string, RechargeConfig>
  withdrawConfigs?: Record<string, WithdrawConfig>
  name?: string
} 

export type RechargeConfig = {
  limitMin: string
  limitMax: string
  priority?: number
  enabled?: boolean
} 

export type RechargeChannel = {
  displayName?: string
  currency?: currency
  sort?: number
  method?: rechargeMethod
  name: string
  limitMin: string
  limitMax: string
  enabled?: boolean
  icon?: string
}  & BaseDoc

// enum
export type rechargeMethod = 'redirect'|'exchange'
// enum 对应的 dictKey
export const rechargeMethodKey = 'ba00faaffcefaee771fff57edf0e9a2c3cd6d744c2d07d3daf72ba5018f0f62b' // 调整为 sha256(路径+名字)
