import imageUrlBuilder from '@sanity/image-url'
import type { Image } from '@sanity/types'

export function urlFor(source: Image) {
  const sanity = useSanity()
  const builder = imageUrlBuilder(sanity.client)
  return builder.image(source)
}
