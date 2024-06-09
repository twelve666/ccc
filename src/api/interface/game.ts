import { request } from '../../utils/request';
import { UpdateGameCommand as GameUpdateGameCommand } from "../schema/game"
import { AddProviderCommand as GameAddProviderCommand } from "../schema/game"
import { UpdateProviderCommand as GameUpdateProviderCommand } from "../schema/game"
import { UpdateBrandCommand as GameUpdateBrandCommand } from "../schema/game"
import { PageQuery } from "../schema/game"
import { AddGameCommand as GameAddGameCommand } from "../schema/game"
import { Brand } from "../schema/game"
import { AddBrandCommand as GameAddBrandCommand } from "../schema/game"
import { PageData } from "../schema/game"
import { Provider } from "../schema/game"

export async function getGames(params: PageQuery,) {
    return await request<PageData>({
        url: '/games',
        method: 'GET',params,
		ignoreAuth: false,
    })
}
export async function addGame(data: GameAddGameCommand) {
    return await request<string>({
        url: '/game',
        method: 'POST',data,
		ignoreAuth: false,
    })
}
export async function updateGame(
  pathVariables: { 
	id: string,
  },data: GameUpdateGameCommand) {
    return await request({
        url: '/game/{id}',
        method: 'PATCH',data,pathVariables,
		ignoreAuth: false,
    })
}
export async function deleteGame(
  pathVariables: { 
	id: string,
  },) {
    return await request({
        url: '/game/{id}',
        method: 'DELETE',pathVariables,
		ignoreAuth: false,
    })
}
export async function getProviders() {
    return await request<Provider[]>({
        url: '/game/providers',
        method: 'GET',
		ignoreAuth: false,
    })
}
export async function addProvider(data: GameAddProviderCommand) {
    return await request<string>({
        url: '/game/provider',
        method: 'POST',data,
		ignoreAuth: false,
    })
}
export async function updateProvider(
  pathVariables: { 
	id: string,
  },data: GameUpdateProviderCommand) {
    return await request({
        url: '/game/provider/{id}',
        method: 'PATCH',data,pathVariables,
		ignoreAuth: false,
    })
}
export async function deleteProvider(
  pathVariables: { 
	id: string,
  },) {
    return await request({
        url: '/game/provider/{id}',
        method: 'DELETE',pathVariables,
		ignoreAuth: false,
    })
}
export async function getBrands() {
    return await request<Brand[]>({
        url: '/game/brands',
        method: 'GET',
		ignoreAuth: false,
    })
}
export async function addBrand(data: GameAddBrandCommand) {
    return await request<string>({
        url: '/game/brand',
        method: 'POST',data,
		ignoreAuth: false,
    })
}
export async function updateBrand(
  pathVariables: { 
	id: string,
  },data: GameUpdateBrandCommand) {
    return await request({
        url: '/game/brand/{id}',
        method: 'PATCH',data,pathVariables,
		ignoreAuth: false,
    })
}
export async function deleteBrand(
  pathVariables: { 
	id: string,
  },) {
    return await request({
        url: '/game/brand/{id}',
        method: 'DELETE',pathVariables,
		ignoreAuth: false,
    })
}
