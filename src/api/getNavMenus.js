import { requestApi } from './requestApi'

export function getNavMenus() {
  return requestApi('nav-menus')
}
