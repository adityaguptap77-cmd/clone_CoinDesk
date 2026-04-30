import { requestApi } from './requestApi'

export function getSocialLinks() {
  return requestApi('social-links')
}
