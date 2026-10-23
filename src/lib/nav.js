import { getCollection } from "astro:content";
import { theme } from "virtual:design-system/theme";

export async function site() {
  const pages = (await getCollection("brand")).sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
  return {
    key: "brand",
    label: "Brand",
    name: `${theme.name} Brand`,
    href: "/",
    icon: "brand",
    large: true,
    sections: [
      { heading: null, label: "Brand", items: [{ label: "Introduction", href: "/", icon: "home" }] },
      {
        heading: "Identity",
        items: pages.map((page) => ({ label: page.data.title, href: `/brand/${page.id}/`, icon: page.data.icon })),
      },
    ],
  };
}
