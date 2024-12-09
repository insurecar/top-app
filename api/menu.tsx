import { API } from "../app/api";

export async function getMenu(firstCategory: number) {
  const res = await fetch(API.topPage.find, {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify({
      firstCategory,
    }),
  });

  return res.json();
}
