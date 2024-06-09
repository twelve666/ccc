// @ts-nocheck
import { Pagination } from "./page"
import { BaseDoc } from "./mongox"

export type PageQuery = {
  displayOnly: boolean
  enabledOnly: boolean
  withProviders: boolean
  category?: category
  brandName?: string
}  & Pagination

export type PageData = {
  total: number
  query: PageQuery
  list: Game[]
} 

export type Provider = {
  name: string
  appName: string
  priority?: number
  enabled?: boolean
}  & BaseDoc

export type UpdateProviderCommand = {
  name: string
  priority: number
  enabled: boolean
} 

export type AddBrandCommand = {
  order: number
  name: string
  enabled: boolean
  display: boolean
  displayName: string
} 

export type AddProviderCommand = {
  enabled: boolean
  name: string
  priority: number
} 

export type UpdateBrandCommand = {
  enabled?: boolean
  display?: boolean
  displayName?: string
  order?: number
  name?: string
} 

export type Game = {
  brand?: Brand
  category: category
  providerNames: string[]
  providers: Provider[]
  displayName: string
  enabled: boolean
  icon: string
  brandName: string
  display: boolean
  order: number
  name: string
}  & BaseDoc

export type UpdateGameCommand = {
  brandName?: string
  category?: category
  name?: string
  displayName?: string
  order?: number
  icon?: string
  providerNames: string[]
  enabled?: boolean
  display?: boolean
} 

export type AddGameCommand = {
  enabled: boolean
  brandName: string
  category: category
  displayName: string
  display: boolean
  order: number
  icon: string
  providerNames: string[]
  name: string
} 

export type Brand = {
  name?: string
  enabled?: boolean
  display?: boolean
  displayName?: string
  order?: number
}  & BaseDoc

// enum
export type category = 'slot'|'live'|'sport'|'chess'|'fish'
// enum 对应的 dictKey
export const categoryKey = '5ab42db3681b1e01d7bc1b9c67e2356333618ba7d49be962577a08f44e5d09c5' // 调整为 sha256(路径+名字)
