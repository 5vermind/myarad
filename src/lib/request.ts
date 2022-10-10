/* eslint-disable no-redeclare */
import { AxiosRequestConfig, AxiosResponse } from "axios"
import {
  AugmentedResponse,
  AxiosMethodsBody,
  AxiosMethodsQuery,
} from "../types/request"

function request<T>(
  method: AxiosMethodsQuery<T>,
  url: string,
  config?: AxiosRequestConfig
): Promise<T>

function request<T, D>(
  method: AxiosMethodsBody<T>,
  url: string,
  config?: AxiosRequestConfig,
  body?: D
): Promise<T>

async function request<T, D = unknown>(
  method: AxiosMethodsBody<T> & AxiosMethodsQuery<T>,
  url: string,
  config?: AxiosRequestConfig,
  body?: D
): Promise<T> {
  const { data } = await method(url, body, config)
  return data
}
function requestWithOptions<T>(
  method: AxiosMethodsQuery<T>,
  url: string,
  config?: AxiosRequestConfig,
  options?: string[]
): Promise<AugmentedResponse<T>>

function requestWithOptions<T, D>(
  method: AxiosMethodsBody<T>,
  url: string,
  config?: AxiosRequestConfig,
  body?: D,
  options?: string[]
): Promise<AugmentedResponse<T>>

async function requestWithOptions<T, D = unknown>(
  method: AxiosMethodsBody<T> & AxiosMethodsQuery<T>,
  url: string,
  config?: AxiosRequestConfig,
  body?: D,
  options?: string[]
): Promise<AugmentedResponse<T>> {
  const response = await method(url, body, config)
  const result: AugmentedResponse<T> = { data: response.data }
  if (options) {
    options.forEach((option) => {
      result[option] = response[option as keyof AxiosResponse]
    })
  }
  return result
}

export { request, requestWithOptions }
