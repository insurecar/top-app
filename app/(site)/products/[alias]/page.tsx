import { Metadata } from "next";
import { getMenu, getPage } from "@/api";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Сторінка",
};

interface PageProps {
  params: Promise<{
    alias: string;
  }>;
}

interface MenuItem {
  pages: {
    alias: string;
  }[];
}

export async function generateStaticParams() {
  const menu = await getMenu(0);
  return menu.flatMap((item: MenuItem) =>
    item.pages.map((page) => ({ alias: page.alias }))
  );
}

const PageProducts = async ({ params }: PageProps) => {
  const resolvedParams = await params;

  const page = await getPage(resolvedParams.alias);

  if (!page) {
    notFound();
  }

  return <div>Сторінка з {page.title}</div>;
};

export default PageProducts;
