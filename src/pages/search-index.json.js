import { getCollection } from "astro:content";

import { withBase } from "patmos-design-system/site/paths.js";
import { pagesOf, sectionsOf } from "patmos-design-system/site/search.js";
import { site } from "../lib/nav.js";

export async function GET() {
  const brand = await site();
  const sections = await Promise.all(
    (await getCollection("brand")).map((entry) => sectionsOf(entry, brand.key, `/brand/${entry.id}/`)),
  );
  const entries = [
    ...pagesOf(brand).map((page) => ({ ...page, site: brand.key, search: `${page.label} ${page.context}`.toLowerCase() })),
    ...sections.flat().map(({ text, ...section }) => ({ ...section, search: `${section.label} ${section.context} ${text}`.toLowerCase() })),
  ];
  return Response.json(entries.map((entry) => ({ ...entry, href: withBase(entry.href) })));
}
