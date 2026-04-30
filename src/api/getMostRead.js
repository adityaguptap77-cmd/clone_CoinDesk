import { requestApi } from './requestApi'

export function getMostRead() {
  return requestApi('most-read')
}
