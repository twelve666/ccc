// @ts-nocheck
import { RealName } from "./types"
import { gender } from "./types"

export type Information = {
  value: string
  key: string
} 

export type Kyc = {
  birthday: Date
  medias: Media[]
  more: Information[]
  idType?: iDType
  idNumber?: string
  status?: status
  realName: RealName
  gender?: gender
} 

export type RejectCommand = {
  comment: string
} 

export type ApproveCommand = {
  comment: string
} 

export type Date = {
  year: number
  month: number
  day: number
} 

export type Media = {
  type: mediaType
  url: string
} 

// enum
export type mediaType = 'image'|'video'
// enum 对应的 dictKey
export const mediaTypeKey = 'fae1ef53210d033ee0f19ad7c436899dbddcc5e7d1eb9ea3054096bc434989ae' // 调整为 sha256(路径+名字)

// enum
export type status = 'pending'|'approved'|'rejected'
// enum 对应的 dictKey
export const statusKey = '6b70056f43e186a53c12ce8c5d43f57c16d8005c6562d7a5b7bef0e5683a759f' // 调整为 sha256(路径+名字)

// enum
export type iDType = 'passport'|'drivingLicense'|'idCard'
// enum 对应的 dictKey
export const iDTypeKey = '27c361ccbe6df7a33342842bd0146bba594e55c1706e63b2ce0d4e944ef3dea0' // 调整为 sha256(路径+名字)
