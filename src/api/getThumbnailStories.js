import { requestApi } from './requestApi'

export function getThumbnailStories() {
  return requestApi('thumbnail-stories')
}
