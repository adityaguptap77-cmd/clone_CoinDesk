import { requestApi } from './requestApi'

export function getSearchAssets() {
  return requestApi('search-assets')
}
