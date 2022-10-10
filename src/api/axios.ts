import Axios from "axios"

const defaultConfig = {
  baseURL: "/api",
  withCredentials: true,
}

const api = Axios.create(defaultConfig)

export default api
