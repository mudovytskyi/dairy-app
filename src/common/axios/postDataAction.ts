import axios from "axios"

export function postDataAction(url: string, params: {}) {
  return axios
    .post(url, params)
    .then((response: any) => ({ response }))
    .catch((error: any) => ({ error }))
}
