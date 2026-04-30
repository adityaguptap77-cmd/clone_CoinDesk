import { requestApi } from './requestApi'

export function getNewsLinks() {
  return requestApi('news-links')
}
