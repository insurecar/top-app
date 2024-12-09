import { Metadata } from "next";
import { getMenu } from "@/api";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Computed",
  };
}

export default async function Home() {
  const menu = await getMenu(0);
  // const menu = await getUser();

  return (
    <main>
      <pre>{JSON.stringify(menu, null, 2)}</pre>
      <div>{menu.length}</div>
    </main>
  );
}
