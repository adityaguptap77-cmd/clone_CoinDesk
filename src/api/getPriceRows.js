import { requestApi } from './requestApi'

export function getPriceRows() {
  return requestApi('price-rows')
}
