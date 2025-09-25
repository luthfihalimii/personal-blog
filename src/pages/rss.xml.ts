import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site ?? new URL('https://neonforge.dev');
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );

  const items = posts
    .map((post) => {
      const url = new URL(`/blog/${post.slug}/`, baseUrl);
      return `    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <link>${url.toString()}</link>
      <guid>${url.toString()}</guid>
      <pubDate>${post.data.publishDate.toUTCString()}</pubDate>
      <description><![CDATA[${post.data.description}]]></description>
    </item>`;
    })
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Neon Forge</title>
    <link>${baseUrl.toString()}</link>
    <description>Insight desain, performa, dan storytelling dari Neon Forge.</description>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8'
    }
  });
};
