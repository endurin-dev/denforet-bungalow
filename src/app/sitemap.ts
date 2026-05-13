import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://denforetbungalow.com', lastModified: new Date() },
    { url: 'https://denforetbungalow.com/about', lastModified: new Date() },
    { url: 'https://denforetbungalow.com/rooms', lastModified: new Date() },
    { url: 'https://denforetbungalow.com/attractions', lastModified: new Date() },
    { url: 'https://denforetbungalow.com/contact', lastModified: new Date() },
  ];
}
