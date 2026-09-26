import { defineCollection, z } from 'astro:content';

// 설교 게시판
const sermons = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    series: z.string().optional(),      // 설교 시리즈 (예: 누가복음 강해)
    scripture: z.string().optional(),   // 본문 성경
    preacher: z.string().optional(),    // 설교자
    youtube: z.string().optional(),     // 유튜브 링크
    summary: z.string().optional(),     // 한 줄 요약
    draft: z.boolean().default(false),
  }),
});

// 소식 · 글 게시판
const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { sermons, news };
