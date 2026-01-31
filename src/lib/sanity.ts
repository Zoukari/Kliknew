import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const sanityClient = createClient({
  projectId: 'ilu5dvrl',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export type SanityPost = {
  _id: string;
  slug: string;
  title: string;
  excerpt?: string;
  mainImage?: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  publishedAt: string;
  body?: any[];
};

export async function getPosts(): Promise<SanityPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) [0...12] {
  _id,
  "slug": slug.current,
  title,
  excerpt,
  mainImage,
  publishedAt,
  body
}`;
  return sanityClient.fetch(query);
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  "slug": slug.current,
  title,
  excerpt,
  mainImage,
  publishedAt,
  body
}`;
  return sanityClient.fetch(query, { slug });
}
