import { requestApi } from './requestApi'

export function getLatest() {
  return requestApi('latest')
}
