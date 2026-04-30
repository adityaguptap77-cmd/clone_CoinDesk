import { requestApi } from './requestApi'

export function getExploreVideos() {
  return requestApi('explore-videos')
}
