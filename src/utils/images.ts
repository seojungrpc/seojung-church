import data from '../data/images.json';

export interface Slide { image: string; alt?: string; caption?: string; }

export const homeSlides: Slide[] = (data as any).homeSlides ?? [];

export function pageImages(key: string): { hero: string; gallery: string[] } {
  const p = ((data as any).pages ?? {})[key] ?? {};
  return { hero: p.hero || '', gallery: Array.isArray(p.gallery) ? p.gallery.filter(Boolean) : [] };
}
