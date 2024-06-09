// @ts-nocheck
import { UserBalance } from "./balance"
import { PhoneNumber } from "./types"
import { gender } from "./types"
import { status } from "./kyc"
import { BaseDoc } from "./mongox"
import { Pagination } from "./page"
import { BasicInfo } from "./basicinfo"

export type Player = {
  basicInfo?: BasicInfo
  balance: UserBalance
  phoneNumber?: PhoneNumber
  gender?: gender
  online: boolean
  total: Total
  email?: string
  username?: string
  loginPassword?: string
  realName?: string
  kycStatus?: status
}  & BaseDoc

export type Profile = {
  list: Player[]
  total: number
  query: PageQuery
} 

export type Total = {
  visitTimes: number
  rechargeTimes: number
  rechargeAmount: string
  withdrawTimes: number
  withdrawAmount: string
  betTimes: number
  betAmount: string
  winAmount: string
} 

export type PageQuery = {
  keywords?: string
  onlineOnly?: boolean
  kycStatus?: status
}  & Pagination
