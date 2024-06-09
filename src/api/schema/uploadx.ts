// @ts-nocheck

export type UploadHeader = {
  contentType: string
  contentLength: number
} 

export type GetUploadLinkCommand = {
  filename: string
  fileContentType: contentType
  contentLength: number
} 

export type UploadRequest = {
  header: UploadHeader
  uploadLink: string
  visitLink: string
} 

// enum
export type contentType = 'video/mp4'|'video/mpeg'|'image/jpeg'|'image/png'|'image/gif'|'audio/mpeg'|'audio/wav'
// enum 对应的 dictKey
export const contentTypeKey = '8bfc81f28ae1503856111ede1c544cb25a6671d9c093d9cd082edb568d202144' // 调整为 sha256(路径+名字)
