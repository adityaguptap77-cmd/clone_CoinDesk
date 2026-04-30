import { requestApi } from './requestApi'

export function getFooterColumns() {
  return requestApi('footer-columns')
}
