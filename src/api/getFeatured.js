import { requestApi } from './requestApi'

export function getFeatured() {
  return requestApi('featured')
}
