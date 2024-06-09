// @ts-nocheck

export type RealName = {
  middleName: string
  lastName: string
  firstName: string
} 

export type PhoneNumber = {
  countryCode: countryCode
  number: string
} 

// enum
export type gender = 'un_know'|'male'|'female'
// enum 对应的 dictKey
export const genderKey = 'e73c47f135949c497a91ebe4bfea50702dee76db7e6506e32e1289d3d3a0f02c' // 调整为 sha256(路径+名字)

// enum
export type countryCode = '86'|'63'
// enum 对应的 dictKey
export const countryCodeKey = 'd2c3cd5a1c398f20710cff13dff04ae5f023ea570ca0796c08cab87d5e09611a' // 调整为 sha256(路径+名字)

// enum
export type currency = 'USD'|'EUR'|'JPY'|'GBP'|'CNY'|'INR'|'BRL'|'RUB'|'CAD'|'AUD'|'ZAR'|'MXN'|'SGD'|'NZD'|'CHF'|'HKD'|'PHP'
// enum 对应的 dictKey
export const currencyKey = 'd7bcb831b44dcff729ef3e93478a3d8a360ee7e208e6b936299df1a220034c55' // 调整为 sha256(路径+名字)
