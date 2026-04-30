import { requestApi } from './requestApi'

export function getSearchNews() {
  return requestApi('search-news')
}
