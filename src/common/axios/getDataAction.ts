import axios from "axios"

export function getDataAction(url: string, params: {} = {}) {
  return axios
    .get(url, params)
    .then((response: any) => ({ response }))
    .catch((error: any) => ({ error }))
}
