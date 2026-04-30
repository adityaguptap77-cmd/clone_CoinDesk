import { requestApi } from './requestApi'

export function getLegalLinks() {
  return requestApi('legal-links')
}
