import { request } from '../../utils/request';
import { Item } from "../schema/dict"
import { GetUploadLinkCommand } from "../schema/uploadx"
import { UploadRequest } from "../schema/uploadx"
export async function getDictMap() {
    return await request<Record<string, Item[]>>({
        url: '/dict',
        method: 'GET',
		ignoreAuth: false,
    })
}
export async function getDictByID(
  pathVariables: { 
	id: string,
  },) {
    return await request<Item[]>({
        url: '/dict/{id}',
        method: 'GET',pathVariables,
		ignoreAuth: false,
    })
}
export async function getUploadLink(params: GetUploadLinkCommand,) {
    return await request<UploadRequest>({
        url: 'upload-link',
        method: 'GET',params,
		ignoreAuth: false,
    })
}
export async function getSmsOtpRecords() {
    return await request({
        url: '/sms-otp',
        method: 'GET',
		ignoreAuth: false,
    })
}
