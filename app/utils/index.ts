import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "@sanity/types";

export function urlFor(source: Image) {
  const sanity = useSanity();
  const builder = imageUrlBuilder(sanity.client);
  return builder.image(source);
}

export function formatDay(deliveryTime: number) {
  const prelastDigit = (deliveryTime % 100) / 10;
  if (prelastDigit == 1) return "дней";

  switch (deliveryTime % 10) {
    case 1:
      return "день";
    case 2:
    case 3:
    case 4:
      return "дня";
    default:
      return "дней";
  }
}

export function getDomainWithoutTld(url: string): string | null {
  try {
    const parsedUrl = new URL(url);
    const domain = parsedUrl.hostname;

    const cleanDomain = domain.startsWith("www.")
      ? domain.substring(4)
      : domain;

    const domainParts = cleanDomain.split(".");

    return domainParts.length > 1
      ? domainParts[domainParts.length - 2]
      : domainParts[0];
  } catch (error) {
    console.error("Invalid URL:", error);
    return null;
  }
}
