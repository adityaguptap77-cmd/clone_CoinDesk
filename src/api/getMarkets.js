import { requestApi } from './requestApi'

export function getMarkets() {
  return requestApi('markets')
}
