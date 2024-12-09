import { API } from "@/app/api";
import { TopPageModel } from "@/interface/page.interface";

export async function getPage(alias: string): Promise<TopPageModel> {
  const res = await fetch(API.topPage.byAlias + alias);
  if (!res.ok) {
    throw new Error(`Failed to fetch page for alias: ${alias}`);
  }
  return res.json();
}
