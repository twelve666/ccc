import axios, {AxiosError, type AxiosRequestConfig} from "axios"

const defaultBaseURL = 'http://clientapi.dev.philtech.io/api/v1';

const __instance = axios.create({
    baseURL: defaultBaseURL,
    headers: {
        "Content-Type": "application/json",
    }
})

type RequestConfig = AxiosRequestConfig & {
    pathVariables?: { [key: string]: string | number }
    ignoreAuth?: boolean
}

async function request<ResponseData>(config: RequestConfig) {
    const {
        method: _method,
        url: _url,
        pathVariables,
        ignoreAuth,
        ..._config
    } = config

    try {
        const method = `${_method}`.toUpperCase()
        const url = `${
            pathVariables
                ? // @ts-ignore
                _url?.replace(/{(\w+)}/g, (_, key) => {
                    return pathVariables[key]
                })
                : _url
        }`
        return await __instance.request<{ data: ResponseData, success: boolean }>({
            ..._config,
            url,
            method,
        }).then(res => res.data)
    } catch (_error) {
        // @ts-ignore
        if (_error.isAxiosError) {
            const error = _error as AxiosError
            throw `Request Error (Axios):\t${error.message}`
        }
        console.error(_error)
        // @ts-ignore
        throw `Request Error:\t${_error.message}`
    }
}

export {request}
