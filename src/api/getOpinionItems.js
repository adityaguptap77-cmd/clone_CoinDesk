import { requestApi } from './requestApi'

export function getOpinionItems() {
  return requestApi('opinion-items')
}
