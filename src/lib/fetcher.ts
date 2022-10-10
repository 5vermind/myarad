import Axios, { AxiosRequestConfig } from "axios"
import { request } from "./request"

const defaultConfig = {
  baseURL: "/api",
  withCredentials: true,
}

const axios = Axios.create(defaultConfig)

export const get = async <T>(url: string, config?: AxiosRequestConfig<any>) =>
  request<T>(axios.get, url, config)

export const post = async <T, D extends {}>(
  url: string,
  body?: D,
  config?: AxiosRequestConfig<any>
) => request<T, D>(axios.post, url, config, body)

export const put = async <T, D extends {}>(
  url: string,
  body?: D,
  config?: AxiosRequestConfig<any>
) => request<T, D>(axios.put, url, config, body)

export const patch = <T, D extends {}>(
  url: string,
  body?: D,
  config?: AxiosRequestConfig<any>
) => request<T, D>(axios.patch, url, config, body)

export const del = async <T>(url: string, config?: AxiosRequestConfig<any>) =>
  request<T>(axios.delete, url, config)
