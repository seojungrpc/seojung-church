import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://seojungrpc.com';

export const GET: APIRoute = async () => {
  const staticPaths = ['/', '/about', '/beliefs', '/worship', '/sermons', '/news', '/resources', '/rp-history', '/visit'];
  const sermons = await getCollection('sermons', ({ data }) => !data.draft);
  const news = await getCollection('news', ({ data }) => !data.draft);

  const urls: { loc: string; lastmod?: string }[] = [];
  for (const p of staticPaths) urls.push({ loc: SITE + p });
  for (const s of sermons) urls.push({ loc: `${SITE}/sermons/${s.slug}`, lastmod: s.data.date?.toISOString().slice(0, 10) });
  for (const n of news) urls.push({ loc: `${SITE}/news/${n.slug}`, lastmod: n.data.date?.toISOString().slice(0, 10) });

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`).join('\n')}
</urlset>`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
