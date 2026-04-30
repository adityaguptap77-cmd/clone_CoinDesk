import { requestApi } from './requestApi'

export function getCategorySections() {
  return requestApi('category-sections')
}
