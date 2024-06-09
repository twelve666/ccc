// @ts-nocheck
import { gender } from "./types"

export type BasicInfo = {
  avatarUrl: string
  nickname: string
  gender: gender
} 

export type UpdateCommand = {
  avatarUrl?: string
  nickname?: string
  gender?: gender
} 
