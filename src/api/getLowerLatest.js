import { requestApi } from './requestApi'

export function getLowerLatest() {
  return requestApi('lower-latest')
}
