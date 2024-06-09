// @ts-nocheck

export type UserBalance = {
  balance: string
  available: string
  withdrawable: string
  remainingWager: string
} 

export type AdjustCommand = {
  amount?: string
  wagerReqMult?: string
  wagerTaskDeduction?: string
} 
