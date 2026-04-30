import { requestApi } from './requestApi'

export function getCountdownBanner() {
  return requestApi('countdown-banner')
}
