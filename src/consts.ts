import { getCollection } from "astro:content";

export const SITE_TITLE = 'Astro Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';
export const SITE_PRODACTS_SLUGS = (await getCollection("products")).map((p) => p.data.slug);
export const SITE_PAGES_SLUGS = (await getCollection("pages")).map((p) => p.data.slug);
export const SITE_BASE = '/pyramidstires/';