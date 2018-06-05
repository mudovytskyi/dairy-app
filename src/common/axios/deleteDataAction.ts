import axios from "axios"

export function deleteDataAction(url: string, params: any) {
  url = url.replace(":id", params.id)

  return axios
    .delete(url, params)
    .then((response: any) => ({ response }))
    .catch((error: any) => ({ error }))
}
