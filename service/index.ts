import { AsyncData, UseFetchOptions } from "nuxt/app";

type Method = "GET" | "POST"
const BASE_URL = 'http://codercba.com:9060/oppo-nuxt/api/'

export interface IResultData<T> { 
  code: number,
  data: T
}

class myRequest {
  request<T = any>(
    url: string,
    methods: Method,
    data?: any,
    options?: UseFetchOptions<T>
  ):Promise<AsyncData<T, Error>> {
    return new Promise((resolve, reject) => {
      const _options: UseFetchOptions<T> = {
        baseURL: BASE_URL,
        method: methods,
        ...options
      }
      const { method } = _options

      if (method === "GET") {
        _options.query = data
      } else if (method === 'POST') {
        _options.body = data
      }

      useLazyFetch<T>(url, _options as any)
        .then((res) => {
          console.log(res)
          return resolve(res as AsyncData<T, Error>)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  get<T = any>(url: string, data?: any, options?:UseFetchOptions<T>) {
    return this.request<T>(url, "GET", data, options)
  }

  post<T = any>(url: string, data?: any, options?:UseFetchOptions<T>) {
    return this.request<T>(url,"POST", data, options)
  }
}

export default new myRequest