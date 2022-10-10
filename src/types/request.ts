import { AxiosResponse, AxiosRequestConfig } from "axios"

export type AxiosMethodsQuery<T = any, R = AxiosResponse<T>, D = any> = (
  url: string,
  config?: AxiosRequestConfig<D>
) => Promise<R>

export type AxiosMethodsBody<T = any, R = AxiosResponse<T>, D = any> = (
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>
) => Promise<R>

export interface AugmentedResponse<T> {
  data: T
  [key: string]: any
}

export type ValueOf<T> = T[keyof T]
