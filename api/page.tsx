import { API } from "@/app/api";
import { TopPageModel } from "@/interface/page.interface";

export async function getPage(alias: string): Promise<TopPageModel | null> {
  try {
    const res = await fetch(API.topPage.byAlias + alias, {
      next: {
        revalidate: 10,
      },
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch page for alias: ${alias}`);
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
}
