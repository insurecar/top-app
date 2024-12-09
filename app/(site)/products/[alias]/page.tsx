import { Metadata } from "next";
import { getPage } from "@/api";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Сторінка",
};

interface PageProps {
  params: {
    alias: string;
  };
}

const PageProducts = async ({ params }: PageProps) => {
  const page = await getPage(params.alias);

  if (!page) {
    notFound();
  }

  return <div>Сторінка з {page.title} </div>;
};

export default PageProducts;
