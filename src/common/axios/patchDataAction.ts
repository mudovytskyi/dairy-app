import axios from "axios"

export function patchDataAction(url: string, params: any) {
  url = url.replace(":id", params.id)
  
  return axios
    .patch(url, params)
    .then((response: any) => ({ response }))
    .catch((error: any) => ({ error }))
}
