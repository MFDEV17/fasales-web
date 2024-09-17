import imageUrlBuilder from '@sanity/image-url'
import type { Image } from '@sanity/types'

export function urlFor(source: Image) {
  const sanity = useSanity()
  const builder = imageUrlBuilder(sanity.client)
  return builder.image(source)
}

export function formatDay(deliveryTime: number) {
  const lastDigit = (deliveryTime % 100) / 10
  if (lastDigit == 1) return 'дней'

  switch (deliveryTime % 10) {
    case 1:
      return 'день'
    case 2:
    case 3:
    case 4:
      return 'дня'
    default:
      return 'дней'
  }
}
